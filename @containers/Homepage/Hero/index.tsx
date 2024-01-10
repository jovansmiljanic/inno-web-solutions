"use client";

// Core types
import type { FC } from "react";

// Global component
import { Button, Heading, Header } from "@components";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

const index: FC = () => {
  // Translations
  const t = useTranslations();

  return (
    <Wrapper>
      <Header />

      <Hero id="#home">
        <ContentWrap>
          <Title>
            Empower Your <br />
            Digital Presence with
            <br /> Inno Web Solutions
          </Title>

          <Heading
            as="h6"
            $padding={{
              xs: { top: 1, bottom: 1 },
              sm: { top: 1, bottom: 1 },
              md: { top: 2, bottom: 2 },
            }}
          >
            Elevate your business with our expert web and mobile development
            services. At Inno Web Solution, we merge creativity with technology
            to craft bespoke digital experiences. Whether it’s a vibrant website
            or a dynamic app, our team is committed to turning your vision into
            impactful digital solutions.
          </Heading>

          <Button $variant="textColorPrimary" as="a" href="#our-services">
            Begin Your Digital Journey
          </Button>
        </ContentWrap>

        <MockupWrap>
          <Mockup src="/images/hero-mockup.webp" alt="Mockup" />
        </MockupWrap>
      </Hero>
    </Wrapper>
  );
};

export { index as Hero };

const Wrapper = styled.div`
  background: url("/images/hero.webp");
  background-size: cover;
  background-repeat: no-repeat;
`;

const Hero = styled.div`
  max-width: 1340px;
  margin: auto;

  position: relative;
  z-index: 3;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { breakpoints, spaces } }) => css`
    padding: ${spaces[10]}px ${spaces[3]}px;

    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
      padding-top: ${spaces[6]}px;
    }
  `}
`;

const Title = styled.h1`
  font-size: 52px;
  line-height: 1.1;

  ${({ theme: { breakpoints, font, colors } }) => css`
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
