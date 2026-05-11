import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
// const outfit = Outfit({
//   subsets: ["latin"],
//   variable: "--font-outfit", // optional
//   weight: ["300", "400", "500", "600", "700"],
// });


export const metadata: Metadata = {
  title: "Kazi Jamshed Alam | Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      
      {/* <body className={`${outfit.className} font-sans antialiased bg-dark-bg text-gray-200 selection:bg-accent-gold/30 selection:text-white`}> */}
      <body className={`${inter.variable} font-sans bg-dark-bg text-gray-200 selection:bg-accent-gold/30 selection:text-white`}>
        <ScrollProgress />
        <CursorGlow />
        <SmoothScroll>
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
