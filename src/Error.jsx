import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./Button";

const Error = () => {
  return (
    <Wrapper>
      <img src="./images/error.svg" alt="Error page" />
      <NavLink to="/">
        <Button className="backBtn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 60vh;
  }

  .backBtn {
    margin-top: 3rem;
  }
`;
export default Error;
