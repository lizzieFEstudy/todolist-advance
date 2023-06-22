import styled from "styled-components";

export const S = {
  InputForm: styled.form`
    display: flex;
    padding: 26px 32px;
    border-radius: 16px;
    background: #f7f7f7;
  `,
  InputLabel: styled.label`
    flex: 1;
    display: flex;
    align-items: center;
  `,
  InputInput: styled.input`
    flex: 1;
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid #cdcdcd;
    margin: 0 28px 0 12px;
    padding: 0 10px;
    height: 48px;
    border-radius: 6px;
    width: auto;
    min-width: 150px;
    background-color: #fff;
  `,
  InputButton: styled.button`
    width: 120px;
    height: 48px;
    margin-left: auto;
    border: 0;
    border-radius: 6px;
    padding: 0 16px;
    /* background: #203a91; */
    background: #005955;
    color: #fff;
  `
};
