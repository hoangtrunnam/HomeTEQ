import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as types from '../../Constants/Actions.redux'

const initialState = {
    id: '',
    isLoading: false
}

const checkIdCreateHome = (state = initialState, actions) => {

    switch (actions.type) {
        case types.check_Id_Create_Home:
            return {
                ...state,
                id: actions.payload
            }
        default:
            return state;
    }
}

export default checkIdCreateHome
