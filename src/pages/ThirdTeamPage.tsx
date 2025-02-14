import Header from "../components/Header.tsx";
import ThirdTeamLogo from "../assets/3teamLogo.png";
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
import StoreImage from "../assets/3teamStore.png";
import Footer from "../components/Footer.tsx";
import ImgSlider from "../components/ImgSlider.tsx";

import Img1 from "../assets/3Team/3T-1.png";
import Img2 from "../assets/3Team/3T-2.png";
import Img3 from "../assets/3Team/3T-3.png";
import Img4 from "../assets/3Team/3T-4.png";
import Img5 from "../assets/3Team/3T-5.png";
import Img6 from "../assets/3Team/3T-6.png";
import Img7 from "../assets/3Team/3T-7.png";
import Img8 from "../assets/3Team/3T-8.png";

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
];

const ThirdTeamPage = () => {
    return (
      <>
        <Header logoImage={ThirdTeamLogo} />
        <TeamPageWrapper>
          <TeamPageBackGround src={LongBackGround} alt="backGround" />
          <ComponentWrapper>
            <Title title={"스토어 소개"} />
            <TextWrapper>
              <BoldText>3팀에서 기획한 이상적인 상점 오픈!</BoldText>
              <Text0>팀원 : 김건리, 김하영, 박지원, 신지인, 최훈지</Text0>
            </TextWrapper>
            <PreviewWrapper>
              <StorePreview>
                <StarIcon className="star-icon top-left" />
                <StarIcon className="star-icon top-right" />
                <StarIcon className="star-icon bottom-left" />
                <StarIcon className="star-icon bottom-right" />
                <BoldTextBox>GACHA-BLE</BoldTextBox>
                <StoreImg src={StoreImage} alt="store" />
                <TextWrapper>
                  <Text1>깔수록 깨끗해지는</Text1>
                  <Text2>친환경 가챠 캡슐!</Text2>
                </TextWrapper>
              </StorePreview>
            </PreviewWrapper>
            <SectionDivider />
            <Title title={"스토어 상세"} />
            <Text0>이미지와 영상을 통해 3팀의 상점을 둘러보세요.</Text0>
            <ImgWrapper>
              <ImgSlider images={images} />
            </ImgWrapper>
            <LinkButton
              href="https://www.instagram.com/reel/DGCgeAZzNp4/?igsh=ZmVuMnVjcmNzOTJs"
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

export default ThirdTeamPage;
