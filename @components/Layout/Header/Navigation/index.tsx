"use client";

// Core types
import { type FC, useMemo } from "react";

// Vendors
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

interface Navigation {
  toggled: boolean;
}

const index: FC<Navigation> = ({ toggled }) => {
  const t = useTranslations();

  const menuVariants = useMemo(
    () => ({
      open: { x: 300, transition: { ease: "easeIn", duration: 0.4 } },
      closed: { x: -300, transition: { ease: "easeOut", duration: 0.4 } },
    }),
    []
  );

  return (
    <Navigation
      initial="closed"
      animate={toggled ? "open" : "closed"}
      variants={menuVariants}
    >
      <MobileHeader>
        <Logo src="/logo.png" alt="Logo" />

        <Links>
          <Link href="#home">{t("navLabel1")}</Link>
          <Link href="#our-services">{t("navLabel2")}</Link>
          <Link href="#about-us">{t("navLabel3")}</Link>
          <Link href="#our-benefits">{t("navLabel4")}</Link>
          <Link href="#our-benefits">{t("navLabel5")}</Link>
          <Link href="#app-integration">{t("navLabel6")}</Link>
        </Links>
      </MobileHeader>
    </Navigation>
  );
};

export { index as Navigation };

const Navigation = styled(motion.div)`
  position: fixed;
  left: -300px;
  top: 0;
  z-index: 10;

  width: 300px;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 20px;

  ${({ theme: { breakpoints, colors } }) => css`
    background-color: ${colors.white};

    img {
      margin-bottom: 80px;
    }

    a {
      color: ${colors.textColorPrimary};
      padding: 10px 0;
    }
  `}
`;

const MobileHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  padding: 0 0 30px 0;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 160px;
`;
