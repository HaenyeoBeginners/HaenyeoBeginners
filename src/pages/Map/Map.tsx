import React, { useEffect } from "react";
import styles from "./Map.module.css";
import MakerImageSrc from "./map_icon.png";
import HashButtonGroup from "../../components/HashButtonGroup/HashButtonGroup";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

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
      <Header text="제주 애기 상군 원정대" />
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
