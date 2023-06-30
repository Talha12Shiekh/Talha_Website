import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { useGlobalContext } from "./Context";

const Hero = () => {
  const { heading, image, path, buttonContent } = useGlobalContext();
  const Wrapper = styled.section`
    padding: 5rem 0;
    .section-hero-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 40rem;
    }
    .btn {
      max-width: 16rem;
    }
    .hero-top-data {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.helper};
    }
    .hero-heading {
      text-transform: uppercase;
      font-size: 6.4rem;
    }
    .hero-paragraph {
      margin-top: 1.5rem;
      margin-bottom: 3.4rem;
      max-width: 60rem;
    }
    .section-hero-image {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    picture {
      text-align: center;
    }
    .hero-img {
      height: 30rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .grid {
        gap: 7.2rem;
      }
    }
  `;
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">{heading}</h1>
          <p className="hero-paragraph">
            I am talha shiekh a passionable developer who loves to develop
            things that the people love
          </p>
          <Button className="btn hireme-btn">
            <NavLink to={path}>{buttonContent}</NavLink>
          </Button>
        </div>
        <div className="section-hero-img">
          <picture>
            <img
              // "./images/hero.svg"
              src={image}
              style={{height:"70vh"}}
              alt="Loading..."
              className="hero-img"
            />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
