import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакти | Car Deal - Your Trusted Partner for Car Imports from Germany to Bulgaria",
  description: "Get in touch with Car Deal, your reliable partner for importing cars from Germany to Bulgaria. We ensure a seamless process from selection to delivery.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Контакти" />

      <Contact />
    </>
  );
};

export default ContactPage;
