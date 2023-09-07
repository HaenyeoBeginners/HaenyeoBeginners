import React, { useEffect } from "react";
import styles from "./Map.module.css";
import MakerImageSrc from "./map_icon.png";
import HashButtonGroup from "../../components/HashButtonGroup/HashButtonGroup";
import { useNavigate } from "react-router-dom";

const { kakao } = window as any;

const coordinates = [
  {
    name: "하도 어촌체험 마을",
    lat: 33.310182,
    lng: 126.643846,
  },
  {
    name: "구좌 하도 마을",
    lat: 33.488652,
    lng: 126.846315,
  },
  {
    name: "어쩌구 마을1",
    lat: 33.27474,
    lng: 126.55962,
  },
  {
    name: "어쩌구 마을2",
    lat: 33.432334,
    lng: 126.88382,
  },
  {
    name: "어쩌구 마을3",
    lat: 33.531882,
    lng: 126.802776,
  },
];
const positions = coordinates.map((c) => ({
  title: c.name,
  latlng: new kakao.maps.LatLng(c.lat, c.lng),
}));

let map: any;

export default function Map() {
  const navigate = useNavigate();
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(33.380274, 126.570102),
      level: 10,
    };
    map = new kakao.maps.Map(container, options);
    // map.setZoomable(false);
    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      const imageSize = new kakao.maps.Size(16, 16);

      // 마커 이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(MakerImageSrc, imageSize);

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
        clickable: true,
      });

      kakao.maps.event.addListener(marker, "click", function () {
        // 여기서 예약 시작.
      });
    }
  }, []);

  return (
    <>
      <header className={styles.header}>
        <button onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g id="ArrowLeft">
              <path
                id="Vector"
                d="M20.8125 11.9999C20.8125 12.1491 20.7532 12.2921 20.6477 12.3976C20.5423 12.5031 20.3992 12.5624 20.25 12.5624H5.10843L10.8975 18.3524C10.9528 18.4039 10.9971 18.466 11.0278 18.535C11.0586 18.604 11.0751 18.6785 11.0764 18.754C11.0778 18.8295 11.0639 18.9045 11.0356 18.9746C11.0073 19.0446 10.9652 19.1082 10.9118 19.1617C10.8584 19.2151 10.7947 19.2572 10.7247 19.2855C10.6546 19.3138 10.5796 19.3277 10.5041 19.3263C10.4286 19.325 10.3541 19.3085 10.2851 19.2777C10.2161 19.247 10.154 19.2027 10.1025 19.1474L3.35249 12.3974C3.24716 12.2919 3.18799 12.1489 3.18799 11.9999C3.18799 11.8508 3.24716 11.7079 3.35249 11.6024L10.1025 4.85238C10.2091 4.75302 10.3502 4.69893 10.4959 4.7015C10.6416 4.70407 10.7806 4.76311 10.8837 4.86617C10.9868 4.96923 11.0458 5.10827 11.0484 5.25399C11.0509 5.39972 10.9969 5.54075 10.8975 5.64738L5.10843 11.4374H20.25C20.3992 11.4374 20.5423 11.4966 20.6477 11.6021C20.7532 11.7076 20.8125 11.8507 20.8125 11.9999Z"
                fill="#020408"
              />
            </g>
          </svg>{" "}
        </button>
        <p className="p1">제주 애기 상군 원정대</p>
      </header>
      <div className={styles.mapContainer}>
        <HashButtonGroup
          onClick={(id: number) => {
            const moveLatLon = new kakao.maps.LatLng(33.508366, 126.844735);
            map.setCenter(moveLatLon);
            map.setLevel(7);
          }}
          className={styles.btnGroup}
          transparent={false}
          initClickedBtn={false}
        />

        <div id="map" className={styles.map}></div>
      </div>
    </>
  );
}
