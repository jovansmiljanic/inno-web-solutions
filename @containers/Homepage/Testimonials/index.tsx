// Core types
import { Heading, Title } from "@components";
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

interface ITestimonials {}

const index: FC<ITestimonials> = () => {
  const testimonials = [
    {
      name: "Dusan Antonijevic",
      designation: "Owner of Medisoft",
      image: "/images/dusan-antonijevic.webp",
      comment:
        "Partnering with InnoWeb Solutions for our marketing site was transformative. Their creative and technical skills boosted our online presence, exceeding our expectations.",
    },
    {
      name: "Nikola Novakovic",
      designation: "Owner of Easy Invoice",
      image: "/images/jovan-smiljanic.webp",
      comment:
        "InnoWeb Solutions efficiently developed Invoice Easy, meeting our needs with an intuitive and highly praised app that revolutionized our operations.",
    },
    {
      name: "Lazar Plazinic",
      designation: "Owner of SmileFlex",
      image: "/images/lazar-plazinic.webp",
      comment:
        "The e-commerce site by InnoWeb Solutions for our jawline products is a hit. They delivered a beautiful, user-friendly store, significantly increasing our sales.",
    },
  ];

  return (
    <Container>
      <Wrapper id="about-us">
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
              TESTIMONIALS
            </Heading>

            <Title>Client Success Stories</Title>

            <Heading
              as="h6"
              color="textColorSecondary"
              $padding={{ md: { bottom: 2 } }}
            >
              Our clients’ satisfaction speaks volumes about our commitment to
              delivering excellence. Here’s what they have to say about
              partnering with us on their digital projects.
            </Heading>
          </ContentWrap>
        </AboutUs>
      </Wrapper>
    </Container>
  );
};

export { index as Testimonials };

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

const Testimonials = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;

  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
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

  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

const Icon = styled.img`
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;

  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;

  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

const NameWrap = styled.div`
  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;
