// Core types
import type { FC } from "react";

// Global components
import { Button, Heading } from "@components";

// Servier utils
import { contactUs } from "@utils";

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

const Boxes = styled.div`
  display: flex;
`;

const Box = styled.div`
  flex: 0 0 33.333%;
`;

const Form = styled.form`
  button {
    height: 100%;
  }
`;

const FormWrap = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  flex-wrap: wrap;

  width: 50%;
`;

const Input = styled.input`
  padding: 9px 20px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: transparent;
  width: 100%;

  ${({ theme: { colors, breakpoints } }) => css`
    border: 1px solid ${colors.textColorPrimary};

    &::placeholder {
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-weight: 600;
      color: ${colors.textColorPrimary};
    }

    @media (max-width: ${breakpoints.md}px) {
      width: 100%;
      margin-bottom: 10px;
    }
  `}
`;

const TextArea = styled.textarea`
  padding: 9px 20px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: transparent;
  width: 100%;

  ${({ theme: { colors, breakpoints } }) => css`
    border: 1px solid ${colors.textColorPrimary};

    &::placeholder {
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      font-weight: 600;
      color: ${colors.textColorPrimary};
    }

    @media (max-width: ${breakpoints.md}px) {
      width: 100%;
      margin-bottom: 10px;
    }
  `}
`;

const FormHead = styled.div``;

const index: FC = () => {
  const t = useTranslations();

  return (
    <Container>
      <Wrapper>
        <Boxes>
          <Box>
            <Heading as="h4" $weight="bold">
              {t("footerCallUs")}
            </Heading>
            <Heading as="h6" color="textColorSecondary">
              +386 30 760 375
            </Heading>
          </Box>

          <Box>
            <Heading as="h4" $weight="bold">
              {t("footerEmailUs")}
            </Heading>
            <Heading as="h6" color="textColorSecondary">
              info@inno-web.solutions
            </Heading>
          </Box>

          <Box>
            <Heading as="h4" $weight="bold">
              {t("footerFindUs")}
            </Heading>
            <Heading as="h6" color="textColorSecondary">
              Martina Krapan 18, 1000, Ljubljana
            </Heading>
          </Box>
        </Boxes>

        <Form
          action={async formData => {
            await contactUs(formData);

            setTimeout(() => {
              console.log("done");
            }, 2000);
          }}
        >
          <FormHead>{t("formTitle")}</FormHead>

          <FormWrap>
            <Input
              type="text"
              name="fullName"
              placeholder={t("formFullNamePlaceholder")}
              required
            />

            <Input
              type="email"
              name="email"
              placeholder={t("formEmailPlaceholder")}
              required
            />

            <TextArea
              name="message"
              placeholder={t("formMessagePlaceholder")}
              required
            />
          </FormWrap>

          <Button $variant="primary">{t("formCtaLabel")}</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export { index as ContactUs };
