module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 새로운 기능
        'fix', // 버그 수정
        'hotfix', // 핫픽스
        'docs', // 문서
        'refactor', // 리팩토링
        'test', // 테스트 코드
        'chore', // 그 외 자잘한 작업
      ],
    ],
    'subject-case': [
      2,
      'always',
      [
        'lower-case',
        'upper-case',
        'camel-case',
        'kebab-case',
        'pascal-case',
        'sentence-case',
        'snake-case',
        'start-case',
      ],
    ],
  },
}
