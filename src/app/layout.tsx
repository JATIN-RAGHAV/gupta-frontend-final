import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./ui/Footer";
import CategoryBar from "./ui/CategoryBar";
import { GlobalProvider } from "@/app/GlobalProvider";
import ToastProvider from "@/app/providers/toast-provider";
import CategoryBarServer from "./ui/CategoryBarServer";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Gupta Switchgears: Electrical Automation Bestseller",
  description: "Discover a wide range of high-quality electrical automation products from top brands like Larsen & Toubro, Schneider Electric, Polycab, and more at Gupta Associates. We specialize in providing cutting-edge solutions for industrial applications, ensuring efficiency, reliability, and safety in your operations. From automation systems to cables, switches, and control panels, we are your trusted partner for all your industrial electrical needs. Explore our extensive catalog and experience unmatched customer service, competitive pricing, and fast delivery. Optimize your industrial processes today with the best in electrical automation technology!",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png+xml" sizes="90x90" href="/logo.png" />
      </head>
      <body className="overflow-x-hidden">
        <div>
          <ClerkProvider>
            <GlobalProvider>
              <Navbar />
              <CategoryBarServer />
              <ToastProvider />
              {children}
              <Footer />
            </GlobalProvider>
          </ClerkProvider>
        </div>
      </body>
    </html>
  );
}
