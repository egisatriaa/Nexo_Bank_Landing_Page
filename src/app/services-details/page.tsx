import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterTwo from "@/components/NewsletterTwo";
import FooterThree from "@/components/FooterThree";
import ServicesDetailsInner from "@/components/ServicesDetailsInner";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    // title: "Services-details | Nexo Bank",
    // description: "Nexo Bank is a leading digital bank offering seamless online money exchange, remittance, and digital payment services for a global audience.",
    openGraph: {
      // title: "Services-details | Nexo Bank",
      // description: "Nexo Bank is a leading digital bank offering seamless online money exchange, remittance, and digital payment services for a global audience.",
      url: "https://egi-portfolio.vercel.app/services-details",
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

      {/* TopHeaderTwo */}
      <TopHeaderOne />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"services details"} />

      {/* ServicesDetailsInner */}
      <ServicesDetailsInner />

      {/* NewsletterTwo */}
      <NewsletterTwo />

      {/* FooterThree */}
      <FooterThree />
    </AOSWrap>
  );
};

export default Page;
