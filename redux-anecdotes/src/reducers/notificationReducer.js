
const initialState = ""

const nreducer = (state = initialState, action) => {
  var s = state
  if(action.type === "NEW_NOTIFICATION"){ s = action.data.notification }
  console.log(s)
  return s
}

export const changeNotification = (notification) => {
  console.log("adf")
  return {type: "NEW_NOTIFICATION", data: { notification: notification }}
}

export default nreducer
