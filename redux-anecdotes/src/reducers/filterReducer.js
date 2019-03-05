
const initialState = ""

const freducer = (state = initialState, action) => {
  var s = state
  if(action.type === "CHANGE"){ s = action.data.filter }
  return s
}

export const changeFilter = (filter) => {
  return {type: "CHANGE", data: { filter: filter }}
}

export default freducer
