import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get Started</h3>
            <h3>Talk us Today</h3>
          </div>
          <div>
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Talha shiekh</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit.adipisicing elit
            </p>
          </div>
          <div className="footer-subscibe">
            <h3>Subscibe for important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <FaYoutube className="icons" />
              </div>
            </div>
          </div>
          <div style={{ width: "10vw", marginTop: "-9rem" }}>
            <h3>Contact Us</h3>
            <h3>+92 5649289232</h3>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <div>
              <p>
                @{new Date().getFullYear()} TALHA SHIEKH &copy;.All rights
                Reserved
              </p>
            </div>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS AND CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 3rem 7rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }

  .grid div:last-child {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
    }

    input[type="submit"] {
      font-size: 1.5rem;
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        display: flex;
        justify-content: center;
        align-items: center;
        .icons {
          color: white;
          font-size: 2rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 5rem;

      hr {
        margin-bottom: 2rem;
        background-color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
