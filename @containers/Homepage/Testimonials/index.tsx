// Core types
import type { FC } from "react";

// Global components
import { Heading, Title } from "@components";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

const index: FC = () => {
  const t = useTranslations();

  const testimonials = [
    {
      name: t("testimonial1Name"),
      designation: t("testimonial1JobTitle"),
      comment: t("testimonial1Description"),
      image: "/images/dusan-antonijevic.webp",
    },
    {
      name: t("testimonial2Name"),
      designation: t("testimonial2JobTitle"),
      comment: t("testimonial2Description"),
      image: "/images/nikola-novakovic.webp",
    },
    {
      name: t("testimonial3Name"),
      designation: t("testimonial3JobTitle"),
      comment: t("testimonial3Description"),
      image: "/images/lazar-plazinic.webp",
    },
  ];

  return (
    <Container id="testimonials">
      <Wrapper>
        <AboutUs>
          <Testimonials>
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index}>
                <Heading
                  as="h6"
                  color="textColorSecondary"
                  $padding={{ md: { bottom: 2 } }}
                >
                  "{testimonial.comment}"
                </Heading>

                <Wrap>
                  <Icon src={testimonial.image} alt={testimonial.name} />

                  <NameWrap>
                    <Heading as="h6" $weight="bold">
                      {testimonial.name}
                    </Heading>

                    <Heading as="p" color="textColorSecondary">
                      {testimonial.designation}
                    </Heading>
                  </NameWrap>
                </Wrap>
              </Testimonial>
            ))}
          </Testimonials>

          <ContentWrap>
            <Heading as="h5" color="primary">
              {t("testimonialsPreTitle")}
            </Heading>

            <Title>{t("testimonialsTitle")}</Title>

            <Heading
              as="h6"
              color="textColorSecondary"
              $padding={{ md: { bottom: 2 } }}
            >
              {t("testimonialsDescription")}
            </Heading>
          </ContentWrap>
        </AboutUs>
      </Wrapper>
    </Container>
  );
};

export { index as Testimonials };

const Container = styled.div`
  ${({ theme: { spaces } }) => css`
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
  flex: 0 0 45%;

  ${({ theme: { breakpoints, spaces } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      margin: ${spaces[3]}px 0;
      order: 1;
    }
  `}
`;

const Testimonials = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;

  ${({ theme: { breakpoints, spaces } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      order: 2;
    }
  `}
`;

const Testimonial = styled.div`
  padding: 20px;
  border-radius: 10px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  &:nth-child(2) {
    transform: translateX(30px);
  }

  &:not(:last-child) {
    margin-bottom: 30px;
  }

  ${({ theme: { colors, breakpoints } }) => css`
    background-color: ${colors.white};

    @media (max-width: ${breakpoints.md}px) {
      &:nth-child(2) {
        transform: translateX(0);
      }
    }
  `}
`;

const Icon = styled.img`
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const NameWrap = styled.div``;
