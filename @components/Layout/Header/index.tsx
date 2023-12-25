"use client";

// Core types
import type { FC } from "react";

// Core
import { useContext, useEffect, useState } from "react";

// Store context
import { StoreContext } from "@context";

// NextJS
import Link from "next/link";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

// Global components
import { Button } from "@components";

// Local components
import { Navigation } from "./Navigation";

const index: FC = () => {
  // Translations
  const t = useTranslations();

  const { isTablet } = useContext(StoreContext);

  const [toggled, setToggle] = useState<boolean>(true);

  useEffect(() => {
    setToggle(!isTablet);
  }, [isTablet]);

  return (
    <Header>
      <Link href="/">
        {/* <Logo src="/logo.png" alt="" /> */}
        Logo
      </Link>

      {!isTablet && (
        <Nav>
          <Link href="#home">{t("homeLabel")}</Link>
          <Link href="#our-services">{t("servicesLabel")}</Link>
          <Link href="#about-us">{t("aboutLabel")}</Link>
          <Link href="#our-benefits">{t("benefitLabel")}</Link>
          <Link href="#app-integration">{t("integrationLabel")}</Link>

          <Button $variant="primary" size="small" as="a" href="#pricing">
            {t("getQuoteLabel")}
          </Button>
        </Nav>
      )}

      {isTablet && (
        <>
          <Navigation toggled={toggled} />
          <Toggler onClick={() => setToggle(!toggled)} />
        </>
      )}
    </Header>
  );
};

export { index as Header };

const Header = styled.div`
  position: relative;
  z-index: 100;

  max-width: 1340px;
  margin: auto;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Toggler = styled.div`
  position: absolute;
  width: 40px;
  height: 25px;
  right: 20px;
  top: 49px;
  cursor: pointer;

  &:before {
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
    position: absolute;
    content: "";
    transform: translateY(-50%);
  }

  &:after {
    width: 100%;
    height: 2px;
    top: 50%;
    left: 0;
    position: absolute;
    content: "";
    transform: translateY(50%);
  }

  ${({ theme: { colors } }) => css`
    border-top: 2px solid ${colors.black};
    border-bottom: 2px solid ${colors.black};

    &:before {
      background-color: ${colors.black};
    }
  `}
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${({ theme: { colors } }) => css`
    a {
      padding-right: 15px;
      color: ${colors.textColorPrimary};

      &:last-child {
        color: ${colors.white};
      }
    }
  `}
`;

const Logo = styled.img`
  width: 80px;
`;
