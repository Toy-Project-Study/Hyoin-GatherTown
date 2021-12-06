import React, { useState, useRef } from "react";
import styled from "styled-components";
import { userImages } from "../../assets/index";
import { useNavigate } from "react-router-dom";

const InputName = () => {
  let navigate = useNavigate();
  const [submitForm, setSubmitForm] = useState("");
  const [selectChar, setSelectChar] = useState(false);
  const handleSubmit = (e) => {
    setSubmitForm(e.target.value);
  };

  const handleStart = () => {
    if (submitForm === "" || selectChar !== true) {
      alert("캐릭터 또는 이름을 입력하세요");
    } else if (submitForm !== "" && selectChar === true) {
      navigate("/main");
    }
    setSubmitForm("");
  };
  const selectRef = useRef();
  const onClickCharacter = (e) => {
    setSelectChar(true);
    const selectedCharacter = e.target.closest("div");
    const selectedCharacterSrc = e.target.closest("img").src;
    sessionStorage.setItem("character", selectedCharacter);
    selectRef.current.src = selectedCharacterSrc;
  };
  return (
    <StyledRoot>
      <p>원하시는 토토로 캐릭터를 선택해주세요!</p>
      <SelectCharacter ref={selectRef}></SelectCharacter>
      <div style={{ display: "flex", flexWrap: "wrap" }} onClick={onClickCharacter}>
        <Option value="ninja">
          <img className="image__group" src={userImages.ninja.stand.default} />
        </Option>
        <Option value="mario">
          <img className="image__group" src={userImages.mario.stand.default} />
        </Option>
        <Option value="orange">
          <img className="image__group" src={userImages.orange.stand.default} />
        </Option>
        <Option value="jiwoo">
          <img className="image__group" src={userImages.jiwoo.stand.default} />
        </Option>
        <Option value="pig">
          <img className="image__group" src={userImages.pig.stand.default} />
        </Option>
        <Option value="superman">
          <img className="image__group" src={userImages.superman.stand.default} />
        </Option>
        <Option value="gentleman">
          <img className="image__group" src={userImages.gentleman.stand.default} />
        </Option>
        <Option value="foreigner">
          <img className="image__group" src={userImages.foreigner.stand.default} />
        </Option>
      </div>
      <ProfileInput>
        <input placeholder="이름을 입력하세요" onChange={handleSubmit}></input>
        <Button onClick={handleStart}>시작하기</Button>
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
  & > p {
    font-size: 15px;
    margin: 20px;
  }

  .image {
    display: flex;
    &__group {
      width: 80px;
      height: 100px;
      cursor: pointer;
    }
  }
`;

const SelectCharacter = styled.img`
  height: 120px;
  width: 100px;
  border-radius: 20px;
  border: 1px solid #90acff;
  background-color: #90acff;
`;

const Option = styled.div`
  height: 60px;
  text-align: center;
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
