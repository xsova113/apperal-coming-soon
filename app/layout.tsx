import Footer from "./components/Footer";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";

const josefin_Sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata = {
  title: "Frontend Mentor | Base Apparel coming soon page",
  description: "Created by George Chang",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body className={`${josefin_Sans.className} relative flex flex-col`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
