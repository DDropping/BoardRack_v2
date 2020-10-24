import React, { useState, useEffect } from "react";
import styled from "styled-components";

const strengthLevels = [
  { text: "Password Strength", color: "#ef4040" },
  { text: "Weak Password", color: "#ef4040" },
  { text: "Weak Password", color: "#ff9d00" },
  { text: "Moderate Password", color: "#ffee00" },
  { text: "Strong Password", color: "#00cc29" },
  { text: "Very Strong Password", color: "#00ff1a" },
];

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StrengthBox = styled.div`
  margin: auto 1px;
  height: 6px;
  width: 30px;
  border: 1px solid ${({ theme }) => theme.primaryLightGrey};
  background-color: ${({ color, isActive }) => isActive && color};
`;

const TextContainer = styled.div`
  margin-right: 10px;
  color: ${({ theme }) => theme.primaryLightGrey};
`;

const index = ({ password }) => {
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    let strengthNum = 0;
    strengthNum += password.length * 3;

    if (/\d/.test(password)) strengthNum += 15;
    if (/[a-z]/.test(password)) strengthNum += 15;
    if (/[A-Z]/.test(password)) strengthNum += 15;
    if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(password))
      strengthNum += 20;

    if (strengthNum > 85) setStrength(5);
    else if (strengthNum > 65) setStrength(4);
    else if (strengthNum > 45) setStrength(3);
    else if (strengthNum > 25) setStrength(2);
    else if (strengthNum > 10) setStrength(1);
    else setStrength(0);
  }, [password]);

  return (
    <Container>
      <TextContainer>{strengthLevels[strength].text}</TextContainer>
      <StrengthBox
        isActive={strength > 0}
        strength={strength}
        color={strengthLevels[strength].color}
      />
      <StrengthBox
        isActive={strength > 1}
        strength={strength}
        color={strengthLevels[strength].color}
      />
      <StrengthBox
        isActive={strength > 2}
        strength={strength}
        color={strengthLevels[strength].color}
      />
      <StrengthBox
        isActive={strength > 3}
        strength={strength}
        color={strengthLevels[strength].color}
      />
      <StrengthBox
        isActive={strength > 4}
        strength={strength}
        color={strengthLevels[strength].color}
      />
    </Container>
  );
};

export default index;
