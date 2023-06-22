import styled from "styled-components";

export const S = {
  DetailBox: styled.div`
    display: flex;
    flex-direction: column;
    width: 760px;
    min-height: 300px;
    margin: 32px auto;
    padding: 74px 60px 0;
  `,
  DetailSpan: styled.span`
    font-size: 16px;
    color: #767676;
  `,
  DetailStrong: styled.strong`
    margin-top: 16px;
    font-size: 36px;
    font-weight: 600;
  `,
  DetailParagraph: styled.p`
    min-height: 180px;
    margin-top: 50px;
    padding-top: 50px;
    border-top: 1px solid #111;
  `,
  DetailButton: styled.button`
    width: 160px;
    height: 52px;
    margin: auto;
    padding: 0 16px;
    border: 1px solid #dbdde1;
    border-radius: 8px;
    background: transparent;
  `
};
