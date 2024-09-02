import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цени | Car Deal - Внос на Автомобили от Германия до България",
  description: "Вижте нашите цени за внос на автомобили от Германия до България. Ние предлагаме конкурентни и прозрачни цени за качествени услуги.",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Цени" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
