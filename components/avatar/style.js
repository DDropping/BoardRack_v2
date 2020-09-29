import styled from "styled-components";

export const Container = styled.div`
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${({ size }) => size * 0.8}px;
  color: ${({ primary }) => primary};
  background-color: ${({ secondary }) => secondary};

  :hover {
    ${({ isEditable }) => isEditable && {}}
  }
`;

export const EditButton = styled.div`
  opacity: 0;
  position: absolute;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) => size * 0.5}px;
  background-color: ${({ theme }) => theme.primaryTransparentWhite};
  transition: ${({ theme }) => theme.easeInOut};
  :hover {
    opacity: 1;
  }
`;

export const UploadImageButton = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  ::-webkit-file-upload-button {
    cursor: pointer;
  }
`;
