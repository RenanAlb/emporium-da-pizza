import styled from "styled-components";

export const Main = styled.main`
  background-color: white;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  padding: 110px 10px 0px 10px;
  z-index: -1;

  h1 {
    padding: 20px 10px;
  }

  h3 {
    padding: 20px 10px;
    font-size: 2em;
    text-align: center;
  }
`

export const Form = styled.form`
  background-color: #ECE8E4;
  width: 1000px;
  margin: 50px auto 50px auto;
  padding: 20px;

  @media screen and (max-width: 1040px) {
    width: 100%;
  }
`

export const Input = styled.input`
  margin: 10px 0px;
  height: 35px;
  padding: 5px;
  font-size: 1.2em;
  font-family: Arial, Helvetica, sans-serif;
  outline: none;
  border: 1px solid gray;

  &::placeholder {
    font-size: 0.85em;
    color: gray;
  }
`

export const Label = styled.label`
  font-family: Arial, Helvetica, sans-serif;
`

export const Container = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;

  select {
    margin: 10px 0px;
    height: 35px;
    padding: 5px;
    font-size: 1.2em;
    font-family: Arial, Helvetica, sans-serif;
    outline: none;
    border: 1px solid gray;
  }

  select option {
    font-family: Arial, Helvetica, sans-serif;
  }

  textarea {
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    height: 200px;
    outline: none;

    &::placeholder {
    font-size: 1em;
    color: gray;
    }
  }
`

export const Button = styled.button`
  background-color: #96040B;
  margin: 10px 0px;
  border: none;
  padding: 10px;
  color: white;
  transition: 0.2s;
  font-size: 1.2em;

  &:hover {
    cursor: pointer;
    background-color: black;
    transition: 0.2s;
  }

  @media screen and (max-width: 1040px) {
    width: 100%;
  }
`
