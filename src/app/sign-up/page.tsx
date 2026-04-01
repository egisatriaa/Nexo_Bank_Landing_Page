import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import SignUpInner from "@/components/SignUpInner";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    // title: "Sign-up | Nexo Bank",
    // description: "Nexo Bank is a leading digital bank offering seamless online money exchange, remittance, and digital payment services for a global audience.",
    openGraph: {
      // title: "Sign-up | Nexo Bank",
      // description: "Nexo Bank is a leading digital bank offering seamless online money exchange, remittance, and digital payment services for a global audience.",
      url: "https://egi-portfolio.vercel.app/sign-up",
      type: "website",
      images: [
        {
          url: "https://egi-portfolio.vercel.app/images/meta.png",
          width: 1200,
          height: 630,
          alt: "Nexo Bank",
        },
      ],
    },
  };
};

const Page: React.FC = () => {
  return (
    <AOSWrap>
      {/* <Preloader /> */}
      <Preloader />

      {/* SignUpInner */}
      <SignUpInner />
    </AOSWrap>
  );
};

export default Page;
