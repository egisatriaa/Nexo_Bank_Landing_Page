import { Wendy_One, Zen_Maru_Gothic } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import ErrorBoundary from "@/helper/ErrorBoundary";

const wendyOne = Wendy_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-wendy-one",
});

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-zen-maru",
});

export async function generateMetadata() {
  return {
    // title: {
    //   default: "Nexo Bank - Digital Bank",
    //   template: "%s | Nexo Bank",
    // },
    // description: "Nexo Bank is a leading digital bank offering seamless online money exchange, remittance, and digital payment services for a global audience.",
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/nexo-icon.svg",
      shortcut: "/nexo-icon.svg",
      apple: "/nexo-icon.svg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${wendyOne.variable} ${zenMaruGothic.variable}`}
    >
      <body suppressHydrationWarning={true}>
        <ErrorBoundary>
          <BootstrapInit />
          <RouteScrollToTop />
        </ErrorBoundary>

        {children}
      </body>
    </html>
  );
}
