import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import SlideCard from "../SlideCard/SlideCard";
import styles from "./NewHaenyeoSwiper.module.css";

export type NewHaenyeosInfo = {
  title: string;
  description: string;
  image: string;
  id: number;
};

export default function NewHaenyeoSwiper() {
  const [newHaenyeos, setNewHaenyeos] = useState<NewHaenyeosInfo[]>([]);

  useEffect(() => {
    fetch("/data/new-haenyeos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setNewHaenyeos(data);
      })
      .catch((error) => {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  }, []);

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        className={`mySwiper ${styles.swiper}`}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
      >
        {newHaenyeos &&
          newHaenyeos.map((h, index) => {
            const filename = h.image.match(/(.*)\./);
            return (
              <SwiperSlide key={index}>
                <SlideCard key={index}>
                  <div
                    className={`${styles.card} ${
                      filename ? styles[filename[1]] : ""
                    }`}
                  >
                    <h5 className="h5">{h.title}</h5>
                    <p className="p2">“{h.description}”</p>
                  </div>
                </SlideCard>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
