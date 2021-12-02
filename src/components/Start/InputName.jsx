import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const InputName = () => {
  function handleStart() {
    //이름을 선택하지 않거나, 캐릭터 미선택시 넘어가지 못하도록
  }
  return (
    <StyledRoot>
      <ProfileImg></ProfileImg>
      <ProfileInput>
        <input placeholder="이름을 입력하세요"></input>
        <Link to="/main">
          <Button onClick={handleStart}>시작하기</Button>
        </Link>
      </ProfileInput>
      <div>원하시는 캐릭터와 이름을 입력하신 후, 시작하기 버튼을 눌러주세요!</div>
    </StyledRoot>
  );
};

export default InputName;

const StyledRoot = styled.div`
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    margin-top: 50px;
    color: white;
    font-size: 20px;
  }
`;

const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: #ebeeff;
  border-radius: 30px;
`;

const ProfileInput = styled.div`
  & > input {
    width: 220px;
    color: white;
    height: 40px;
    border: 1px solid #ebeeff;
    border-radius: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  width: 220px;
  color: black;
  height: 40px;
  background-color: #ebeeff;
  border-radius: 20px;
  justify-content: center;
`;
