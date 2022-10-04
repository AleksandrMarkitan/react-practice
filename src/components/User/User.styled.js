import styled from "styled-components";

export const Span = styled.span`
  color: ${({ isOrange }) => (isOrange ? "orange" : "blue")};
`;

export const Poragraph = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: tomato;
  &:hover {
    background-color: #fff;
  }
  &:hover ${Span} {
    background-color: green;
  }
`;
