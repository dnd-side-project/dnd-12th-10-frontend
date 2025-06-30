/**
 * 하나 이상의 불리언 값이 true인지 확인합니다.
 *
 * @param {...boolean[]} booleans - 검사할 불리언 값 목록
 * @returns {boolean} 하나라도 true면 true, 모두 false면 false 반환
 */

const anyTrue = (...booleans: boolean[]) => {
  return booleans.some(Boolean)
}

export default anyTrue
