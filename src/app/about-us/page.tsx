import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterTwo from "@/components/NewsletterTwo";
import FooterThree from "@/components/FooterThree";
import AboutInner from "@/components/AboutInner";
import OurBankOne from "@/components/OurBankOne";
import WhyChooseUsOne from "@/components/WhyChooseUsOne";
import TeamMemberOne from "@/components/TeamMemberOne";
import JoinSectionOne from "@/components/JoinSectionOne";
import TestimonialsTwo from "@/components/TestimonialsTwo";
import FAQOne from "@/components/FAQOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    // title: "About | Nexo Bank",
    // description: "Nexo Bank is a leading digital bank offering seamless online money exchange, remittance, and digital payment services for a global audience.",
    openGraph: {
      // title: "About | Nexo Bank",
      // description: "Nexo Bank is a leading digital bank offering seamless online money exchange, remittance, and digital payment services for a global audience.",
      url: "https://egi-portfolio.vercel.app/about",
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

      {/* TopHeaderOne */}
      <TopHeaderOne />

      {/* HeaderTwo */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"About Us"} />

      {/* AboutInner */}
      <AboutInner />

      {/* OurBankOne */}
      <OurBankOne />

      {/* WhyChooseUsOne */}
      <WhyChooseUsOne />

      {/* TeamMemberOne */}
      <TeamMemberOne />

      {/* JoinSectionOne */}
      <JoinSectionOne />

      {/* TestimonialsTwo */}
      <div className='bg-neutral-10'>
        <TestimonialsTwo />
      </div>

      {/* FAQOne */}
      <FAQOne />

      {/* NewsletterTwo */}
      <NewsletterTwo />

      {/* FooterThree */}
      <FooterThree />
    </AOSWrap>
  );
};

export default Page;
