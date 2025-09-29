import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CompTrack Lab Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
