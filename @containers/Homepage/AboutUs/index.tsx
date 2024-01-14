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

  const aboutUs = [
    {
      title: t("aboutUsBox1Title"),
      description: t("aboutUsBox1Description"),
    },
    {
      title: t("aboutUsBox2Title"),
      description: t("aboutUsBox2Description"),
    },
    {
      title: t("aboutUsBox3Title"),
      description: t("aboutUsBox3Description"),
    },
  ];

  return (
    <Container id="about-us">
      <Wrapper>
        <AboutUs>
          <MockupWrap>
            <Mockup src="/images/our-workflow.webp" alt="About us mockup" />
          </MockupWrap>

          <ContentWrap>
            <Heading as="h5" color="primary">
              {t("aboutUsPreTitle")}
            </Heading>

            <Title>{t("aboutUsTitle")}</Title>

            <Heading
              as="h6"
              color="textColorSecondary"
              $weight="regular"
              $padding={{
                xs: { bottom: 2 },
                sm: { bottom: 2 },
                md: { bottom: 2 },
              }}
            >
              {t("aboutUsDescription")}
            </Heading>

            <Button $variant="textColorPrimary" as="a" href="#our-fields">
              {t("aboutUsCtaLabel")}
            </Button>
          </ContentWrap>
        </AboutUs>

        <List>
          {aboutUs.map((item, index) => (
            <Item key={index}>
              <Title>{item.title}</Title>

              <Heading as="h6" color="textColorSecondary" $weight="regular">
                {item.description}
              </Heading>
            </Item>
          ))}
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

  ${({ theme: { breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
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

  ${({ theme: { breakpoints, spaces } }) => css`
    padding-top: ${spaces[3]}px;

    @media (max-width: ${breakpoints.md}px) {
      padding-top: 0;
      flex-direction: column;
    }
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
