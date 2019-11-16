import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
`;

export const Container = styled.div`
  display: grid;
  width: 90%;
  min-height: 90%;
  margin: 0 auto auto auto;
  padding: 0 30px 30px 30px;
  background-color: #ffffcc;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Title = styled.div`
  text-align: center;
  margin-top: 60px;
`;

export const Intro = styled.div`
  margin-left: auto;
  margin-right: auto;
  height: auto;
  width: 720px;
  & > p {
    line-height: 1.8em;
    text-align: center;
  }
`;

export const MainSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;
