import { getLocalStorage, setLocalStorage } from './storage'

const ACCESS_TOKEN_STORAGE_KEY = 'access_token'
const INITIAL_VALUE = ''

export const getAccessToken = () =>
  getLocalStorage(ACCESS_TOKEN_STORAGE_KEY, INITIAL_VALUE)

export const setAccessToken = (accessToken: string) =>
  setLocalStorage(ACCESS_TOKEN_STORAGE_KEY, accessToken)
