/**
 *  @description 컴포넌트가 아닌 함수 내에서 localStorage 값이 필요한 경우 사용하는 함수
 *  key가 빈 문자열이면 initialValue를 반환합니다.
 *  localStorage에 저장된 데이터를 가져온다.
 *  localStorage에 저장된 데이터가 없으면 initialValue를 반환한다.
 *  가져온 값이 존재하는 경우, JSON.parse를 사용하여 해당 값을 파싱한 후 반환한다.
 *  가져온 값이 파싱 중에 에러가 발생한 경우 initialValue를 반환한다.
 *  @example
 *  const accessToken = getLocalStorage<string>('_accessToken_', '')
 *  @param key localStorage에 저장된 데이터의 키
 */
export const getLocalStorage = <T>(key: string, initialValue: T): T => {
  try {
    if (typeof window === 'undefined') return initialValue
    if (key.trim() === '') return initialValue
    const value = localStorage.getItem(key)
    if (value === null) return initialValue

    try {
      return JSON.parse(value) as T
    } catch {
      return value as unknown as T
    }
  } catch (error) {
    console.error('Error parsing local storage data', error)
    return initialValue
  }
}

export const setLocalStorage = <T>(key: string, newValue: T) => {
  if (typeof window === 'undefined') return
  try {
    return localStorage.setItem(key, JSON.stringify(newValue))
  } catch (error) {
    console.error('Error set local storage data', error)
  }
}

export const removeLocalStorage = (key: string) => {
  if (typeof window === 'undefined') return
  try {
    return localStorage.removeItem(key)
  } catch (error) {
    console.error('Error remove local storage data', error)
  }
}

export const clearLocalStorage = () => localStorage.clear()
