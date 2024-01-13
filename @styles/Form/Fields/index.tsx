import styled, { css } from "styled-components";

export const Input = styled.input`
  padding: 9px 20px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: transparent;
  width: 100%;
  margin-bottom: 20px;

  ${({ theme: { colors, breakpoints } }) => css`
    border: 1px solid ${colors.textColorSecondary};

    &::placeholder {
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-weight: 600;
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

  ${({ theme: { colors, breakpoints } }) => css`
    border: 1px solid ${colors.textColorSecondary};

    &::placeholder {
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-weight: 600;
      color: ${colors.textColorSecondary};
    }

    @media (max-width: ${breakpoints.md}px) {
      width: 100%;
      margin-bottom: 10px;
    }
  `}
`;
