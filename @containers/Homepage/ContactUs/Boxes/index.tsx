// Core types
import { Heading } from "@components";
import { useTranslations } from "next-intl";
import Link from "next/link";
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

const Boxes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme: { spaces, breakpoints } }) => css`
    margin-bottom: ${spaces[6]}px;

    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
    }
  `}
`;

const Box = styled.div`
  flex: 0 0 30%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  ${({ theme: { spaces, breakpoints } }) => css`
    @media (max-width: ${breakpoints.md}px) {
      width: 100%;
      margin-bottom: ${spaces[2]}px;
    }
  `}
`;

interface IBoxes {}

const index: FC<IBoxes> = () => {
  const t = useTranslations();

  return (
    <Boxes>
      <Box>
        <Heading
          as="h4"
          $weight="bold"
          $padding={{
            xs: { bottom: 1 },
            sm: { bottom: 1 },
            md: { bottom: 1 },
          }}
        >
          {t("footerCallUs")}
        </Heading>

        <Link href="tel:+386 30 760 375">
          <Heading as="h6" color="textColorSecondary">
            +386 30 760 375
          </Heading>
        </Link>
      </Box>

      <Box>
        <Heading
          as="h4"
          $weight="bold"
          $padding={{
            xs: { bottom: 1 },
            sm: { bottom: 1 },
            md: { bottom: 1 },
          }}
        >
          {t("footerEmailUs")}
        </Heading>

        <Link href="mailto:info@inno-web.solutions">
          <Heading as="h6" color="textColorSecondary">
            info@inno-web.solutions
          </Heading>
        </Link>
      </Box>

      <Box>
        <Heading
          as="h4"
          $weight="bold"
          $padding={{
            xs: { bottom: 1 },
            sm: { bottom: 1 },
            md: { bottom: 1 },
          }}
        >
          {t("footerFindUs")}
        </Heading>
        <Heading as="h6" color="textColorSecondary">
          Martina Krapan 18, 1000, Ljubljana
        </Heading>
      </Box>
    </Boxes>
  );
};

export { index as Boxes };
