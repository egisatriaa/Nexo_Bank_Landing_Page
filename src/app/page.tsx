import type { Metadata } from "next";
import TopHeaderOne from "@/components/TopHeaderOne";
import Preloader from "@/helper/Preloader";
import HeaderOne from "@/components/HeaderOne";
import BannerOne from "@/components/BannerOne";
import AOSWrap from "@/helper/AOSWrap";
import OurFeatureOne from "@/components/OurFeatureOne";
import PaynoneOne from "@/components/PaynoneOne";
import ServicesOne from "@/components/ServicesOne";
import RequestSectionOne from "@/components/RequestSectionOne";
import WorkingSectionOne from "@/components/WorkingSectionOne";
import MobileSectionOne from "@/components/MobileSectionOne";
import TestimonialsOne from "@/components/TestimonialsOne";
import FAQOne from "@/components/FAQOne";
import PaymentMethodOne from "@/components/PaymentMethodOne";
import BlogOne from "@/components/BlogOne";
import NewsletterOne from "@/components/NewsletterOne";
import FooterOne from "@/components/FooterOne";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    // title: "Home | Nexo Bank",
    // description: "Nexo Bank is a leading digital bank offering seamless online money exchange, remittance, and secure digital payment services for a global audience.",
    openGraph: {
      // title: "Home | Nexo Bank",
      // description: "Nexo Bank is a leading digital bank offering seamless online money exchange, remittance, and secure digital payment services for a global audience.",
      url: "https://egi-portfolio.vercel.app/",
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

export default function Home() {
  return (
    <AOSWrap>
      {/* <Preloader /> */}
      <Preloader />

      {/* TopHeaderOne */}
      <TopHeaderOne />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BannerOne */}
      <BannerOne />

      {/* OurFeatureOne */}
      <OurFeatureOne />

      {/* PaynoneOne */}
      <PaynoneOne />

      {/* ServicesOne */}
      <ServicesOne />

      {/* RequestSectionOne */}
      <RequestSectionOne />

      {/* WorkingSectionOne */}
      <WorkingSectionOne />

      {/* MobileSectionOne */}
      <MobileSectionOne />

      {/* TestimonialsOne */}
      <TestimonialsOne />

      {/* FAQOne */}
      <FAQOne />

      {/* PaymentMethodOne */}
      <PaymentMethodOne />

      {/* BlogOne */}
      <BlogOne />

      {/* NewsletterOne */}
      <NewsletterOne />

      {/* FooterOne */}
      <FooterOne />
    </AOSWrap>
  );
}
