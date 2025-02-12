import styled from "styled-components";
import Logo from "../assets/MainLogo.png";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  logoImage?: string;
}

const Header = ({ logoImage }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <IconWrapper onClick={() => navigate('/')}>
        <LeftArrowIcon />
      </IconWrapper>
      {logoImage ?
        <img src={logoImage} style={{ width: '90px', height: '30px' }} alt="logo" />
        :
        <img src={Logo} style={{ width: '75px', height: '40px' }} alt="logo" />
      }
    </HeaderWrapper>
  );
}

const LeftArrowIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 23.24L9.89335 15.6333C8.99502 14.735 8.99502 13.265 9.89335 12.3667L17.5 4.76001"
      stroke="#B17AF8"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export default Header;
