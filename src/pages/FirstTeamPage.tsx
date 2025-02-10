import Header from "../components/Header.tsx";
import FirstTeamLogo from "../assets/1teamLogo.png";
import styled from "styled-components";
import Title from "../components/Title.tsx";
import StoreImage from "../assets/1teamStore.png";
import Footer from "../components/Footer.tsx";
import ImgSlider from "../components/ImgSlider.tsx";

import Img1 from "../assets/image12.png";
import Img2 from "../assets/2teamStore.png";
import Img3 from "../assets/3teamStore.png";

const images = [
  Img1,
  Img2,
  Img3,
];

const FirstTeamPage = () => {
    return (
      <>
        <Header logoImage={FirstTeamLogo} />
        <TeamPageWrapper>
          <ComponentWrapper>
            <Title title={"스토어 소개"} />
            <TextWrapper>
              <BoldText>1팀에서 기획한 이상적인 상점 오픈!</BoldText>
              <span>팀원 : 남정윤, 이상민, 이상혁, 이주현, 조해솔</span>
            </TextWrapper>
            <PreviewWrapper>
              <StorePreview>
                <StarIcon className="star-icon top-left" />
                <StarIcon className="star-icon top-right" />
                <StarIcon className="star-icon bottom-left" />
                <StarIcon className="star-icon bottom-right" />
                <BoldTextBox>SAVENERGY</BoldTextBox>
                <img src={StoreImage} alt="store" />
                <TextWrapper>
                  <span>보증금 제도를 통해 환경을 보호하는</span>
                  <span>일회용 보조배터리 자판기!</span>
                </TextWrapper>
              </StorePreview>
            </PreviewWrapper>
            <SectionDivider />
            <Title title={"스토어 상세"} />
            <span>이미지와 영상을 통해 1팀의 상점을 둘러보세요.</span>
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

export const TeamPageWrapper = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  background: linear-gradient(to bottom, #EBCBFF, #FFEBBF);
  overflow-y: auto;
`;

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  min-height: 100%;
  padding: 60px 0 2rem 0;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PreviewWrapper = styled.div`
  display: flex;
  width: 305px;
  height: 405px;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 14px;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.25);
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 165px;
`;

export const LinkButton = styled.button`
  width: 260px;
  height: 30px;
  border-radius: 50px;
  border: none;
  color: white;
  background: linear-gradient(to bottom, #A98BF8, #B375F8);
`;

export const StorePreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  width: 265px;
  height: 365px;
  border-radius: 14px;
  background: linear-gradient(to bottom, #BCEDC7, #A98BF8);
  position: relative;
  color: white;

  & > .star-icon {
    position: absolute;
    width: 13px;
    height: 12px;
  }

  & > .top-left {
    top: -3%;
    left: -3%;
  }

  & > .top-right {
    top: -3%;
    right: -3%;
  }

  & > .bottom-left {
    bottom: -3%;
    left: -3%;
  }

  & > .bottom-right {
    bottom: -3%;
    right: -3%;
  }
`;

export const BoldTextBox = styled.span`
  font-weight: bold;
  width: 176px;
  height: 36px;
  color: white;
  background: #A98BF8;
  border-radius: 23px;
  align-content: center;
`;

export const ImgWrapper = styled.div`
  width: 90%;
  height: 477px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_81_367)">
      <path d="M0.0941772 6.05154C4.6126 5.18573 5.25157 4.52954 5.99095 0C6.85812 4.51131 7.51535 5.14928 12.052 5.88749C7.53361 6.7533 6.89464 7.40949 6.15526 11.939C5.28808 7.42772 4.63086 6.78976 0.0941772 6.05154Z" fill="#B375F8"/>
    </g>
    <defs>
      <clipPath id="clip0_81_367">
        <rect width="11.9579" height="11.939" fill="white" transform="translate(0.0940857)"/>
      </clipPath>
    </defs>
  </svg>
);

export default FirstTeamPage;
