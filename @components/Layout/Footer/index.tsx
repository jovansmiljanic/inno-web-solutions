"use client";

// Core types
import type { FC } from "react";

// Vendors
import Link from "next/link";
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

// Global components
import { Heading } from "@components";

const index: FC = () => {
  // Translations
  const t = useTranslations();

  // Get current year
  const year = new Date().getFullYear();

  return (
    <Footer>
      <Main>
        <Column>
          <Logo src="/logo.png" alt="Inno web solutions" />
        </Column>

        <Column>
          <Heading
            as="p"
            $weight="regular"
            color="textColorSecondary"
            $textAlign={{ xs: "center", sm: "center", md: "center" }}
          >
            {t("copyRight", { year })}
          </Heading>
        </Column>

        <Column>
          <Links>
            <Link href="#home">{t("navLabel1")}</Link>
            <Link href="#services">{t("navLabel2")}</Link>
            <Link href="#about-us">{t("navLabel3")}</Link>
            <Link href="#our-benefits">{t("navLabel4")}</Link>
            <Link href="#app-integration">{t("navLabel5")}</Link>
          </Links>
        </Column>
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
  width: 170px;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  flex: 0 0 30%;

  ${({ theme: { breakpoints, spaces } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: ${spaces[3]}px;
    }
  `}
`;

const Links = styled.div`
  display: flex;
  justify-content: flex-end;

  a {
    margin: 0 10px;
  }
`;
