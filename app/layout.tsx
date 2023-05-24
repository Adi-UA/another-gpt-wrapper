import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AdiGPT",
  description: "A chat GPT clone, by Adi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans text-slate-100">
      <body className={inter.className + " m-0 p-0"}>{children}</body>
    </html>
  );
}
