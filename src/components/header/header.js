import { useContext } from "react";
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

import { StateContext } from "../../stateManagement";

export function Header() {
  const { state, dispatch } = useContext(StateContext);

  return (
    <StyledHeader>
      <Title>IP Address Tracker</Title>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "IP_UPDATE" });
        }}
      >
        <Label htmlFor="ip" aria-label="Enter IP Address" />
        <InputContainer>
          <TextInput
            type="text"
            htmlFor="ip"
            value={state.input}
            onChange={(e) =>
              dispatch({
                type: "INPUT_UPDATE",
                payload: { input: e.target.value },
              })
            }
            placeholder={"Search for any IP address or domain"}
          />
          <Button aria-label="submit">
            <img src={icons.arrowIcon} alt="" />
          </Button>
        </InputContainer>
      </Form>
      <DescriptionList>
        <div>
          <DescriptionTitle>IP ADDRESS</DescriptionTitle>
          <DescriptionDef>{state.ipAddress}</DescriptionDef>
        </div>
        <div>
          <DescriptionTitle>LOCATION</DescriptionTitle>
          <DescriptionDef>{state.location}</DescriptionDef>
        </div>
        <div>
          <DescriptionTitle>TIMEZONE</DescriptionTitle>
          <DescriptionDef>{state.timezone}</DescriptionDef>
        </div>
        <div>
          <DescriptionTitle>ISP</DescriptionTitle>
          <DescriptionDef>{state.isp}</DescriptionDef>
        </div>
      </DescriptionList>
    </StyledHeader>
  );
}
