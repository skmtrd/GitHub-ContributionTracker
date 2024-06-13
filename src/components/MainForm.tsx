import styles from './MainForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const MainForm = () => {
  return (
    <div className={styles.formBox}>
      <FontAwesomeIcon className={styles.icon} icon={faGithub} />
      <h1 className={styles.localClass}>GitHub Contributions Tracker</h1>
      <p className={styles.localClass}>
        To use this tool, you need a GitHub API key. You can obtain one{' '}
        <a
          href="https://github.com/settings/tokens"
          target="_blank"
          rel="noreferrer"
          className={styles.localClass}
        >
          here
        </a>
        .
      </p>
      <form action="/form-post" method="POST" id="contribution-form" className={styles.localClass}>
        <label htmlFor="start-date" className={styles.localClass}>
          Start Date
        </label>
        <input
          className={styles.localClass}
          type="date"
          id="start-date"
          name="start_day"
          required
        />

        <label className={styles.localClass} htmlFor="end-date">
          End Date
        </label>
        <input className={styles.localClass} type="date" id="end-date" name="end_day" required />

        <label className={styles.localClass} htmlFor="api-key">
          API Key
        </label>
        <input className={styles.localClass} type="password" id="api-key" name="token" required />

        <button className={styles.localClass} type="submit">
          Get Contributions
        </button>
      </form>
      <button className={styles.modalButton}>About This Tool</button>
    </div>
  );
};

export default MainForm;
