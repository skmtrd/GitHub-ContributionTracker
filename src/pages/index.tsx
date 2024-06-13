import styles from './index.module.css';
import MainForm from '../components/MainForm';
import Discription from '../components/Discription';
import ExplainModal from '../components/ExplainModal';
import { useState } from 'react';
const Home = () => {
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [token, setToken] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const changeStartDay = (startDay: string) => {
    setStartDay(startDay);
  };
  const changeEndDay = (endDay: string) => {
    setEndDay(endDay);
  };
  const changeToken = (token: string) => {
    setToken(token);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <div className={styles.container}>
      <MainForm
        changeStartDay={changeStartDay}
        changeEndDay={changeEndDay}
        changeToken={changeToken}
        toggleModal={toggleModal}
      />
      <Discription />
      <ExplainModal isOpen={modalIsOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Home;
