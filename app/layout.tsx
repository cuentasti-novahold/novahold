import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Novahold",
  description: "Novahold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
