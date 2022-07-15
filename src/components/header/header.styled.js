import styled from "styled-components";
import { hideVisually } from "polished";
import { backgrounds } from "../../assets";
import { colors, fontFamily, typeScale, weightScale } from "../../utils";

export const StyledHeader = styled.header`
  background-image: url(${backgrounds.headerBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding-inline: 1.5rem;
  position: relative;
  padding-bottom: 10.5rem;
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
  box-shadow: 0 0 3px 0 ${colors.darkGray};
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
  margin-bottom: 1.5rem;
  font-size: ${typeScale.heading5};
  font-weight: ${weightScale.bold};
  color: ${colors.varyDarkGray};

  &:last-of-type {
    margin-bottom: 0;
  }
`;
