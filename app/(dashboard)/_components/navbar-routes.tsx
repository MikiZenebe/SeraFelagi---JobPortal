"use client";

import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavbarRoutes = () => {
  const pathname = usePathname();

  const isAdminPage = pathname?.startsWith("/admin");
  const isClientPage = pathname?.startsWith("/jobs");

  return (
    <>
      <div className="flex gap-x-2 ml-auto">
        {isAdminPage || isClientPage ? (
          <Link href={"/"}>
            <Button
              variant={"outline"}
              size={"sm"}
              className="border-l-indigo-700/20"
            >
              <LogOut />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href={"/admin/jobs"}>
            <Button
              variant={"outline"}
              size={"sm"}
              className=" border-l-indigo-700/20"
            >
              Admin Mode
            </Button>
          </Link>
        )}
        <UserButton />
      </div>
    </>
  );
};
