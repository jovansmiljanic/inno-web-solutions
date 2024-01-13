// Core types
import type { FC } from "react";

// Global components
import { Button, Heading, Title } from "@components";

// Vendors
import styled, { css } from "styled-components";

// Vendors
import { useTranslations } from "next-intl";

const index: FC = () => {
  const t = useTranslations();

  return (
    <Container id="book-a-call">
      <Wrapper>
        <Title>{t("bookCallTitle")}</Title>

        <Heading
          as="h6"
          $padding={{ xs: { bottom: 2 }, sm: { bottom: 2 }, md: { bottom: 2 } }}
        >
          {t("bookCallDescription")}
        </Heading>

        <Button $variant="black">{t("bookCallCtaLabel")}</Button>
      </Wrapper>
    </Container>
  );
};

export { index as BookCall };

const Container = styled.div`
  ${({ theme: { spaces } }) => css`
    padding: ${spaces[5]}px ${spaces[3]}px;
  `}
`;

const Wrapper = styled.div`
  max-width: 1340px;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
