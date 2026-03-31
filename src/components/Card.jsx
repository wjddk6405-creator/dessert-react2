import React from "react";

const Card = () => {
  return (
    <section id="cardType" className="section">
      <h2>카페, 그 이상의 문화를 만들다</h2>
      <p>
        투썸플레이스는 프리미엄 커피 & 디저트 카페의 리딩 브랜드로서 디저트 카페 문화의 차별화 된
        제품과 서비스를 선보일 것입니다.
      </p>
      <div className="card_inner container">
        <article className="card">
          <figure className="card_header">
            <img src="img/dessert01.jpg" alt="디저트 이미지" />
          </figure>
          <div className="card_body">
            <h3 className="tit">내 취향이 담긴 커피</h3>
            <p className="desc">
              커피 전문점조차 낯설었던 2002년, 1호점인 신촌점을 시작으로 투썸플레이스는 프리미엄
              디저트 카페 브랜드로서 커피는 물론 다양한 디저트를 함께 즐기는 새로운
            </p>
            <a href="#" className="btn">
              {" "}
              더 자세히 보기 <span></span>{" "}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Card;
