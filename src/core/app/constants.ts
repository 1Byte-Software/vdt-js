/**
 * @deprecated Sẽ xoá sau khi xử lý xong issues #VDT-115, #VDT-108
 */
export enum PRODUCT_TYPE {
  pte = 'PTE',
  ielts = 'IELTS',
}

export enum UI_TYPE {
  practice = '/practice',
  admin = '/admin',
  mockTest = '/mock-test',
}

export enum MODE_VALUES {
  development = 'development',
  production = 'production',
}

export enum API_DOMAIN {
  development = 'https://dev-protocol.vardytests.com/api/',
  production = 'https://protocol.vardytests.com/api/',
  ai_development = 'https://dev-protocol.vardytests.com/ai',
  ai_production = 'https://protocol.vardytests.com/ai',
}
