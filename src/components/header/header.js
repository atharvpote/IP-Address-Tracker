import { icons } from "../../assets";
import {
  Button,
  DescriptionDef,
  DescriptionList,
  DescriptionTitle,
  Form,
  InputContainer,
  Label,
  StyledHeader,
  TextInput,
  Title,
} from "./header.styled";

export function Header() {
  return (
    <StyledHeader>
      <Title>IP Address Tracker</Title>
      <Form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Label htmlFor="ip" aria-label="Enter IP Address" />
        <InputContainer>
          <TextInput type="text" htmlFor="ip" />
          <Button>
            <img src={icons.arrowIcon} alt="" />
          </Button>
        </InputContainer>
      </Form>
      <DescriptionList>
        <DescriptionTitle>IP ADDRESS</DescriptionTitle>
        <DescriptionDef>192.212.174.101</DescriptionDef>
        <DescriptionTitle>LOCATION</DescriptionTitle>
        <DescriptionDef>Brooklyn, NY 10001</DescriptionDef>
        <DescriptionTitle>TIMEZONE</DescriptionTitle>
        <DescriptionDef>UTC -5:00</DescriptionDef>
        <DescriptionTitle>ISP</DescriptionTitle>
        <DescriptionDef>SpaceX Starlink</DescriptionDef>
      </DescriptionList>
    </StyledHeader>
  );
}
