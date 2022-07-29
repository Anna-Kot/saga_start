import styled from 'styled-components';

export const TableWrapper = styled.table`
  width: 82%;
  margin: 0 auto;
  border: 2px solid #2fb17f;
  border-collapse: collapse;
  margin-top: 3%;

  thead {
    tr {
      th:nth-child(1) {
        width: 5%;
      }
      th:nth-child(2) {
        width: 30%;
      }
      th:nth-child(3) {
        width: 45%;
      }
    }
  }
  tbody {
    tr {
      td {
        border: 1px solid gray;
        box-sizing: border-box;
        padding: 2px 5px;
      }
      td:nth-child(1) {
        text-align: center;
      }
    }
  }
`;
export const LoadingText = styled.h1`
  position: absolute;
  top: 20px;
  left: 49%;
`;
