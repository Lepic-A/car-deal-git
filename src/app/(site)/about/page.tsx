import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "За Нас | Car Deal - Вашият Партньор за Внос на Автомобили от Германия до България",
  description: 
  "Научете повече за Car Deal, вашият доверен партньор за внос на автомобили от Германия до България. Открийте как можем да ви помогнем да намерите и доставите вашата мечтана кола.",
};


const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="За Нас" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
