import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Иван Петров",
    designation: "Основател @ АвтоТрейд",
    content:
      "Изключително съм доволен от услугата. Колата беше доставена бързо и в отлично състояние. Препоръчвам на всички!",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Мария Димитрова",
    designation: "Мениджър @ БГ Авто",
    content:
      "Професионализъм на високо ниво. Всичко беше организирано перфектно и колата пристигна точно както беше обещано.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "Георги Иванов",
    designation: "Директор @ КарБГ",
    content:
      "Много съм впечатлен от обслужването. Процесът беше лесен и бърз, а колата отговаряше на всичките ми очаквания.",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[100px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Отзиви"
          title="Какво Казват Нашите Клиенти"
          paragraph="Има много различни мнения, но всички наши клиенти са единодушни - предлагаме надеждна услуга и високо ниво на удовлетворение."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
