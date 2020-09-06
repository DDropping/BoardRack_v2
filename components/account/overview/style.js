import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const SectionContainer = styled.div`
  padding: 5px;
  border: 2px solid ${({ theme }) => theme.backgroundGreyMenu};
  border-radius: 5px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.backgroundLightBlueMenu};

  position: relative;
  white-space: nowrap;
`;

export const Separator = styled.div`
  margin-top: 1rem;
`;
