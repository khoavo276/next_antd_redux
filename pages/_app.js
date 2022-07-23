import '@styles/globals.css';
import 'css-reset-and-normalize/css/reset-and-normalize.min.css';
import 'antd/dist/antd.css';

import store from '@store/index';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
