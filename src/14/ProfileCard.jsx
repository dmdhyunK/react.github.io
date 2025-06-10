import React from "react";
import Card from "./Card";

const profiles = [
  {
    id: 1,
    title: "MIYEON",
    color: "red",
    intro: "1997년 1월 31일",
    src: "https://i.namu.wiki/i/GGw-b7N_x3-eymNCl9yDKFwwUTB8qPyatFWA9WSMu9AL_UsjJhwy9ykd9czlSVV1PtjB4D-rZmlY7BT7bPTiWImeiUHpVF0D-JPc-vsQuW1eohBqEDm9jORkhbKZyCaQdn1IcWlamS2atDcY5blqPg.webp"
  },
  {
    id: 2,
    title: "MINNIE",
    color: "orange",
    intro: "1997년 10월 23일",
    src: "https://i.namu.wiki/i/-Cs-IlKFsorQWsgjjH7QcQOaq9UjHpHgrbZ4gTaAPqKvzRQJYHTfkghihH3V-9t7pnCmWrE2THAPaLIzgpBTC2JNkB2qSp3K4q2xDd_RzjrQlSBxeWoNV-ZYvBaXInC2RkiF6mmKT3_pgOavXh5PEA.webp"
  },
  {
    id: 3,
    title: "SOYEON",
    color: "yellow",
    intro: "1998년 8월 26일",
    src: "https://i.namu.wiki/i/IGJ1YSt0zhFT1g-KBReUsRgdpbnm5kWAT2NFD4GUdELTmjgGqXZhba_MKZYpTyg2E__8Y7q89e1vi5W9rHENI-_HWcGNVQnAeWvSq6pGdFkt_9NBmo_dulfemCVknLTnDnX8ve6e4zSg6aAXPAIZrA.webp"
  },
  {
    id: 4,
    title: "YUQI",
    color: "green",
    intro: "1999년 9월 23일",
    src: "https://i.namu.wiki/i/sku48l4z8CCJmH28SP1wRRcqk7NUX4eFXLnEog_8XEC-w8nvtvJb-KGZgQJ-ttnM1rwkQvK0_UocsmPxvpd_EGW0GbXqAtMPSJpNSpWWvOMXw6zqJmz6tbmdYu5vdaKTyn7TQEFHpoeYLgh-8jtOxw.webp"
  },
  {
    id: 5,
    title: "SHUHUA",
    color: "blue",
    intro: "2000년 1월 6일",
    src: "https://i.namu.wiki/i/C9OCkqeQD-HIsJgpXekewAHLRBkQRjtZGA-BRP3yVOirkMJi8OIr3TIfPf_G-Aq2gzyeG-QFk-cqEI5bdrCqXii003BA2W7UDTtMIndYBD7ljwFOVbB2js4Ml8YqcSsD38OWySKsF_nZIXOMgq0bmQ.webp"
  },
];

function ProfileCard() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {profiles.map((li) => (
        <Card key={li.id} title={li.title} backgroundColor={li.color}>
          <p>안녕하세요, {li.title}입니다.</p>
          <p>생일: {li.intro}</p>
          <img src={li.src} alt={li.title} style={{ width: "300px" }} />
        </Card>
      ))}
    </div>
  );
}

export default ProfileCard;
