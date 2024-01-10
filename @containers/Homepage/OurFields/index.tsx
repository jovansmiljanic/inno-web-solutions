// Core types
import { Heading, Title } from "@components";
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  max-width: 1140px;
  margin: auto;

  display: flex;
  flex-direction: column;

  text-align: center;

  ${({ theme: { spaces } }) => css`
    padding: ${spaces[10]}px ${spaces[3]}px;
  `}
`;

const FieldsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

const Field = styled.div`
  flex: 0 0 30%;
  text-align: left;

  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;

  ${({ theme: { colors } }) => css`
    background-color: ${colors.white};

    &:hover {
      scale: 1.05;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    }
  `}
`;

const Icon = styled.img`
  width: 50px;
  ${({ theme: { defaults, colors, font, ...theme } }) => css``}
`;

interface IOurFields {}

const index: FC<IOurFields> = () => {
  const fields = [
    {
      title: "Frontend Development",
      description:
        "Creating visually appealing, responsive user interfaces with the latest HTML, CSS, and JavaScript technologies for an outstanding user experience.",
      icon: "/images/frontend.webp",
    },
    {
      title: "Backend Development",
      description:
        "Delivering secure, scalable backend solutions with server-side technologies to power your applications efficiently.",
      icon: "/images/backend.webp",
    },
    {
      title: "SEO Optimization",
      description:
        "Enhancing online visibility with advanced SEO strategies to improve your website's ranking and increase traffic.",
      icon: "/images/seo.webp",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Building custom e-commerce platforms, handling everything from storefronts to payment processing to convert visitors to customers.",
      icon: "/images/data-sience.webp",
    },
    {
      title: "Mobile Development",
      description:
        "Developing high-performance mobile apps for iOS and Android, focused on usability and a seamless user experience.",
      icon: "/images/mobile-dev.webp",
    },
    {
      title: "Cloud Services",
      description:
        "Providing reliable cloud solutions for hosting, storage, and data management, ensuring scalability and security.",
      icon: "/images/project-menagment.webp",
    },
  ];

  return (
    <Wrapper>
      <Heading as="h5" color="primary">
        OUR FIELDS
      </Heading>

      <Title>Expertise Across the Digital Spectrum</Title>
      <FieldsWrap>
        {fields.map((field, i) => (
          <Field key={i}>
            <Icon src={field.icon} alt={field.title} />

            <Heading
              as="h5"
              $weight="bold"
              $padding={{
                xs: { top: 1, bottom: 1 },
                sm: { top: 1, bottom: 1 },
                md: { top: 1, bottom: 1 },
              }}
            >
              {field.title}
            </Heading>

            <Heading as="h6">{field.description}</Heading>
          </Field>
        ))}
      </FieldsWrap>
    </Wrapper>
  );
};

export { index as OurFields };
