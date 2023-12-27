import Nav from "@/components/Nav";
import { ReduxProvider } from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden" }}>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav />
          <ReduxProvider>{children}</ReduxProvider>
        </main>
      </body>
    </html>
  );
}