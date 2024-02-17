import styled from "styled-components";

export const Footers = styled.footer`
  width: 100%;
  height: 500px;
  text-align: center;
  border-top: 1px solid gray;
  padding: 10px 0px;

  p a {
    text-decoration: none;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 2em;
  }
  p a:hover {
    cursor: pointer;
    border-bottom: 1px solid black;
  }

  iframe {
    width: 100%;
    border: none;
    margin-top: 10px;
  }
`