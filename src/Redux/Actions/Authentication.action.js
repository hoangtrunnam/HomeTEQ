import * as types from '../../Constants/Actions.redux'

export const AuthenOtp = (otp) => {
    // console.log('otp in action : ', otp);
    return {
        type: types.LOGIN,
        payload: otp // otp test is 555555
    }
}