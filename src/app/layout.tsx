import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spelling Sparkle! (Grade 2)",
  description: "Fun 2nd Grade Spelling Practice & Sticker Book Album!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="min-h-screen bg-pink-50 text-purple-950 antialiased selection:bg-pink-400 selection:text-white">
        {children}
      </body>
    </html>
  );
}
