import SpPageLayout from '@layouts/SpPageLayout';
import WithPrivate from '@routes/WithPrivate';

const Login = () => {
  return (
    <SpPageLayout>
      <p>private page demo</p>
    </SpPageLayout>
  );
};

export default WithPrivate(Login);
