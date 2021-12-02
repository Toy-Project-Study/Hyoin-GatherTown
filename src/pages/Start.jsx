import React from "react";
import InputName from "../components/Start/InputName";
import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <InputName />;
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  background-color: rgb(40, 46, 78);
`;
