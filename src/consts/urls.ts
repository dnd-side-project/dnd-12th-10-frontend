export const URL_PATH = {
  Home: '/',
  Memos: '/memos',
  Group: '/group',
  GroupList: '/groups',
  GroupCreate: '/groups/create',
  Login: '/login',
  LoginSuccess: '/login/success',
  Signup: '/login/signup',
  MemosCreate: '/memos/create',
  MyMemos: '/memos/my',
  TemplateDetail: '/memos/template',
}

export const API_PATH = {
  Login: '/auth/oauth2/kakao',
  ReissueToken: '/auth/reissue',
  Signup: '/user/after-login',
  GetMyGroupList: '/user/group/list',
  GetPopularGroupList: '/group/popular',
  GetRecommendGroupList: '/group/recommend',
  GetPublicTemplate: '/template/public',
  GroupCreate: '/group',
  Template: '/template',
  TemplateList: '/template/public',
  // TODO: memo와 retrospect 통일 필요
  RetrospectCreate: '/retrospect/add',
  GroupList: '/group/list',
}
