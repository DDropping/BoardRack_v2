import styled from 'styled-components';

const PreviewContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  width: 100%;
  height: 5rem;
  background-color: ${(props) => (props.primary ? '#f3f7f9' : null)};
`;

const ImgContainer = styled.div`
  position: relative;
  height: 5rem;
  line-height: 5rem;
  width: 5rem;
  overflow: hidden;
  background-color: #f3f7f9;
  text-align: center; /* center horizontally */
`;

const ImgBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  filter: opacity(0.2);
  -webkit-filter: opacity(0.2);
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position: center;
`;

const Img = styled.img`
  max-height: 100%;
  max-width: 100%;
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  vertical-align: middle; /* center vertically */
  position: relative;
`;

const Status = styled.div`
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  flex: 1;
  div {
    font-size: 1.25rem;
    vertical-align: middle; /* center vertically */
  }
`;

const Options = styled.div`
  font-size: 1.5rem;
  margin: 0 0.5rem;
`;

const Star = styled.span`
  color: ${({ theme }) => theme.secondaryBlue};
`;

const Delete = styled.span`
  color: ${({ theme }) => theme.secondaryRed};
`;
