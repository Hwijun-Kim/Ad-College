import Header from "../components/Header.tsx";
import SecondTeamLogo from "../assets/2teamLogo.png";
import Title from "../components/Title.tsx";
import {
  BoldText,
  BoldTextBox,
  ComponentWrapper,
  ImgWrapper,
  LinkButton,
  PreviewWrapper,
  SectionDivider,
  StarIcon, StoreImg,
  StorePreview, TeamPageBackGround, TeamPageWrapper, Text0, Text1, Text2,
  TextWrapper
} from "./FirstTeamPage.tsx";
import StoreImage from "../assets/2teamStore.png";
import Footer from "../components/Footer.tsx";
import ImgSlider from "../components/ImgSlider.tsx";

import Img1 from "../assets/2Team/2T-1.jpg";
import Img2 from "../assets/2Team/2T-2.jpg";
import Img3 from "../assets/2Team/2T-3.jpg";
import Img4 from "../assets/2Team/2T-4.jpg";
import Img5 from "../assets/2Team/2T-5.jpg";
import Img6 from "../assets/2Team/2T-6.jpg";
import Img7 from "../assets/2Team/2T-7.jpg";
import Img8 from "../assets/2Team/2T-8.jpg";
import Img9 from "../assets/2Team/2T-9.jpg";
import Img10 from "../assets/2Team/2T-10.jpg";
import Img11 from "../assets/2Team/2T-11.jpg";
import Img12 from "../assets/2Team/2T-12.jpg";
import Img13 from "../assets/2Team/2T-13.jpg";
import Img14 from "../assets/2Team/2T-14.jpg";
import Img15 from "../assets/2Team/2T-15.jpg";

import LongBackGround from "../assets/LongBackground.png";

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15
];

const SecondTeamPage = () => {
    return (
      <>
        <Header logoImage={SecondTeamLogo} />
        <TeamPageWrapper>
          <TeamPageBackGround src={LongBackGround} alt="backGround" />
          <ComponentWrapper>
            <Title title={"스토어 소개"} />
            <TextWrapper>
              <BoldText>2팀에서 기획한 이상적인 상점 오픈!</BoldText>
              <Text0>팀원 : 김이은, 백수현, 심서형, 조현경, 한지선</Text0>
            </TextWrapper>
            <PreviewWrapper>
              <StorePreview>
                <StarIcon className="star-icon top-left" />
                <StarIcon className="star-icon top-right" />
                <StarIcon className="star-icon bottom-left" />
                <StarIcon className="star-icon bottom-right" />
                <BoldTextBox>Separ/Ate</BoldTextBox>
                <StoreImg src={StoreImage} alt="store" />
                <TextWrapper>
                  <Text1>단순한 포장 방식이 아니다</Text1>
                  <Text2>패스트푸드 전체를 바꾸는 움직임!</Text2>
                </TextWrapper>
              </StorePreview>
            </PreviewWrapper>
            <SectionDivider />
            <Title title={"스토어 상세"} />
            <Text0>이미지와 영상을 통해 2팀의 상점을 둘러보세요.</Text0>
            <ImgWrapper>
              <ImgSlider images={images} />
            </ImgWrapper>
            <LinkButton
              href="https://www.instagram.com/reel/DGCgkEITfCk/?igsh=NXNmYTl1bXk0bW56"
              target="_blank"
              rel="noopener noreferrer"
            >
              릴스 보러가기
            </LinkButton>
            <SectionDivider />
            <Footer isTeamPage={true} />
          </ComponentWrapper>
        </TeamPageWrapper>
      </>
    );
};

export default SecondTeamPage;
