import styles from './Discription.module.css';

const Discription = () => {
  return (
    <div className={styles.localClass}>
      <p>
        ※If <strong>Error</strong> is output, the username is incorrect.
      </p>
      <p>
        ※If <strong>Error</strong> is output for all users, the API key is incorrect.
      </p>
    </div>
  );
};

export default Discription;
