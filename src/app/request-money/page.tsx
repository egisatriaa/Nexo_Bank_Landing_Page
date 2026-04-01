import React from "react";
import type { Metadata } from "next";
import AOSWrap from "@/helper/AOSWrap";
import DashboardLayout from "@/layout/DashboardLayout";
import DashboardRequestMoney from "@/components/DashboardRequestMoney";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    // title: "Request-money | Nexo Bank",
    // description: "Nexo Bank is a leading digital bank offering seamless online money exchange, remittance, and digital payment services for a global audience.",
    openGraph: {
      // title: "Request-money | Nexo Bank",
      // description: "Nexo Bank is a leading digital bank offering seamless online money exchange, remittance, and digital payment services for a global audience.",
      url: "https://egi-portfolio.vercel.app/request-money",
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
      <DashboardLayout>
        {/* DashboardRequestMoney */}
        <DashboardRequestMoney />
      </DashboardLayout>
    </AOSWrap>
  );
};

export default Page;
