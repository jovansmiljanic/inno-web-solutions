"use client";

// Core types
import type { FC } from "react";

// Core
import { useContext, useEffect, useRef, useState } from "react";

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

  // Ref for the dropdown container
  const dropdownRef = useRef<HTMLDivElement>(null);

  // State for managing dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

  // Handle click outside of dropdown
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownVisible(false);
    }
  };

  // Attach event listener for outside clicks
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [scroll, setScroll] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDropdown = () => setDropdownVisible(false);

  return (
    <Wrapper $isScrolled={scroll}>
      <Header>
        <Link href="/">
          <Logo src="/logo.png" alt="" />
        </Link>

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
      </Header>

      <div ref={dropdownRef}>
        {isDropdownVisible && (
          <Wrap onClick={closeDropdown}>
            <Navigation toggled={isDropdownVisible} />
          </Wrap>
        )}

        <Toggler onClick={() => setDropdownVisible(!isDropdownVisible)} />
      </div>
    </Wrapper>
  );
};

export { index as Header };

const Wrap = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
`;

const Wrapper = styled.div<{ $isScrolled: boolean }>`
  width: 100%;
  position: fixed;
  z-index: 100;

  ${({ $isScrolled, theme: { colors, breakpoints } }) => css`
    background: ${colors.white};

    ${$isScrolled &&
    css`
      background: rgba(255, 255, 255, 0.72);
      backdrop-filter: saturate(180%) blur(10px);
    `}

    @media (max-width: ${breakpoints.md}px) {
      background: ${colors.white};
      backdrop-filter: unset;
    }
  `}
`;

const Header = styled.div`
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

  ${({ theme: { colors, breakpoints } }) => css`
    border-top: 2px solid ${colors.black};
    border-bottom: 2px solid ${colors.black};

    @media (min-width: ${breakpoints.md}px) {
      display: none;
    }

    &:before {
      background-color: ${colors.black};
    }
  `}
`;

const Nav = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${({ theme: { colors, breakpoints } }) => css`
    a {
      padding-right: 35px;
      color: ${colors.textColorPrimary};

      &:last-child {
        color: ${colors.white};
        padding-right: 20px;
        padding-left: 20px;
      }
    }

    @media (max-width: ${breakpoints.md}px) {
      display: none;
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
