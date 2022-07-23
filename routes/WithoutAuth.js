/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/display-name */
import PageLoading from '@components/PageLoading';
import PATHS from '@config/paths';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const WithoutAuth = WrappedComponent => {
  return properties => {
    if (typeof window !== 'undefined') {
      const router = useRouter();
      const { auth } = useSelector(state => state);

      if (auth?.isLogin) {
        const { redirectTo = PATHS.home } = router.query;
        router.push(redirectTo);
      }

      if (auth?.isLogin) {
        return <PageLoading loading />;
      }

      return <WrappedComponent {...properties} />;
    }

    return null;
  };
};

export default WithoutAuth;
