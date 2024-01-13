// Core types
import type { FC } from "react";

// Global components
import { Button, Heading } from "@components";

// Servier utils
import { contactUs } from "@utils";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

// Local components
import { Boxes } from "./Boxes";
import { Input, TextArea } from "@styles/Form";

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

const Form = styled.form`
  display: flex;
  justify-content: space-between;

  padding: 20px;
  border-radius: 10px;

  ${({ theme: { colors, breakpoints } }) => css`
    background-color: ${colors.background};

    @media (max-width: ${breakpoints.md}px) {
      flex-direction: column;
    }
  `}
`;

const FormWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex: 0 0 50%;

  width: 100%;
`;

const Wrap = styled.div`
  flex: 0 0 45%;
`;

const index: FC = () => {
  const t = useTranslations();

  return (
    <Container>
      <Wrapper>
        <Boxes />

        <Form
          action={async formData => {
            await contactUs(formData);

            setTimeout(() => {
              console.log("done");
            }, 2000);
          }}
        >
          <Wrap>
            <Heading
              as="h1"
              $weight="bold"
              $padding={{
                xs: { bottom: 3 },
                sm: { bottom: 3 },
                md: { bottom: 3 },
              }}
            >
              Connect with Us for Digital Excellence
            </Heading>

            <Heading
              as="h6"
              color="textColorSecondary"
              $padding={{
                xs: { bottom: 2 },
                sm: { bottom: 2 },
                md: { bottom: 0 },
              }}
            >
              Ready to transform your digital vision into reality? Our team
              specializes in creating outstanding digital experiences, from
              engaging websites to innovative marketing strategies. Reach out
              through the form and let's discuss how we can help your project
              shine. Your digital journey starts here!
            </Heading>
          </Wrap>

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
              rows={5}
            />
            <Button $variant="black">{t("formCtaLabel")}</Button>
          </FormWrap>
        </Form>
      </Wrapper>
    </Container>
  );
};

export { index as ContactUs };
