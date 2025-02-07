import { PageWrapper } from "./MainPage.tsx";
import Header from "../components/Header.tsx";
import SecondTeamLogo from "../assets/2teamLogo.png";
import Title from "../components/Title.tsx";
import styled from "styled-components";
import { BoldText, BoldTextBox, PreviewWrapper, StarIcon, StorePreview, TextWrapper } from "./FirstTeamPage.tsx";
import StoreImage from "../assets/2teamStore.png";
import Footer from "../components/Footer.tsx";

const SecondTeamPage = () => {
    return (
      <>
        <Header logoImage={SecondTeamLogo} />
        <PageWrapper>
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
                <BoldTextBox>무인 아이스크림 가게</BoldTextBox>
                <img src={StoreImage} alt="store" />
                <TextWrapper>
                  <span>쓰레기를 재활용하고 조금 더</span>
                  <span>소중한 추억을 남길 수 있다.</span>
                </TextWrapper>
              </StorePreview>
            </PreviewWrapper>
            <Title title={"스토어 상세"} />
            <span>이미지와 영상을 통해 2팀의 상점을 둘러보세요.</span>
            <Footer />
          </ComponentWrapper>
        </PageWrapper>
      </>
    );
};

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export default SecondTeamPage;
