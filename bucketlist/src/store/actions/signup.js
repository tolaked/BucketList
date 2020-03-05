import axios from 'axios'
import jwt from 'jwt-decode'
import * as types from '../constants/user'

export const signuPrequest = payload =>({
type:types.SIGNUP_REQUEST,
payload
})

