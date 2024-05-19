import { ADMIN_TOKEN_STORAGE_KEY } from "../constants/AuthConstants"


export const storeToken=token=>localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY,token)

export const removeToken=()=>localStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY)

export const getToken=()=>localStorage.getItem(ADMIN_TOKEN_STORAGE_KEY)