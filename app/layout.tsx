import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexaFlow | AI-Powered Data Automation Platform",
  description:
    "NexaFlow helps modern teams automate workflows, analyze data, and accelerate productivity using next-generation AI.",
  keywords: [
    "AI",
    "Automation",
    "Workflow",
    "Analytics",
    "SaaS",
    "NexaFlow",
  ],
  authors: [{ name: "NexaFlow Team" }],
  openGraph: {
    title: "NexaFlow",
    description:
      "Transform your business with AI-powered workflow automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}