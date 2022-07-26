//starting login
export const loginStart = () => ({
    type: "LOGIN_START",
});

//login successful
export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

//login failure
export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
});

//logout
export const logout = () => ({
    type: "LOGOUT",
});