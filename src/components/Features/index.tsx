import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section className="pt-3 dark:bg-dark lg:pb-[15px] lg:pt-[30px]">
      <div className="container">
        <SectionTitle
          title="Нашите услуги"
          paragraph="Предлагаме широка гама от професионални услуги за улесняване на покупката и регистрацията на превозни средства от Германия до България. Всяка услуга е проектирана да осигури безпроблемно и удобно изживяване за нашите клиенти."
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
