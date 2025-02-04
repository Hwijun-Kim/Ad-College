import { PageWrapper } from "./MainPage.tsx";
import Header from "../components/Header.tsx";
import styled from "styled-components";
import Footer from "../components/Footer.tsx";
import Title from "../components/Title.tsx";

const DetailPage = () => {
    return (
      <>
        <Header />
        <PageWrapper>
          <ComponentWrapper>
            <Title title={"프로젝트 소개"} />
            <Detail>이 프로젝트는 ...</Detail>
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
  gap: 2rem;
`;

const Detail = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 24px;
  background: white;
  padding: 1rem;
`;

export default DetailPage;
