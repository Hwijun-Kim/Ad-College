import styled from "styled-components";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <span>메인 페이지</span>
      <Button type="primary" shape="round" size={"large"} onClick={() => navigate('/firstteam')}>
        1팀
      </Button>
      <Button type="primary" shape="round" size={"large"} onClick={() => navigate('/secondteam')}>
        2팀
      </Button>
      <Button type="primary" shape="round" size={"large"} onClick={() => navigate('/thirdteam')}>
        3팀
      </Button>
      <Button shape="round" size={"large"} onClick={() => navigate('/detail')}>
        설명
      </Button>
    </PageWrapper>
  );
};

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;

  background: linear-gradient(to bottom, #EBCBFF, #FFEBBF);
  
  gap: 1rem;
`;

export default MainPage;
