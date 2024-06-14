import styles from './index.module.css';
import MainForm from '../components/IndexPage/MainForm';
import Discription from '../components/IndexPage/Discription';
import ExplainModal from '../components/IndexPage/ExplainModal';
import { useState } from 'react';
const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <div className={styles.container}>
      <MainForm toggleModal={toggleModal} />
      <Discription />
      <ExplainModal isOpen={modalIsOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Home;
