import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eaysin Arafat",
  description: "I'm a React Developer, specializing in Frontend Development.",
  icons: { icon: "/icon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={raleway.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
