// Core types
import type { FC } from "react";

// Global components
import { Heading, List, Title } from "@components";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

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
      flex-direction: column;
    }
  `}
`;

const ContentWrap = styled.div`
  flex: 0 0 45%;

  ${({ theme: { breakpoints, spaces } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: ${spaces[3]}px;
    }
  `}
`;

const MockupWrap = styled.div`
  flex: 0 0 45%;

  ${({ theme: { breakpoints, spaces } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      margin-bottom: ${spaces[3]}px;
    }
  `}
`;

const Mockup = styled.img`
  width: 80%;
`;

const index: FC = () => {
  const t = useTranslations();

  return (
    <Container id="our-services">
      <Wrapper>
        <AboutUs>
          <ContentWrap>
            <Heading as="h5" color="primary">
              {t("ourServicesPreTitle")}
            </Heading>

            <Title>{t("ourServicesTitle")}</Title>

            <Heading
              as="h6"
              color="textColorSecondary"
              $padding={{
                xs: { bottom: 2 },
                sm: { bottom: 2 },
                md: { bottom: 3 },
              }}
            >
              {t("ourServicesDescription")}
            </Heading>

            <List
              list={[
                t("ourServicesListItem1"),
                t("ourServicesListItem2"),
                t("ourServicesListItem3"),
                t("ourServicesListItem4"),
              ]}
            />
          </ContentWrap>

          <MockupWrap>
            <Mockup
              src="/images/comunicate-with-us.webp"
              alt="About us mockup"
            />
          </MockupWrap>
        </AboutUs>
      </Wrapper>
    </Container>
  );
};

export { index as OurServices };
