import styled from "styled-components";
import { fluidRange, hideVisually, rem } from "polished";
import { backgrounds } from "../../assets";
import { colors, fontFamily, typeScale, weightScale } from "../../utils";

export const StyledHeader = styled.header`
  background-image: url(${backgrounds.headerBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-inline: 1.5rem;
  position: relative;
  min-height: 19.5rem;

  @media (min-width: 630px) {
    min-height: 14rem;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  padding-top: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${colors.white};
  font-weight: ${weightScale.medium};
  font-size: ${typeScale.heading4};
`;

export const Form = styled.form`
  position: relative;
`;

export const Label = styled.label`
  ${hideVisually()}
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextInput = styled.input.attrs({ type: "text" })`
  padding: 1rem;
  border: none;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  font-size: ${typeScale.paragraph};
  font-family: ${fontFamily};
  flex-basis: 100%;
  max-width: ${rem(524)};

  &::placeholder {
    visibility: hidden;
  }

  @media (min-width: 400px) {
    &::placeholder {
      visibility: visible;
    }
  }
`;

export const Button = styled.button`
  background-color: ${colors.varyDarkGray};
  border: none;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding-inline: 1rem;
`;

export const DescriptionList = styled.dl`
  background-color: ${colors.white};
  text-align: center;
  padding-block: 1.5rem;
  position: absolute;
  margin: 0;
  top: 100%;
  left: 1.5rem;
  right: 1.5rem;
  transform: translateY(-50%);
  border-radius: 15px;
  box-shadow: 0 1px 1px 0 ${colors.darkGray};
  z-index: 500;
  padding: 1.5rem;

  div {
    margin-bottom: 1.5rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (min-width: 630px) {
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    display: flex;
    justify-content: space-between;

    div {
      margin: 0;
      flex-basis: 25%;
      border-right: 1px solid ${colors.darkGray};
      padding-left: 1rem;

      &:first-of-type {
        padding: 0;
      }

      &:last-of-type {
        border: none;
      }
    }

    ${fluidRange(
      {
        prop: "width",
        fromSize: "600px",
        toSize: "900px",
      },
      "630px",
      "1000px"
    )}
  }
`;

export const DescriptionTitle = styled.dt`
  font-size: ${typeScale.copyright};
  font-weight: ${weightScale.bold};
  color: ${colors.darkGray};
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

export const DescriptionDef = styled.dd`
  margin-left: 0;
  font-size: ${typeScale.heading5};
  font-weight: ${weightScale.bold};
  color: ${colors.varyDarkGray};
`;
