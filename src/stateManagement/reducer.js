export function reducer(state, action) {
  if (action.type === "UPDATE_ALL")
    return {
      ipAddress: action.payload.ip,
      location: action.payload.location,
      timezone: action.payload.timezone,
      isp: action.payload.isp,
      latitude: action.payload.latitude,
      longitude: action.payload.longitude,
    };

  if (action.type === "INPUT_UPDATE")
    return {
      ...state,
      input: action.payload.input,
    };

  if (action.type === "IP_UPDATE")
    return {
      ...state,
      ipAddress: state.input,
    };

  if (action.type === "INVALID")
    return {
      ...state,
      ipAddress: action.payload.message,
      location: null,
      timezone: null,
      isp: null,
    };

  return state;
}
