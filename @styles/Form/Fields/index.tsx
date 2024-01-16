import styled, { css } from "styled-components";

export const Input = styled.input`
  padding: 9px 20px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: transparent;
  width: 100%;
  margin-bottom: 20px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  ${({ theme: { colors, breakpoints } }) => css`
    border: 1px solid ${colors.textColorSecondary};

    &::placeholder {
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-weight: 400;
      color: ${colors.textColorSecondary};
    }

    @media (max-width: ${breakpoints.md}px) {
      width: 100%;
      margin-bottom: 10px;
    }
  `}
`;

export const TextArea = styled.textarea`
  padding: 9px 20px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: transparent;
  width: 100%;
  margin-bottom: 10px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  ${({ theme: { colors, breakpoints } }) => css`
    border: 1px solid ${colors.textColorSecondary};

    &::placeholder {
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-weight: 400;
      color: ${colors.textColorSecondary};
    }

    @media (max-width: ${breakpoints.md}px) {
      width: 100%;
      margin-bottom: 10px;
    }
  `}
`;
