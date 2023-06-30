import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const GoToBtn = () => {
  const [visible, setvisible] = useState(false);
  const GoTopButton = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  const listenScroll = () => {
    let heightHidden = 270;

    let scrollHeight =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollHeight > heightHidden) {
      setvisible(true);
    } else {
      setvisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScroll);
    return () => window.removeEventListener("scroll", listenScroll);
  }, []);

  return (
    <Wrapper>
      {visible && (
        <button className="top-btn" onClick={GoTopButton}>
          <FaArrowUp className="top-btn--icons" />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .top-btn {
    width: 5rem;
    height: 5rem;
    font-size: 2.4rem;
    background-color: ${({ theme }) => theme.colors.btn};
    color: #fff;
    border-radius: 50%;
    box-shadow: ${({ theme }) => theme.colors.shadow};
    border: transparent;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 999;
    transition: all 0.11s;
    display: flex;
    justify-content: center;
    align-items: center;

    &:active {
      transform: scale(1.1);
    }

    &--icons {
      animation: goToTop 1.2s linear infinite alternate-reverse;
    }

    @keyframes goToTop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .top-btn {
      right: 0;
      left: 40%;
    }
  }
`;

export default GoToBtn;
