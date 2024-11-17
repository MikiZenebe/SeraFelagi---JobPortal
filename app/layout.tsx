import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
//👇 Import Open Sans font
import { Open_Sans } from "next/font/google";

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "JoLent Seeker | Job Portal",
  description: "Create and find job opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${openSans.className} antialiased`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
