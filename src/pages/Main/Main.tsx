import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import styles from "./Main.module.css";
import SlideCard from "../../components/SlideCard/SlideCard";
import HashButton from "../../components/HashButton/HashButton";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import NewHaenyeoSwiper from "../../components/NewHaenyeoSwiper/NewHaenyeoSwiper";
import ProfileCardSwiper from "../../components/ProfileCardSwiper/ProfileCardSwiper";
import MapLanding from "../../components/MapLanding/MapLanding";

export default function Main() {
  return (
    <main className={styles.main}>
      <h3 className={`h3 ${styles.title}`}>새롭게 영입했어요</h3>
      <NewHaenyeoSwiper />
      <ProfileCardSwiper />
      <MapLanding />
    </main>
  );
}
