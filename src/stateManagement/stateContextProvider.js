import { createContext, useEffect, useReducer } from "react";
import { initialState } from "./initialState";
import { reducer } from "./reducer";

export const StateContext = createContext();

export function StateContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let api =
      "https://geo.ipify.org/api/v2/country,city?apiKey=at_V8yUJSVz10y6MXTEvowMn5PpzeHcE&ipAddress";

    if (state.ipAddress) api += `=${state.ipAddress}`;

    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        if (data.code && data.code === 422)
          dispatch({
            type: "INVALID",
            payload: {
              message: "Invalid IP Address",
            },
          });
        else
          dispatch({
            type: "UPDATE_ALL",
            payload: {
              ip: data.ip,
              location: data.location.city,
              timezone: `UTC ${data.location.timezone}`,
              isp: data.isp,
              latitude: data.location.lat,
              longitude: data.location.lng,
            },
          });
      });
  }, [state.ipAddress]);

  const value = { state, dispatch };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}
