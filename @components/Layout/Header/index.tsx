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
    <Wrapper>
      <Header>
        <Link href="/">
          <Logo src="/logo.png" alt="" />
        </Link>

        {!isTablet && (
          <Nav>
            <Link href="#home">{t("navLabel1")}</Link>
            <Link href="#about-us">{t("navLabel2")}</Link>
            <Link href="#our-fields">{t("navLabel3")}</Link>
            <Link href="#our-services">{t("navLabel4")}</Link>
            <Link href="#testimonials">{t("navLabel5")}</Link>

            <Button
              $variant="textColorPrimary"
              size="small"
              as="a"
              href="#book-a-call"
            >
              {t("navLabel6")}
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
    </Wrapper>
  );
};

export { index as Header };

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 100;

  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: saturate(180%) blur(10px);

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      background: white;
      backdrop-filter: unset;
    }
  `}
`;

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
  top: 27px;
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
  width: 200px;

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      width: 160px;
    }
  `}
`;
