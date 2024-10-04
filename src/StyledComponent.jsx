import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
const H1 = styled.h1`
  color: red;
  font-size: 20px;
  font-weight: bold;
`;

const test = css`
  text-align: center;
  transition-property: all;
  transition-duration: 2s;
  ${10 > 4 && "background-color : green"};

  &:hover {
    background-color: brown;
  }
`;

const Button = styled.button`
  color: var(--color-brand-50);
  ${test}
`;

const Heading = styled.h1`
  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 30px;
      font-weight: 600;
      color: green;
    `}
  ${(props) =>
    props.type === "h3" &&
    css`
      font-size: 35px;
      font-weight: 700;
      color: red;
    `}
`;

const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === "horizontal" &&
    css`
      flex-direction: row;
    `}
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

const variations = {
  primary: css`
    color: red;
    background-color: blue;
  `,
  secondary: css`
    color: blue;
    background-color: red;
  `,
  tertiary: css`
    color: green;
    background-color: blue;
  `,
};

const StyleButton = styled.button`
  border: 2px solid red;
  ${(props) => variations[props.variations]}
`;

const StyledInputEmail = styled.input.attrs({ type: "email" })`
  outline: 0;
  border: 2px solid blue;
  color: red;
`;

const StyledInputText = styled.input.attrs({ type: "text" })`
  outline: 0;
  border: 2px solid green;
  color: blue;
`;

const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  height: 100px;
  width: 100px;
  background-color: red;
  transition-property: all;
  transition-duration: 2s;
  color: green;
  &:hover {
    background-color: #5d5858;
    height: 200px;
    width: 200px;
    color: white;
  }
`;

export default function StyledComponent() {
  return (
    <>
      <Row type="horizontal">
        <H1>Hello</H1>
        <Button onClick={() => alert("Hello")}>Click Me!</Button>
      </Row>
      <Row>
        <H1>Hello</H1>
        <Button>Click Me!</Button>
      </Row>
      <Row type="vertical">
        <Heading type="h2">Hello</Heading>
        <Heading type="h3">Funny</Heading>
      </Row>
      <StyleButton>Green</StyleButton>
      <StyledInputEmail />
      <StyledInputText />
      <StyledNavlink to="/home">Home</StyledNavlink>
    </>
  );
}
