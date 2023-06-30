import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";

const Header = () => {
  const [openMenu, setopenMenu] = useState(false);

  const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 5rem;
    display: flex;
    background-color: ${({ theme }) => theme.colors.bg};
    justify-content: space-between;
    align-items: center;

    .logo {
      font-size: larger;
      text-align: center;
      background: black;
      letter-spacing: 2px;
      font-weight: bold;
      height: auto;
      color: white;
      padding: 0.5em;
      width: 13rem;
    }

    nav {
      .listItems {
        display: flex;
        gap: 4.8rem;
        li {
          list-style: none;
          .nav-link {
            text-decoration: none;
            &:link,
            &:visited {
              display: inline;
              text-decoration: none;
              font-size: 1.2rem;
              font-weight: 500;
              text-transform: uppercase;
              color: ${({ theme }) => theme.colors.black};
              transition: color 0.3s linear;
            }
            &:hover,
            &:active {
              color: ${({ theme }) => theme.colors.helper};
            }
          }
        }
      }
    }

    .mobile-navbar-btn {
      display: none;

      .close-icon {
        display: none;
      }
    }
    .mobile-navbar-btn[name="close-icon"] {
      display: none;
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
          margin-right: 3rem;
        }
      }
      .listItems {
        width: 100vw;
        height: 100vh;
        transition: all 0.21s;
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(100%);
        visibility: hidden;
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;

        .nav-link {
          font-size: 3.2rem !important;
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        z-index: 999;
        color: ${({ theme }) => theme.colors.black};
      }

      .active .close-icon {
        display: block !important;
      }

      .active .listItems {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
      }
    }
  `;
  return (
    <>
      <MainHeader>
        <NavLink to="/" onClick={() => setopenMenu(false)}>
          <div className="logo">TALHA SHIEKH</div>
        </NavLink>
        <nav>
          <div className={openMenu ? "menuIcon active" : "menuIcon"}>
            <ul className="listItems">
              <li>
                <NavLink
                  onClick={() => setopenMenu(false)}
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setopenMenu(false)}
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setopenMenu(false)}
                  className="nav-link"
                  to="/contact"
                >
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setopenMenu(false)}
                  className="nav-link"
                  to="/service"
                >
                  Services
                </NavLink>
              </li>
            </ul>
            <div className="mobile-navbar-btn">
              <CgMenu
                name="menu-icon"
                className="menu-icon mobile-nav-icon"
                onClick={() => setopenMenu(true)}
              />
              <CgClose
                name="close-icon"
                className="close-icon mobile-nav-icon"
                onClick={() => setopenMenu(false)}
              />
            </div>
          </div>
        </nav>
      </MainHeader>
    </>
  );
};

export default Header;
