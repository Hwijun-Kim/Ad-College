import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import MainLogo from "../assets/MainLogo.png";
import LandImg from "../assets/LandImg.png";
import { TextWrapper } from "./FirstTeamPage.tsx";
import Footer from "../components/Footer.tsx";
import FirstTeamImg from "../assets/1teamStore.png";
import SecondTeamImg from "../assets/2teamStore.png";
import ThirdTeamImg from "../assets/3teamStore.png";
import ClickImg from "../assets/ClickImg.png";
import DetailImg from "../assets/DetailImg.png";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <ComponentWrapper>
        <MainImg src={MainLogo} alt="logo" />
        <TextWrapper>
          <MainText>2025 상반기 애드컬리지 윈터스쿨 프로젝트</MainText>
          <MainText>이상한 팝업스토어에 오신 여러분을 환영합니다</MainText>
        </TextWrapper>
        <LandImgWrapper>
          <LandImage src={LandImg} alt="land" />

          <TeamIcon src={FirstTeamImg} top="22%" left="42%" width="117px" height="117px" onClick={() => navigate("/firstteam")} />
          <TeamIcon src={SecondTeamImg} top="39%" left="70%" width="126px" height="124px" onClick={() => navigate("/secondteam")} />
          <TeamIcon src={ThirdTeamImg} top="59%" left="40%" width="138px" height="138px" onClick={() => navigate("/thirdteam")} />
          <TeamIcon src={DetailImg} top="43%" left="15%" onClick={() => navigate("/detail")} />
          <TeamIcon src={ClickImg} top="17%" left="70%" width="72px" height="51px" />
        </LandImgWrapper>
        <Footer />
      </ComponentWrapper>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: linear-gradient(to bottom, #EBCBFF, #FFEBBF);
`;

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  min-height: 100%;
`;

const MainText = styled.span`
  font-size: 17px;
  font-weight: 700;
  color: white;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
`;

const MainImg = styled.img`
  width: 256px;
  height: 139px;
  padding-top: 4rem;
`;

const LandImgWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const LandImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const TeamIcon = styled.img<{ top: string; left: string; width: string; height: string; }>`
  position: absolute;
  cursor: pointer;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  transform: translate(-50%, -50%);
`;

export default MainPage;
