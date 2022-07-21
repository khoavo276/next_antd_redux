import { convertTimestampToDate } from '@utils/date';
import { pick } from 'lodash';
import UniversalCookie from 'universal-cookie';

const cookie = new UniversalCookie();

export function setUserInfo(data) {
  cookie.set(
    'userInfo',
    { ...data, enterprise: pick(data.enterprise, ['type', 'extraType']) },
    {
      path: '/',
      expires: convertTimestampToDate(getExpireTime())
    }
  );
}

export function getUserInfo() {
  return cookie.get('userInfo');
}

export function setAccessToken(token) {
  cookie.set('token', token, {
    path: '/'
    // expires: convertTimestampToDate(getExpireTime())
  });
}

export function getAccessToken() {
  return cookie.get('token');
}

export function setExpireTime(expireAt) {
  cookie.set('expireAt', expireAt, {
    path: '/',
    expires: convertTimestampToDate(expireAt)
  });
}

function getExpireTime() {
  return cookie.get('expireAt');
}

export function isAuthenticated() {
  const userInfo = getUserInfo();
  const token = getAccessToken();
  return !!userInfo && !!token;
}

export function revokeUser() {
  const options = {
    path: '/'
  };
  cookie.remove('userInfo', options);
  cookie.remove('token', options);
  cookie.remove('expireAt', options);
}
