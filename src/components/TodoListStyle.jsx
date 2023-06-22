import styled from "styled-components";

export const S = {
  TodoListH2: styled.h2`
    margin: 56px 0 16px;
    font-size: 22px;
    font-weight: 600;
  `,
  TodoListList: styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px 2%;
  `,
  TodoListItem: styled.li`
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 32%;
    min-height: 220px;
    margin-bottom: 10px;
    padding: 30px 24px 94px;
    border: 3px solid #203a91;
    border: 3px solid #005955;
    border-radius: 16px;
    box-shadow: 0 8px 15px rgba(11, 51, 82, 0.2);
    ${({ $IsDone }) =>
      $IsDone &&
      `box-shadow: none; border-color: #eaebed; border-color: #dbdde1;`}
  `,
  TodoListStrong: styled.strong`
    display: block;
    margin: 0 0 14px;
    font-size: 24px;
    font-weight: 600;
  `,
  TodoListParagraph: styled.p`
    flex: 1;
    color: #888;
  `,
  TodoListBox: styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    margin: 0;
    border-radius: 0 0 10px 10px;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
  `,
  TodoListButton: styled.button`
    float: left;
    min-width: 50%;
    height: 54px;
    margin: 0;
    border-radius: 0;
    box-sizing: border-box;
    border: 0;
    background: #f2f2f2;
    ${({ $IsDone }) =>
      $IsDone === undefined
        ? null
        : !$IsDone
        ? `color: #fff; background: #203a91; background: #005955;`
        : `background: #fbb938;`}
  `
};
