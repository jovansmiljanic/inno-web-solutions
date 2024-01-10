"use client";

// Core types
import type { FC } from "react";

// Global components
import { Heading } from "@components";

// Vendors
import Link from "next/link";
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

const index: FC = () => {
  // Translations
  const t = useTranslations();

  // Get current year
  const year = new Date().getFullYear();

  return (
    <Footer>
      <Main>
        <Logo src="/logo.png" alt="Inno web solutions" />

        {/* <Column>
          <Links>
            <Link href="#home">{t("homeLabel")}</Link>
            <Link href="#services">{t("servicesLabel")}</Link>
            <Link href="#about-us">{t("aboutLabel")}</Link>
            <Link href="#our-benefits">{t("benefitLabel")}</Link>
            <Link href="#app-integration">{t("integrationLabel")}</Link>
          </Links>
        </Column> */}
      </Main>
    </Footer>
  );
};

export { index as Footer };

const Footer = styled.div`
  max-width: 1340px;
  margin: auto;
`;

const Logo = styled.img`
  width: 100px;

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: 20px;
    }
  `}
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  ${({ theme: { spaces, breakpoints, colors } }) => css`
    padding: ${spaces[3]}px;
    border-bottom: 1px solid ${colors.textColorSecondary};

    a {
      color: ${colors.textColorSecondary};
      text-decoration: underline;
    }

    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
    }
  `}
`;

const Column = styled.div`
  flex: 0 0 25%;

  ${({ theme: { breakpoints, spaces } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: ${spaces[3]}px;
    }
  `}
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme: { colors } }) => css`
    a {
      padding: 7px 0;
    }
  `}
`;
