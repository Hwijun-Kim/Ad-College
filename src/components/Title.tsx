import styled from "styled-components";

interface TitleProps {
  title: string;
  isDetailPage?: boolean;
}

const Title = ({ title, isDetailPage = false }: TitleProps) => {
  return (
    <TitleWrapper isDetailPage={isDetailPage} >
      <TitleIcon />
      <TitleText>{title}</TitleText>
      <TitleIcon />
    </TitleWrapper>
  );
};

const TitleIcon = () => (
  <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_1_341)">
      <path d="M5 18.1718C14.4466 16.3588 15.7824 14.9847 17.3282 5.5C19.1412 14.9466 20.5153 16.2824 30 17.8282C20.5534 19.6412 19.2176 21.0153 17.6718 30.5C15.8588 21.0534 14.4847 19.7176 5 18.1718Z" fill="white"/>
    </g>
    <defs>
      <filter id="filter0_d_1_341" x="0" y="0.5" width="35" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="2.5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_341"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_341" result="shape"/>
      </filter>
    </defs>
  </svg>
);

const TitleWrapper = styled.div<{ isDetailPage: boolean }>`
  display: flex;
  align-items: center;
  gap: 7px;
  ${({ isDetailPage }) => isDetailPage && "padding-top: 2rem;"}
`;

const TitleText = styled.span`
  font-family: 'GumiRomanceTTF', cursive;
  font-weight: 400;
  width: 125px;
  height: 30px;
  color: white;
  background: linear-gradient(to bottom, #A98BF8, #B375F8);
  border-radius: 50px;
  border: 5px solid white;
  align-content: center;
`;

export default Title;
