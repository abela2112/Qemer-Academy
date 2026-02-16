import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import ToastProvider from "@/components/providers/toast-providers/Toaster-provider";
import ConfettiProvider from "@/components/providers/confetti-provider/confetti-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Qemer Academy - Unlock Your Potential",
    template: "%s | Qemer Academy",
  },
  description:
    "Unlock your potential with Qemer Academy. Learn from industry experts, track your progress, and achieve your goals with our interactive learning platform.",
  keywords: [
    "Education",
    "Online Learning",
    "Courses",
    "Qemer Academy",
    "Development",
    "Design",
  ],
  authors: [{ name: "Qemer Academy" }],
  creator: "Qemer Academy",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConfettiProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
