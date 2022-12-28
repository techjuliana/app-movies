import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.black};
`;

export const Loading = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;
