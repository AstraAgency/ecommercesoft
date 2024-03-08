import axios from './axios'

export const authLogin = async (data: any) => axios.post('/auth/login', data)
export const authRegister = async (data: any) => axios.post('/auth/register', data)
export const authLoadProfileByToken = async (data: any) => axios.get('/auth/load/profile/' + data)
