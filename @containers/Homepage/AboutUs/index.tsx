"use client";

// Core types
import type { FC } from "react";

// Global components
import { Button, Heading, Title } from "@components";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

const index: FC = () => {
  const t = useTranslations();

  return (
    <Container>
      <Wrapper id="about-us">
        <AboutUs>
          <MockupWrap>
            <Mockup src="/images/our-workflow.webp" alt="About us mockup" />
          </MockupWrap>

          <ContentWrap>
            <Heading as="h5" color="primary">
              {t("aboutUsPreTitle")}
            </Heading>

            <Title>Crafting Your Digital Future</Title>

            <Heading
              as="h6"
              color="textColorSecondary"
              $padding={{ md: { bottom: 2 } }}
            >
              Dive into a world where technology and creativity converge. Our
              team, composed of expert web and mobile developers, is passionate
              about turning bold ideas into digital realities. Driven by
              innovation and a commitment to excellence, we specialize in
              creating unique, effective solutions that elevate your online
              presence. With us, each project is an opportunity to make a
              meaningful impact, shaping digital experiences that resonate and
              last.
            </Heading>

            <Button $variant="textColorPrimary" as="a" href="#our-benefits">
              Explore Our Expertise
            </Button>
          </ContentWrap>
        </AboutUs>

        <List>
          <Item>
            <Title>500+</Title>
            <Heading as="h6" $weight="semiBold">
              Over 500 projects delivered, including state-of-the-art websites
              and mobile apps, marking our success in digital innovation.
            </Heading>
          </Item>

          <Item>
            <Title>95%</Title>
            <Heading as="h6" $weight="semiBold">
              Achieving a 95% client satisfaction rate, we're dedicated to
              exceeding expectations in every project.
            </Heading>
          </Item>

          <Item>
            <Title>250%</Title>
            <Heading as="h6" $weight="semiBold">
              Clients experience an average of 250% revenue growth with our
              custom digital solutions, highlighting our impactful work.
            </Heading>
          </Item>
        </List>
      </Wrapper>
    </Container>
  );
};

export { index as AboutUs };

const Container = styled.div`
  ${({ theme: { colors, spaces } }) => css`
    background-color: ${colors.white};
    padding: ${spaces[10]}px ${spaces[3]}px;
  `}
`;

const Wrapper = styled.div`
  max-width: 1340px;
  margin: auto;

  display: flex;
  flex-direction: column;
`;

const AboutUs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { breakpoints, spaces } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      padding: ${spaces[6]}px ${spaces[3]}px;
      flex-direction: column;
    }
  `}
`;

const ContentWrap = styled.div`
  flex: 0 0 50%;

  ${({ theme: { breakpoints, spaces } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: ${spaces[3]}px;
    }
  `}
`;

const MockupWrap = styled.div`
  display: flex;
  flex: 0 0 45%;

  ${({ theme: { breakpoints, spaces } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: ${spaces[3]}px;
    }
  `}
`;

const Mockup = styled.img`
  width: 90%;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${({ theme: { spaces } }) => css`
    padding-top: ${spaces[3]}px;
  `}
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 0 0 30%;
  text-align: center;

  margin-bottom: 20px;
  padding: 0 20px;
`;
