import { css } from "@emotion/react";

export const welcomeScreen = css`
  min-height: 100%;
  max-height: fit-content;
`;

export const welcomeScreenContainer = css`
  min-width: fit-content;
  max-width: fit-content;
  min-height: 100%;
  max-height: fit-content;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  flex: 0 0;
`;

export const welcomeScreenHeader = css`
  display: flex;
  justify-content: center;
  font-size: 5rem;
  margin-bottom: 8rem;
`;

export const welcomeScreenButtons = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;
// export const welcomeScreenHeader = css``

export const mainWindowButtonMain = css`
  border-radius: 2rem;
  min-width: 25rem;
  font-size: 2rem;
  padding: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const mainWindowButtonSecond = css`
  border-radius: 2rem;
  min-width: 25rem;
  font-size: 2rem;
  padding: 2rem;
  font-weight: 700;
  color: #056f6f;
  background-color: transparent;
  border: 1px #056f6f solid;
  button:disabled {
    cursor: not-allowed;
  }
`;
