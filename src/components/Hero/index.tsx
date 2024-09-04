"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Hero = () => {
  const images = [
    "/images/hero/pexels-nuno-campos-756632-1632028.jpg",
    "/images/hero/pexels-olly-787472.jpg",
    "/images/hero/mercedes.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 7000); // Change image every 7 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section
        id="home"
        className="relative h-[70vh] overflow-hidden bg-primary pt-[120px] md:pt-[120px] lg:pt-[120px]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="slider-container w-full h-full whitespace-nowrap transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="inline-block w-full h-full"
                style={{ position: "relative" }}
              >
                <Image
                  src={src}
                  alt={`hero background ${index}`}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  priority={index === 0} // Add priority for the first image
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp max-w-[780px]"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Car Deal
                </h1>
                <p className="mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Вашият доверен партньор за внос на автомобили от Германия до
                  България. Изберете мечтаната кола, изпратете ни линка, и ние
                  ще се погрижим за останалото - от проверка до доставка.
                </p>
                <ul className="mb-10 flex flex-wrap items-center gap-5">
                  <li>
                    <Link
                      href="https://google.com"
                      className="inline-flex items-center justify-center rounded-md bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:bg-gray-2"
                    >
                      Изпратете Запитване
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
