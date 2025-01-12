import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Deal",
  description: 
  "Car-Deal: Вашият доверен партньор за внос на автомобили от Германия до България. Изберете мечтаната кола, изпратете ни линка, и ние ще се погрижим за останалото - от проверка до доставка.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Testimonials />
      <Faq />
      {/* <Team /> */}
      <HomeBlogSection posts={posts} />
      <Contact />
      <Clients />
    </main>
  );
}
