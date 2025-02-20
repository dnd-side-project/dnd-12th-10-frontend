export const URL_PATH = {
  Home: '/',
  Group: '/group',
  GroupList: '/groups',
  GroupCreate: '/groups/create',
  Login: '/login',
  LoginSuccess: '/login/success',
  Signup: '/login/signup',
  MemosCreate: '/memos/create',
}

export const API_PATH = {
  Login: '/auth/oauth2/kakao',
  ReissueToken: '/auth/reissue',
  Signup: '/user/after-login',
  GroupCreate: '/group',
  Template: '/template',
  TemplateList: '/template/public',
  // TODO: memo와 retrospect 통일 필요
  RetrospectCreate: '/retrospect/add',
  GroupList: '/group/list',
}
