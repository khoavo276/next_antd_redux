import styles from './styles.module.scss';

const SpPageLayout = ({ children }) => {
  return (
    <>
      <div className={styles.SpPageLayout}>{children}</div>
    </>
  );
};

export default SpPageLayout;
