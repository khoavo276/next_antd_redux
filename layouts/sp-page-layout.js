import Main from './main';
import styles from './styles.module.scss';

const SpPageLayout = ({ children }) => {
  return (
    <>
      <div className={styles.SpPageLayout}>
        <Main>{children}</Main>
      </div>
    </>
  );
};

export default SpPageLayout;
