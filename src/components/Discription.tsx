import styles from './discription.module.css';

const Discription = () => {
  return (
    <div className={styles.localClass}>
      <p>※If 'Error' is output, the username is incorrect.</p>
      <p>※If 'Error' is output for all users, the API key is incorrect.</p>
    </div>
  );
};

export default Discription;
