import styles from './MainForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import type { FC } from 'react';

type MainFormProps = {
  changeStartDay: (startDay: string) => void;
  changeEndDay: (endDay: string) => void;
  changeToken: (token: string) => void;
  toggleModal: () => void;
};

const MainForm: FC<MainFormProps> = ({
  changeStartDay,
  changeEndDay,
  changeToken,
  toggleModal,
}) => {
  return (
    <>
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
        <form id="contribution-form" className={styles.localClass}>
          <label htmlFor="start-date" className={styles.localClass}>
            Start Date
          </label>
          <input
            className={styles.localClass}
            type="date"
            id="start-date"
            onChange={(e) => changeStartDay(e.target.value)}
            required
          />

          <label className={styles.localClass} htmlFor="end-date">
            End Date
          </label>
          <input
            className={styles.localClass}
            type="date"
            id="end-date"
            onChange={(e) => changeEndDay(e.target.value)}
            required
          />

          <label className={styles.localClass} htmlFor="api-key">
            API Key
          </label>
          <input
            className={styles.localClass}
            type="password"
            id="api-key"
            onChange={(e) => changeToken(e.target.value)}
            required
          />

          <button className={styles.localClass}>Get Contributions</button>
        </form>
        <button className={styles.modalButton} onClick={toggleModal}>
          About This Tool
        </button>
      </div>
    </>
  );
};

export default MainForm;
