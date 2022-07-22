import { convertTimestampToDate } from '@utils/date';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export function setUserInfo(data) {
  cookies.set(
    'userInfo',
    // { ...data, enterprise: pick(data.enterprise, ['type', 'extraType']) },
    { data },
    {
      path: '/',
      expires: convertTimestampToDate(getExpireTime())
    }
  );
}

export function getUserInfo() {
  return cookies.get('userInfo');
}

export function setAccessToken(token) {
  cookies.set('token', token, {
    path: '/'
    // expires: convertTimestampToDate(getExpireTime())
  });
}

export function getAccessToken() {
  return cookies.get('token');
}

export function setExpireTime(expireAt) {
  cookies.set('expireAt', expireAt, {
    path: '/',
    expires: convertTimestampToDate(expireAt)
  });
}

function getExpireTime() {
  return cookies.get('expireAt');
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
  cookies.remove('userInfo', options);
  cookies.remove('token', options);
  cookies.remove('expireAt', options);
}
