"use client";

// Core types
import type { FC } from "react";

// Global component
import { Button, Heading, Wave } from "@components";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

const index: FC = () => {
  // Translations
  const t = useTranslations();

  return (
    <Wave>
      <Hero id="#home">
        <ContentWrap>
          <Title>{t("heroTitle")}</Title>

          <Heading
            as="h6"
            color="white"
            $padding={{
              xs: { top: 1, bottom: 1 },
              sm: { top: 1, bottom: 1 },
              md: { top: 2, bottom: 2 },
            }}
          >
            {t("heroDescription")}
          </Heading>

          <Button $variant="white" as="a" href="#our-services">
            {t("heroCtaLabel")}
          </Button>
        </ContentWrap>

        <MockupWrap>
          {/* <Mockup src="/images/hero-mockup.webp" alt="Mockup" /> */}
          Image
        </MockupWrap>
      </Hero>
    </Wave>
  );
};

export { index as Hero };

const Hero = styled.div`
  max-width: 1340px;
  margin: auto;

  position: relative;
  z-index: 3;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { breakpoints, spaces } }) => css`
    padding: ${spaces[3]}px;
    padding-top: 140px;

    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
      padding-top: ${spaces[6]}px;
    }
  `}
`;

const Title = styled.h1`
  font-size: 50px;
  line-height: 1.2;

  ${({ theme: { breakpoints, font, colors } }) => css`
    color: ${colors.white};
    font-weight: ${font.weight.medium};

    @media (max-width: ${breakpoints.md}px) {
      font-size: 42px;
    }
  `}
`;

const ContentWrap = styled.div`
  flex: 0 0 45%;

  ${({ theme: { breakpoints, spaces } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      flex: 0 0 100%;
      margin-bottom: ${spaces[3]}px;
    }
  `}
`;

const MockupWrap = styled.div`
  flex: 0 0 50%;
`;

const Mockup = styled.img`
  width: 100%;
`;
