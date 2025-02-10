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
  StarIcon,
  StorePreview, TeamPageWrapper,
  TextWrapper
} from "./FirstTeamPage.tsx";
import StoreImage from "../assets/2teamStore.png";
import Footer from "../components/Footer.tsx";
import ImgSlider from "../components/ImgSlider.tsx";

import Img1 from "../assets/2Team/2T-1.jpeg";
import Img2 from "../assets/2Team/2T-2.jpeg";
import Img3 from "../assets/2Team/2T-3.jpeg";
import Img4 from "../assets/2Team/2T-4.jpeg";
import Img5 from "../assets/2Team/2T-5.jpeg";
import Img6 from "../assets/2Team/2T-6.jpeg";
import Img7 from "../assets/2Team/2T-7.jpeg";
import Img8 from "../assets/2Team/2T-8.jpeg";
import Img9 from "../assets/2Team/2T-9.jpeg";
import Img10 from "../assets/2Team/2T-10.jpeg";
import Img11 from "../assets/2Team/2T-11.jpeg";
import Img12 from "../assets/2Team/2T-12.jpeg";
import Img13 from "../assets/2Team/2T-13.jpeg";
import Img14 from "../assets/2Team/2T-14.jpeg";

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
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
];

const SecondTeamPage = () => {
    return (
      <>
        <Header logoImage={SecondTeamLogo} />
        <TeamPageWrapper>
          <ComponentWrapper>
            <Title title={"스토어 소개"} />
            <TextWrapper>
              <BoldText>2팀에서 기획한 이상적인 상점 오픈!</BoldText>
              <span>팀원 : 김이은, 백수현, 심서형, 조현경, 한지선</span>
            </TextWrapper>
            <PreviewWrapper>
              <StorePreview>
                <StarIcon className="star-icon top-left" />
                <StarIcon className="star-icon top-right" />
                <StarIcon className="star-icon bottom-left" />
                <StarIcon className="star-icon bottom-right" />
                <BoldTextBox>Separ/Ate</BoldTextBox>
                <img src={StoreImage} alt="store" />
                <TextWrapper>
                  <span>단순한 포장 방식이 아니다</span>
                  <span>패스트푸드 전체를 바꾸는 움직임!</span>
                </TextWrapper>
              </StorePreview>
            </PreviewWrapper>
            <SectionDivider />
            <Title title={"스토어 상세"} />
            <span>이미지와 영상을 통해 2팀의 상점을 둘러보세요.</span>
            <ImgWrapper>
              <ImgSlider images={images} />
            </ImgWrapper>
            <LinkButton>릴스 보러가기</LinkButton>
            <SectionDivider />
            <Footer isTeamPage={true} />
          </ComponentWrapper>
        </TeamPageWrapper>
      </>
    );
};

export default SecondTeamPage;
