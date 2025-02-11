import styled from "styled-components";

interface FooterProps {
  isTeamPage?: boolean;
}

const Footer = ({ isTeamPage = false }: FooterProps) => {
  return (
    <FooterContent>
      <span>@adcollege</span>
      <span>adcollege.head@gmail.com</span>
      {isTeamPage && <span>페이지 제작: 김윤주, 김휘준, 이다은, 이연주</span>}
    </FooterContent>
  );
};

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #A8A8A8;
  padding-bottom: 2rem;
`;

export default Footer;
