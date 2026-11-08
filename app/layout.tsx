
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "افغان بازار | بازار آنلاین افغانستان",
  description:
    "خرید و فروش آنلاین محصولات، موتر، املاک و لوازم در افغانستان",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen bg-gray-100">
        {children}
      </body>
    </html>
  );
}
