import * as types from '../../Constants/Actions.redux';

export const checkIdCreateHome = (id) => {
    return {
        type: types.check_Id_Create_Home,
        payload: id 
    }
}