import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Locked In - iOS App",
  description: "Stay focused and productive with the Locked In iOS app. A powerful tool for maintaining concentration and achieving your goals.",
  keywords: "iOS app, productivity, focus, locked in, mobile app",
  authors: [{ name: "Locked In Team" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: 'https://i.imgur.com/tiijGIR.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto antialiased">
        {children}
      </body>
    </html>
  );
}
