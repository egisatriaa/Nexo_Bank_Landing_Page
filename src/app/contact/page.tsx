import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import Preloader from "@/helper/Preloader";
import TopHeaderOne from "@/components/TopHeaderOne";
import HeaderOne from "@/components/HeaderOne";
import Breadcrumb from "@/components/Breadcrumb";
import NewsletterTwo from "@/components/NewsletterTwo";
import FooterThree from "@/components/FooterThree";
import ContactInner from "@/components/ContactInner";

export const metadata: Metadata = {
  metadataBase: new URL("https://nexo-bank.vercel.app"), // ganti nanti

  title: "Contact | Nexo Bank",
  description:
    "Nexo Bank adalah aplikasi bank digital modern untuk transfer, tabungan, dan pembayaran dengan keamanan tinggi dan sistem transaksi yang andal.",

  openGraph: {
    title: "Contact | Nexo Bank",
    description:
      "Kelola keuanganmu dengan Nexo Bank — platform bank digital modern dengan fitur transfer, saving, dan pembayaran terintegrasi.",
    url: "/contact",
    siteName: "Nexo Bank",
    images: [
      {
        url: "/images/meta.png", // hasil convert dari logo
        width: 1200,
        height: 630,
        alt: "Nexo Bank",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
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
      <Breadcrumb title={"Contact"} />

      {/* ContactInner */}
      <ContactInner />

      {/* NewsletterTwo */}
      <NewsletterTwo />

      {/* FooterThree */}
      <FooterThree />
    </AOSWrap>
  );
};

export default Page;
