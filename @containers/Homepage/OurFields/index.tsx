// Core types
import { Heading, Title } from "@components";
import { useTranslations } from "next-intl";
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

const Container = styled.div`
  ${({ theme: { defaults, colors, font, ...theme } }) => css`
    background-color: ${colors.white};
  `}
`;

const Wrapper = styled.div`
  max-width: 1140px;
  margin: auto;

  display: flex;
  flex-direction: column;

  text-align: center;

  ${({ theme: { spaces, colors } }) => css`
    padding: ${spaces[10]}px ${spaces[3]}px;
  `}
`;

const FieldsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Field = styled.div`
  flex: 0 0 30%;
  text-align: left;

  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;

  ${({ theme: { colors, breakpoints } }) => css`
    background-color: ${colors.white};

    &:hover {
      scale: 1.05;
      box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      transition: all 0.3s ease-in-out;
    }

    @media (max-width: ${breakpoints.md}px) {
      flex: 0 0 100%;
    }
  `}
`;

const Icon = styled.img`
  width: 50px;
`;

const index: FC = () => {
  const t = useTranslations();

  const fields = [
    {
      title: t("fieldOneTitle"),
      description: t("fieldOneDescription"),
      icon: "/images/frontend.webp",
    },
    {
      title: t("fieldTwoTitle"),
      description: t("fieldTwoDescription"),
      icon: "/images/backend.webp",
    },
    {
      title: t("fieldThreeTitle"),
      description: t("fieldThreeDescription"),
      icon: "/images/seo.webp",
    },
    {
      title: t("fieldFourTitle"),
      description: t("fieldFourDescription"),
      icon: "/images/data-sience.webp",
    },
    {
      title: t("fieldFiveTitle"),
      description: t("fieldFiveDescription"),
      icon: "/images/mobile-dev.webp",
    },
    {
      title: t("fieldSixTitle"),
      description: t("fieldSixDescription"),
      icon: "/images/project-menagment.webp",
    },
  ];

  return (
    <Container>
      <Wrapper id="our-fields">
        <Heading as="h5" color="primary">
          {t("ourFieldsPreTitle")}
        </Heading>

        <Title>{t("ourFieldsTitle")}</Title>

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
    </Container>
  );
};

export { index as OurFields };
