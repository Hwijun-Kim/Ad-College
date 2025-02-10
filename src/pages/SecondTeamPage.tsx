import Header from "../components/Header.tsx";
import SecondTeamLogo from "../assets/2teamLogo.png";
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
import StoreImage from "../assets/2teamStore.png";
import Footer from "../components/Footer.tsx";

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
            <Title title={"스토어 상세"} />
            <span>이미지와 영상을 통해 2팀의 상점을 둘러보세요.</span>
            <Footer isTeamPage={true} />
          </ComponentWrapper>
        </TeamPageWrapper>
      </>
    );
};

export default SecondTeamPage;
