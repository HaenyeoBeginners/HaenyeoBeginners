import React, { useEffect, useRef, useState } from "react";
import StoryCard from "../../components/StoryCard/StoryCard";
import styles from "./StoryDetail.module.css";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Chat from "../../components/Chat/Chat";
import Profile1Image from "./profile1.png";
import Profile4Image from "./profile4.png";
import Profile6Image from "./profile6.png";
import Profile5Image from "./profile5.png";
import ImageDisplay from "../../components/ImageDisplay/ImageDisplay";
import { Button } from "reactstrap";
import { ModalID } from "../../components/Modal/Modal";

type Props = {
  onClick: (btn: ModalID) => void;
};

export default function StoryDetail({ onClick }: Props) {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(
    swiperRef.current?.swiper.activeIndex || 0
  );

  const nextButtonRef = useRef<HTMLDivElement | null>(null);
  const prevButtonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleNextClick = () => {
      setActiveIndex((prev) => {
        if (prev >= 2) return 2;

        return prev + 1;
      });
    };

    const handlePrevClick = () => {
      setActiveIndex((prev) => {
        if (prev === 0) return 0;

        return prev - 1;
      });
    };

    const nextButton = nextButtonRef.current;
    const prevButton = prevButtonRef.current;

    if (nextButton) {
      nextButton.addEventListener("click", handleNextClick);
    }
    if (prevButton) {
      prevButton.addEventListener("click", handlePrevClick);
    }

    return () => {
      // Cleanup
      if (nextButton) {
        nextButton.removeEventListener("click", handleNextClick);
      }
      if (prevButton) {
        prevButton.removeEventListener("click", handlePrevClick);
      }
    };
  }, []);

  return (
    <section
      className={`${
        activeIndex === 2
          ? styles.section
          : `${styles.section} ${styles.hidden}`
      }`}
    >
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <StoryCard>
            <>
              <div className={styles.storyDescription}>
                <h5>에피소드 #01</h5>
                <h5 className={styles.title}>뿔소라 18개, 2개는 사랑?</h5>
                <p className={styles.megaphone}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M2.77031 6.77034L16.525 2.55159C16.7112 2.49729 16.9074 2.48705 17.0982 2.52168C17.289 2.55631 17.4692 2.63486 17.6244 2.75112C17.7796 2.86738 17.9056 3.01815 17.9925 3.19152C18.0794 3.36489 18.1248 3.5561 18.125 3.75002L18.125 15C18.125 15.3315 17.9933 15.6495 17.7589 15.8839C17.5245 16.1183 17.2065 16.25 16.875 16.25C16.7555 16.2501 16.6365 16.233 16.5219 16.1992L10 14.1977V15C10 15.3315 9.8683 15.6495 9.63388 15.8839C9.39946 16.1183 9.08152 16.25 8.75 16.25H6.25C5.91848 16.25 5.60054 16.1183 5.36612 15.8839C5.1317 15.6495 5 15.3315 5 15V12.6641L2.77031 11.9805C2.51226 11.903 2.28594 11.7446 2.12475 11.5286C1.96355 11.3127 1.876 11.0507 1.875 10.7813V7.96877C1.87616 7.69946 1.96379 7.43764 2.12498 7.22188C2.28616 7.00612 2.51238 6.84783 2.77031 6.77034ZM10 12.8906L16.875 15L16.875 3.75002L10 5.8594L10 12.8906ZM6.25 15H8.75V13.8141L6.25 13.0469V15ZM3.125 10.7813H3.13359L8.75 12.5063L8.75 6.24377L3.13359 7.96252H3.125V10.775V10.7813Z"
                      fill="#020408"
                    />
                  </svg>
                  오늘 뿔소라 20개씩!!! 각자 할당량!!
                </p>
                <p>정식 해녀로써 첫 임무!</p>
                <p> 이걸로 실력 테스트를 할 거라는데...</p>
              </div>
              <div>
                <Chat
                  title="신입 해녀"
                  name="뉴성태"
                  chat="으아 떨린다...!!!!"
                  image={Profile1Image}
                  bubbleColor="blue"
                  textColor="white"
                  reverse={true}
                />
                <Chat
                  title="상군 해녀"
                  name="재이곱"
                  chat="쟤는 왜 데려왔댄?
                  빨간 것이나 따와라!!"
                  image={Profile6Image}
                  bubbleColor="white"
                  textColor="blue"
                  reverse={false}
                />
                <Chat
                  title="상군 해녀"
                  name="주운디"
                  chat="아휴 형님! 쟤도 이제 시작할때 됐죠~"
                  image={Profile4Image}
                  bubbleColor="white"
                  textColor="blue"
                  reverse={false}
                />
                <span
                  style={{
                    textAlign: "center",
                    display: "block",
                    marginTop: "58px",
                    marginBottom: "16px",
                  }}
                >
                  해가 지고... 드디어 20개를 다 잡았다!
                </span>
                <Chat
                  title="신입 해녀"
                  name="뉴성태"
                  chat="헉...! 이게 뭐야!"
                  image={Profile1Image}
                  bubbleColor="blue"
                  textColor="white"
                  reverse={true}
                />
              </div>
            </>
          </StoryCard>
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard>
            <>
              <div className={styles.storyDescription}>
                <h5>에피소드 #02</h5>
                <h5 className={styles.title}>뿔소라 18개, 2개는 사랑?</h5>
                <p>해녀의 집에 도착할 때쯤에서야</p>
                <p>망사리에 구멍이 뚫린 것을 발견했다...</p>
              </div>
              <div>
                <Chat
                  title="신입 해녀"
                  name="뉴성태"
                  chat="상군 해녀님..."
                  image={Profile1Image}
                  bubbleColor="blue"
                  textColor="white"
                  reverse={true}
                />
                <Chat
                  title="상군 해녀"
                  name="주운디"
                  chat="왜이리 울상이야 다 못 잡았어?"
                  image={Profile4Image}
                  bubbleColor="white"
                  textColor="blue"
                  reverse={false}
                />
                <Chat
                  title="상군 해녀"
                  name="재이곱"
                  chat="많이 못 잡았어? 개수 세어봐!"
                  image={Profile6Image}
                  bubbleColor="white"
                  textColor="blue"
                  reverse={false}
                />
              </div>
              <ImageDisplay image="story1" />
            </>
          </StoryCard>
        </SwiperSlide>
        <SwiperSlide>
          <StoryCard>
            <>
              <div className={styles.storyDescription}>
                <h5>에피소드 #02</h5>
                <h5 className={styles.title}>뿔소라 18개, 2개는 사랑?</h5>
              </div>
              <div>
                <Chat
                  title="신입 해녀"
                  name="뉴성태"
                  chat="하나, 둘, 셋...열아홉, 스물...어?!"
                  image={Profile1Image}
                  bubbleColor="blue"
                  textColor="white"
                  reverse={true}
                />
                <Chat
                  title="상군 해녀"
                  name="재이곱"
                  chat="잘했네, 수고했다!"
                  image={Profile6Image}
                  bubbleColor="white"
                  textColor="blue"
                  reverse={false}
                />
              </div>
              <ImageDisplay image="story2" />
              <div className={styles.memo}>
                <h5>오늘의 메모! ‘게석’이란?</h5>
                <p>
                  신입 해녀의*망사리에 크고 좋은 해산물을 몰래 넣어주는 따뜻한
                  배려가 돋보이는 문화.
                </p>
                <span>*망사리: 바구니</span>
              </div>
              <div className={styles.reservation}>
                <div className={styles.reservationCard}>
                  <img src={Profile5Image} alt="류성태" />
                  <div>
                    <p>
                      에피소드 주인공,
                      <span
                        style={{
                          color: "#608df9",
                        }}
                      >
                        뉴성태
                      </span>
                      해녀
                    </p>
                    <p>실제로 만나보고 싶다면?</p>
                  </div>
                </div>
                <div className={styles.reservationBtnContainer}>
                  <Button
                    className={styles.reservationBtn}
                    onClick={() => {
                      onClick("BEFORE_RESERV");
                    }}
                  >
                    예약하기
                  </Button>
                </div>
              </div>
            </>
          </StoryCard>
        </SwiperSlide>
        <div className="swiper-button-next" ref={nextButtonRef}></div>
        <div className="swiper-button-prev" ref={prevButtonRef}></div>
      </Swiper>
    </section>
  );
}
