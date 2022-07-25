import styled from 'styled-components';

export const MainWrraper = styled.div`
  width: 281px;
  height: 100%;

  button {
    position: relative;
    width: 220px;
    height: 50px;
    // margin: 0;
    background-color: transparent;
    // background-color: white;
    border-radius: 6px;
    cursor: pointer;
    border: none;
    // margin-bottom: 8px;
    margin-left: 30px;

    &:active {
      background-color: #f5f5f5;
    }
    &:hover {
      background-color: #f5f5f5;
    }
    svg {
      position: absolute;
      left: 22px;
    }
    h4 {
      position: absolute;
      top: 16px;
      left: 59px;
      font: 700 16px/19px 'Lato';
      letter-spacing: 0.2px;
      margin: 0;
      color: #212121;
    }
    div {
      position: absolute;
      top: 20px;
      left: 24px;
    }
    div.number-lists {
      top: 13px;
      left: inherit;
      right: 41px;
      width: 32px;
      height: 24px;
      text-align: center;
      color: #ffffff;
      background-color: #2b6de6;
      font: 700 14px/17px 'Inter';
      padding: 3px 5px;
      box-sizing: border-box;
      border-radius: 4px;
    }
  }
`;
export const AllPostsButton = styled.button`
  margin-top: 70px;
  margin-bottom: 8px;

  svg {
    top: 19px;
  }
`;
export const ReadListButton = styled.button`
  margin-bottom: 35px;

  svg {
    top: 16px;
  }
`;
export const NumberOfList = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  width: 32px;
  height: 24px;
  text-align: center;
  color: #ffffff;
  background-color: #2b6de6;
  font: 700 14px/17px 'Inter';
  padding: 3px 5px;
  box-sizing: border-box;
  border-radius: 4px;
`;

export const Marker = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;
export const PoliticsButton = styled.button`
  margin-bottom: 8px;
  div {
    background-color: #42b883;
  }
`;
export const EngineeringButton = styled.button`
  margin-bottom: 8px;
  div {
    background-color: #64c4ed;
  }
`;
export const CookingButton = styled.button`
  margin-bottom: 35px;
  div {
    background-color: #ffbbcc;
  }
`;
export const AddPostButton = styled.button`
  svg {
    top: 18px;
  }
`;
