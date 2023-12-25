"use client";

// Core types
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

const Title = styled.h1`
  font-size: 48px;
  line-height: 1.2;

  ${({ theme: { breakpoints, font, spaces } }) => css`
    padding: ${spaces[2]}px 0;
    font-weight: ${font.weight.medium};

    @media (max-width: ${breakpoints.md}px) {
      font-size: 38px;
    }
  `}
`;
interface ITitle {
  children: string;
}

const index: FC<ITitle> = ({ children }) => {
  return <Title>{children}</Title>;
};

export { index as Title };
