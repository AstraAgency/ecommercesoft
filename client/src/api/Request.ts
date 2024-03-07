import axios from './axios'

export const createProduct = async (data: any) => axios.post('/products', data)
