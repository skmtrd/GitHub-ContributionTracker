import styles from './index.module.css';
import MainForm from '../components/MainForm';
import Discription from '../components/Discription';
const Home = () => {
  return (
    <div className={styles.container}>
      <MainForm />
      <Discription />
    </div>
  );
};

export default Home;
