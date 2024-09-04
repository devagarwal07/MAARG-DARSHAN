import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Marg-Darshaan",
  description: "Educative counselling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="container">
        <div className="wrapper">
          <Navbar />
          {children}
        </div>
      </div>
      </body>
    </html>
  );
}
