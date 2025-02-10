import Header from "../components/Header.tsx";
import ThirdTeamLogo from "../assets/3teamLogo.png";
import Title from "../components/Title.tsx";
import {
  BoldText,
  BoldTextBox,
  ComponentWrapper,
  PreviewWrapper,
  StarIcon,
  StorePreview, TeamPageWrapper,
  TextWrapper
} from "./FirstTeamPage.tsx";
import StoreImage from "../assets/3teamStore.png";
import Footer from "../components/Footer.tsx";

const ThirdTeamPage = () => {
    return (
      <>
        <Header logoImage={ThirdTeamLogo} />
        <TeamPageWrapper>
          <ComponentWrapper>
            <Title title={"스토어 소개"} />
            <TextWrapper>
              <BoldText>3팀에서 기획한 이상적인 상점 오픈!</BoldText>
              <span>팀원 : 김건리, 김하영, 박지원, 신지인, 최훈지</span>
            </TextWrapper>
            <PreviewWrapper>
              <StorePreview>
                <StarIcon className="star-icon top-left" />
                <StarIcon className="star-icon top-right" />
                <StarIcon className="star-icon bottom-left" />
                <StarIcon className="star-icon bottom-right" />
                <BoldTextBox>GACHA-BLE</BoldTextBox>
                <img src={StoreImage} alt="store" />
                <TextWrapper>
                  <span>깔수록 깨끗해지는</span>
                  <span>친환경 가챠 캡슐!</span>
                </TextWrapper>
              </StorePreview>
            </PreviewWrapper>
            <Title title={"스토어 상세"} />
            <span>이미지와 영상을 통해 3팀의 상점을 둘러보세요.</span>
            <Footer isTeamPage={true} />
          </ComponentWrapper>
        </TeamPageWrapper>
      </>
    );
};

export default ThirdTeamPage;
