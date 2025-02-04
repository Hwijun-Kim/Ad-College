import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContent>
      <span>@adcollege</span>
      <span>adcollege.head@gmail.com</span>
    </FooterContent>
  );
};

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: #A8A8A8;
`;

export default Footer;
