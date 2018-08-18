import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  padding: 20px;
  width: 320px;
  position: absolute;
  z-index: 2;
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

export const User = styled.li`
  display: flex;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 15px 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: 0;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 100%;
    margin-right: 15px;
  }

  i {
    color: #717171;
  }

  strong {
    color: #333;
    font-size: 16px;
  }

  span {
    color: #999;
    font-size: 14px;
  }
`;

export const RemoveButton = styled.div`
  cursor: pointer;
  margin-right: 15px;
  opacity: 0.7;

  i {
    color: #d45454;
  }

  &:hover {
    opacity: 1;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
