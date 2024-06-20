// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "./providers";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learning Nextjs",
  description: "Build awesome app whith nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="py-8 px-8 max-w-6xl mx-auto">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
