import styles from './styles.module.scss';

const Main = ({ children }) => {
  return <main id={styles.main}>{children}</main>;
};

export default Main;
