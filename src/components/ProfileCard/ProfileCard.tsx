import React from "react";
import styles from "./ProfileCard.module.css";
import { HaenyeosProfileInfo } from "../ProfileCardSwiper/ProfileCardSwiper";
import { useNavigate } from "react-router-dom";

type Props = Omit<HaenyeosProfileInfo, "id" | "title" | "group"> & {
  title: string | React.ReactNode;
};

export default function ProfileCard({
  image,
  title,
  description,
  name,
}: Props) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.card}
      onClick={() => {
        navigate("/story/1");
      }}
    >
      <div className={styles.imageContainer}>
        <img src={`/images/${image}`} alt={name} />
      </div>
      <div>
        <h5 className={`h5`}>{title}</h5>
        <p className={`h6`}>{description}</p>
      </div>
    </div>
  );
}
