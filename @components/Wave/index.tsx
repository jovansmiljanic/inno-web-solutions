"use client";

// Core types
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

interface Wave {
  children: React.ReactNode;
}

const index: FC<Wave> = ({ children }) => {
  return (
    <Wave>
      <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f8f5ff"
          fillOpacity="1"
          d="M0,256L48,234.7C96,213,192,171,288,170.7C384,171,480,213,576,234.7C672,256,768,256,864,229.3C960,203,1056,149,1152,144C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </Icon>

      {children}
    </Wave>
  );
};

export { index as Wave };

const Wave = styled.div`
  position: relative;

  width: 100%;
  height: 85vh;
  min-height: 750px;

  ${({ theme: { colors, breakpoints } }) => css`
    background-color: ${colors.primary};

    @media (max-width: ${breakpoints.sm}px) {
      min-height: 850px;
    }
  `}
`;

const Icon = styled.svg`
  position: absolute;
  left: 0;
  bottom: -1px;
`;
