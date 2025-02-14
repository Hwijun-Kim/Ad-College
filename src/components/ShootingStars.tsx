import styled, { keyframes } from 'styled-components';

const ShootingStars = () => {
  return (
    <StarsContainer>
      <StarWrapper delay={0} duration={7} top="-2%" left="70%">
        <ShootingStar>
          <AnimatedStar className="star" />
          <Trail />
        </ShootingStar>
      </StarWrapper>
      <StarWrapper delay={3} duration={6} top="-2%" left="30%">
        <ShootingStar>
          <AnimatedStar className="star" />
          <Trail />
        </ShootingStar>
      </StarWrapper>
      <StarWrapper delay={5} duration={8} top="-2%" left="85%">
        <ShootingStar>
          <AnimatedStar className="star" />
          <Trail />
        </ShootingStar>
      </StarWrapper>
      <StarWrapper delay={7} duration={5} top="5%" left="105%">
        <ShootingStar>
          <AnimatedStar className="star" />
          <Trail />
        </ShootingStar>
      </StarWrapper>
      <StarWrapper delay={2} duration={7} top="-2%" left="700%">
        <ShootingStar>
          <AnimatedStar className="star" />
          <Trail />
        </ShootingStar>
      </StarWrapper>
      <StarWrapper delay={4} duration={6} top="-2%" left="90%">
        <ShootingStar>
          <AnimatedStar className="star" />
          <Trail />
        </ShootingStar>
      </StarWrapper>
      <StarWrapper delay={6} duration={8} top="-2%" left="55%">
        <ShootingStar>
          <AnimatedStar className="star" />
          <Trail />
        </ShootingStar>
      </StarWrapper>
      <StarWrapper delay={8} duration={5} top="10%" left="105%">
        <ShootingStar>
          <AnimatedStar className="star" />
          <Trail />
        </ShootingStar>
      </StarWrapper>
    </StarsContainer>
  );
};

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_81_367)">
      <path d="M0.0941772 6.05154C4.6126 5.18573 5.25157 4.52954 5.99095 0C6.85812 4.51131 7.51535 5.14928 12.052 5.88749C7.53361 6.7533 6.89464 7.40949 6.15526 11.939C5.28808 7.42772 4.63086 6.78976 0.0941772 6.05154Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_81_367">
        <rect width="11.9579" height="11.939" fill="white" transform="translate(0.0940857)"/>
      </clipPath>
    </defs>
  </svg>
);

const shine = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
`;

const shootingStar = keyframes`
  0% {
    transform: translate(0, 0) rotate(-45deg);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translate(-300px, 300px) rotate(-45deg);
    opacity: 0;
  }
`;

const StarsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
`;

const StarWrapper = styled.div<{ delay: number; duration: number; top: string; left: string }>`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${shootingStar} ${props => props.duration}s linear infinite;
  animation-delay: ${props => props.delay}s;
`;

const ShootingStar = styled.div`
  position: relative;
  display: inline-block;
`;

const AnimatedStar = styled(StarIcon)`
  width: 20px;
  height: 20px;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.8));
  animation: ${shine} 1s ease-in-out infinite;
`;

const Trail = styled.div`
  position: absolute;
  top: 40%;
  right: 15px;
  width: 50px;
  height: 2px;
  background: linear-gradient(to right,
  rgba(255, 255, 255, 0.1),
  rgba(255, 255, 255, 0.4),
  rgba(255, 255, 255, 0.8)
  );
  transform: translateY(-50%) rotate(180deg);
  transform-origin: right center;
  filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
`;

export default ShootingStars;
