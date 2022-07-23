import { Spin } from 'antd';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

const PageLoading = loading => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return (
      <div className={styles.wrapper}>
        <Spin spinning={loading} />
      </div>
    );
  }

  return null;
};

export default PageLoading;
