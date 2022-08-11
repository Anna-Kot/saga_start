import styled from 'styled-components';

export const PopupBlock = styled.div`
  width: 800px;
  height: 555px;
  background: #ffffff;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font: 600 32px/39px 'Inter';
    margin: 50px 0 0 50px;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  margin: 50px 50px;
  justify-content: space-between;

  label {
    font: 500 20px/24px 'Inter';
    color: #9a9caf;
    padding-top: 18px;
  }
  input {
    width: 538px;
    height: 60px;
    border-radius: 16px;
    padding-left: 20px;
    border: 2px solid #e7e8e9;
    font: 400 16px/19px 'Inter';
  }
`;
export const DescriptionBlock = styled.div`
  display: flex;
  margin: 0px 50px 50px 50px;
  justify-content: space-between;

  label {
    font: 500 20px/24px 'Inter';
    color: #9a9caf;
    padding-top: 18px;
  }
  textarea {
    resize: none;
    width: 538px;
    height: 120px;
    border-radius: 16px;
    padding: 20px;
    border: 2px solid #e7e8e9;
    font: 400 16px/19px 'Inter';
  }
`;
