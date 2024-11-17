"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1, { message: "Job title can't be empty" }),
});

const JobCreatePage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
      <div>
        <h1 className="text-2xl">Name your job</h1>
        <p className="text-sm text-neutral-500">
          What would you to name your job? Don&apos;t worry, you can change this
          later
        </p>

        {/* Form */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Type</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g 'Fullstack Developer'"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Role of this job</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href={"/"}>
                <Button type="button" variant={"ghost"} disabled={isSubmitting}>
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={!isValid || isSubmitting}
              >
                {isSubmitting ? "Creating job..." : "Create job"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default JobCreatePage;
