import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   vertical-align: top;
//   flex: 1;
//   li {
//     list-style-type: none;
//     a {
//       :hover {
//         color: ${({ theme }) => theme.primaryBlack};
//       }
//     }
//   }
//   @media (max-width: ${({ theme }) => theme.sm}) {
//     justify-content: center;
//   }
// `;

// export const Li = styled.div``;

export const Container = styled.div``;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.sm}) {
    justify-content: center;
  }
`;

export const UlList = styled.div`
  list-style-type: none;
`;

export const Li = styled.li``;
