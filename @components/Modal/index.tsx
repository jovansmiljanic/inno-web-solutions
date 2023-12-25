"use client";

// Core types
import { useRef, type FC, useState, useEffect } from "react";

// Global components
import { Button, Heading } from "@components";

// Vendors
import { useTranslations } from "next-intl";
import styled, { css } from "styled-components";

// Utils
import { quotationEmail } from "@utils";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;

  ${({ theme: { colors, spaces, breakpoints } }) => css`
    padding: ${spaces[10]}px;
    background-color: ${colors.white};

    @media (max-width: ${breakpoints.md}px) {
      padding: ${spaces[5]}px;
      width: 90%;
    }
  `}
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 9px 20px;
  border-radius: 5px;
  background-color: transparent;
  width: 49%;

  ${({ theme: { colors, breakpoints, spaces } }) => css`
    margin-bottom: ${spaces[1]}px;

    border: 1px solid ${colors.textColorPrimary};

    &::placeholder {
      color: ${colors.textColorPrimary};
    }

    @media (max-width: ${breakpoints.md}px) {
      width: 100%;
      margin-bottom: 10px;
    }
  `}
`;

const Close = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 40px;
  cursor: pointer;
`;

interface IModal {
  setIsModalOpen: (value: boolean) => void;
  pricingPlan: string;
}

const index: FC<IModal> = ({ setIsModalOpen, pricingPlan }) => {
  const t = useTranslations();

  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

  // Ref for the dropdown element
  const articlesPopupRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (
      articlesPopupRef.current &&
      !articlesPopupRef.current.contains(event.target)
    ) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <Modal>
      <Content ref={articlesPopupRef}>
        {isSuccessMessageVisible ? (
          <Heading
            as="h4"
            $padding={{
              xs: { bottom: 1 },
              sm: { bottom: 1 },
              md: { bottom: 1 },
            }}
          >
            {t("modalThankYouMessage", { pricingPlan })}
          </Heading>
        ) : (
          <>
            <Heading
              as="h4"
              $padding={{
                xs: { bottom: 1 },
                sm: { bottom: 1 },
                md: { bottom: 1 },
              }}
            >
              {t("modalTitle")}
            </Heading>

            <Heading
              as="h6"
              $padding={{
                xs: { bottom: 2 },
                sm: { bottom: 2 },
                md: { bottom: 2 },
              }}
            >
              {t("modalDescription", { pricingPlan })}
            </Heading>

            <Form
              action={async formData => {
                await quotationEmail(formData);

                setIsSuccessMessageVisible(true);

                setTimeout(() => {
                  setIsSuccessMessageVisible(false);
                  setIsModalOpen(false);
                }, 2000);
              }}
            >
              <Input
                type="text"
                name="firstName"
                placeholder={t("modalFirstNamePlaceholder")}
              />

              <Input
                type="text"
                name="lastName"
                placeholder={t("modalLastNamePlaceholder")}
              />

              <Input
                type="email"
                name="email"
                placeholder={t("modalEmailPlaceholder")}
              />

              <Input
                type="text"
                name="phoneNumber"
                placeholder={t("modalPhonePlaceholder")}
              />

              <Button $variant="primary">{t("modalCtaLabel")}</Button>
            </Form>
          </>
        )}
        <Close onClick={() => setIsModalOpen(false)}>&times;</Close>
      </Content>
    </Modal>
  );
};

export { index as Modal };
