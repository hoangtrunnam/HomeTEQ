import * as types from '../../Constants/Actions.redux'

const initialState = {
    cache: [],
    otp: null,
    isLoading: false,
}

const AuthLogin = (state = initialState, actions) => {
    // console.log('token in reducer: ',actions.payload);
    switch (actions.type) {
        case types.LOGIN:
            return {
                ...state,
                otp: actions.payload
            }
        default:
            return state;
    }
}

export default AuthLogin