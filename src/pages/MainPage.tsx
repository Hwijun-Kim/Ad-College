import styled, {keyframes} from "styled-components";
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
import { Modal } from "antd";
import { useState } from "react";
import Popup1 from "../assets/PopUp/Popup1.png";
import Popup2 from "../assets/PopUp/Popup2.png";
import Popup3 from "../assets/PopUp/Popup3.png";
import Popup4 from "../assets/PopUp/Popup4.png";
import Popup5 from "../assets/PopUp/Popup5.png";
import Popup6 from "../assets/PopUp/Popup6.png";

const popups = [Popup1, Popup2, Popup3, Popup4, Popup5, Popup6];

const MainPage = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);

  const [currentStep, setCurrentStep] = useState(0);

  // useEffect(() => {
  //   const hasVisited = localStorage.getItem("hasVisited");
  //   if (!hasVisited) {
  //     setIsModalVisible(true);
  //     localStorage.setItem("hasVisited", "true");
  //   }
  // }, []);

  const handleNext = () => {
    if (currentStep < popups.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsModalVisible(false);
    }
  };

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

          <TeamIcon
            src={FirstTeamImg}
            top="22%"
            left="42%"
            width="117px"
            height="117px"
            onClick={() => navigate("/firstteam")}
          />
          <TeamIcon
            src={SecondTeamImg}
            top="39%"
            left="70%"
            width="126px"
            height="124px"
            onClick={() => navigate("/secondteam")}
          />
          <TeamIcon
            src={ThirdTeamImg}
            top="59%"
            left="40%"
            width="138px"
            height="138px"
            onClick={() => navigate("/thirdteam")}
          />
          <TeamIcon
            src={DetailImg}
            top="43%"
            left="15%"
            width="44px"
            height="43px"
            onClick={() => navigate("/detail")}
          />
          <ClickButton
            src={ClickImg}
            top="17%"
            left="70%"
            width="72px"
            height="51px"
          />
        </LandImgWrapper>
        <Footer />
        <Modal
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          closable={false}
          footer={null}
          centered
          maskClosable={false}
          styles={{
            content: {
              padding: 0,
              borderRadius: "19px",
            },
          }}
        >
          <ModalWrapper>
            <PopupImage
              src={popups[currentStep]}
              alt={`popup${currentStep + 1}`}
            />
            <ModalButton onClick={handleNext}>
              {currentStep === popups.length - 1 ? "입장하기" : "NEXT >>"}
            </ModalButton>
          </ModalWrapper>
        </Modal>
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

const float = keyframes`
  0% {
    transform: translate(-50%, -50%);
  }
  50% {
    transform: translate(-50%, -60%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
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

const ClickButton = styled(TeamIcon)`
  animation: ${float} 3s ease-in-out infinite;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #EFD9FA, #D6C6FF);
  gap: 1rem;
  border-radius: 19px;
  padding: 1.5rem;
`;

const PopupImage = styled.img`
  border-radius: 12px;
  width: 100%;
  max-width: 480px;
`;

const ModalButton = styled.div`
  font-family: "GumiRomanceTTF", cursive;
  font-weight: 400;
  width: 91px;
  height: 25px;
  border-radius: 5px;
  border-bottom: 2px solid #742ac7;
  cursor: pointer;
  color: #b375f8;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  align-self: center;
`;

export default MainPage;
