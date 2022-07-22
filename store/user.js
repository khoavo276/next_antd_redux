import { createSlice } from '@reduxjs/toolkit';
import {
  getAccessToken,
  getUserInfo,
  revokeUser,
  setAccessToken,
  setUserInfo
} from '@utils/cookie';

const initialUser = getUserInfo() ? getUserInfo() : null;
const initIsLogin = !!getAccessToken() || false;

const slice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
    isLogin: initIsLogin
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isLogin = true;
      setUserInfo(action?.payload.user);
      setAccessToken(action?.payload.token);
    },
    logoutSuccess: state => {
      state.user = null;
      state.isLogin = false;
      revokeUser();
    }
  }
});

export default slice.reducer;

const { loginSuccess, logoutSuccess } = slice.actions;

export const login = token => async dispatch => {
  const user = null;
  dispatch(loginSuccess({ user: user, token: token }));
};

export const logout = () => {
  return async dispatch => {
    dispatch(logoutSuccess());
  };
};
