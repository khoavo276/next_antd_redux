import LoginContainer from '@containers/LoginContainer';
import SpPageLayout from '@layouts/SpPageLayout';
import WithoutAuth from '@routes/WithoutAuth';

const Login = () => {
  return (
    <SpPageLayout>
      <LoginContainer />
    </SpPageLayout>
  );
};

export default WithoutAuth(Login);
