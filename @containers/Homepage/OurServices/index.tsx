// Core types
import { Button, Heading, List, Title } from "@components";
import { useTranslations } from "next-intl";
import type { FC } from "react";

// Vendors
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
      padding: ${spaces[6]}px ${spaces[3]}px;
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

interface IOurServices {}

const index: FC<IOurServices> = () => {
  const t = useTranslations();

  return (
    <Container>
      <Wrapper id="about-us">
        <AboutUs>
          <ContentWrap>
            <Heading as="h5" color="primary">
              OUR SERVICES
            </Heading>

            <Title>Comprehensive Digital Solutions</Title>

            <Heading
              as="h6"
              color="textColorSecondary"
              $padding={{ md: { bottom: 2 } }}
            >
              At Inno Web Solution, we offer a wide array of services tailored
              to meet the evolving needs of the digital landscape. Our expert
              team is equipped to handle every aspect of your digital journey,
              ensuring top-notch quality and innovation at every step.
            </Heading>

            <List
              list={[
                "Web Development: Custom, high-performance websites with engaging designs and user-friendly interfaces.",
                "Mobile Apps: Innovative iOS and Android applications tailored to your business needs.",
                "SEO & Digital Marketing: Boost your online presence and engagement with targeted SEO and marketing strategies.",
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
