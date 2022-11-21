import { css } from "@emotion/react";

export const testHeader = css`
  display: block;
  font-size: 4rem;
  font-weight: 700;
`;

export const testControls = css`
  /* position: absolute; */
  top: 5px;
  right: 5px;
  color: #ffe3d2;
  background-color: #341c7c;

  & button {
    background-color: #056f6f;
    border-radius: 1rem;
    color: #ffe3d2;
    width: 19rem;
    font-size: 2rem;
    font-weight: 700;
  }
`;
