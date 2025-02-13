import Header from "../components/Header.tsx";
import styled from "styled-components";
import Footer from "../components/Footer.tsx";
import Title from "../components/Title.tsx";
import { GumiText, TeamPageWrapper } from "./FirstTeamPage.tsx";

import BackGround from "../assets/BackGround.png";

const DetailPage = () => {
    return (
      <>
        <Header />
        <TeamPageWrapper>
          <BackGroundImg src={BackGround} alt="backGround" />
          <ComponentWrapper>
            <Title title={"프로젝트 소개"} isDetailPage={true} />
            <Detail>
              <GumiText>2025 상반기 윈터스쿨: 지속 가능한 지구를</GumiText>
              <GumiText>위한 이상적인 온라인 전시회</GumiText>
              <BoldText>[상상이상을 판매합니다, 이상!한 팝업 스토어]</BoldText>
              <br />
              <span>애드컬리지는 오늘날 사회적 문제로 대두되는 전시회와</span>
              <span>팝업 스토어가 야기하는 환경 문제를 해결하기 위해</span>
              <span>2025 상반기 윈터스쿨 프로그램을 기획하였습니다.</span>
              <br />
              <span>본 프로그램은 환경오염 문제의 주요 원인 중 하나로</span>
              <span>지목되는 상점들을 발굴하고, 이들에게 환경을 고려한</span>
              <span>요소를 접목하여 브랜드 가치를 재정립하는 과정을</span>
              <span>
                중심으로 진행되었습니다. 또한, 이러한 상점들을 효과적으로
              </span>
              <span>홍보할 수 있는 창의적인 캠페인을 기획하며</span>
              <span>
                지속 가능한 상점 모델을 구축하는 데 중점을 두었습니다.
              </span>
              <br />
              <span>특히 이번 윈터스쿨에서는 오프라인 공간을 넘어 온라인</span>
              <span>
                환경에서 우리의 이상적인 상점을 구현함으로써 ‘애드컬리지의
              </span>
              <span>
                지속 가능한 전시회’라는 새로운 실험을 선보이고자 합니다.
              </span>
              <span>
                [이상!한 팝업스토어]에서는 회원들이 직접 기획하고 브랜딩한
              </span>
              <span>
                상점을 전시함으로써 사회적 환경 아젠다 해결을 위한 창의적
              </span>
              <span>아이디어를 경험할 수 있는 기회를 제공합니다.</span>
              <br />
              <BoldText>
                애드컬리지의 [이상!한 팝업 스토어]에서 미래지향적이고
              </BoldText>
              <BoldText>지속 가능한 상점의 비전을 경험해보세요!</BoldText>
            </Detail>
            <Footer />
          </ComponentWrapper>
        </TeamPageWrapper>
      </>
    );
};

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;
  min-height: 100%;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 479px;
  border-radius: 24px;
  background: white;
  font-size: 12px;
`;

export const BackGroundImg = styled.img`
  width: 644px;
  height: 644px;
  position: absolute;
  z-index: -9999;
  right: 1%;
  bottom: 45%;
`;

const BoldText = styled.span`
  font-weight: 700;
`;

export default DetailPage;
