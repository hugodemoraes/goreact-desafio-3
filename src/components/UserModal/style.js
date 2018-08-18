import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
`;

export const Form = styled.form`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 25px;
  width: 350px;
  flex-direction: column;

  input {
    padding: 10px 15px;
    border: 1px solid #dedede;
    background: #fff;
    border-radius: 3px;
    width: 100%;
    margin: 15px 0;
  }
`;

export const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    display: flex;
    flex: 1;
    background: #ccc;
    color: #fff;
    padding: 15px 48px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    opacity: 0.8;

    &:first-child {
      margin-right: 5px;
    }

    &:last-child {
      margin-left: 5px;
    }

    &:hover {
      opacity: 1;
    }

    &[type='submit'] {
      background: #85c47c;
    }

    i {
      width: 14px;
      height: 14px;
    }
  }
`;
