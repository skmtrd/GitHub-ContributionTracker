import styles from './MainForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import type { FC } from 'react';
import { useContext } from 'react';
import Link from 'next/link';
import { Inputs } from '../../pages/_app';

type MainFormProps = {
  toggleModal: () => void;
};

const MainForm: FC<MainFormProps> = ({ toggleModal }) => {
  const { inputs, setInputs } = useContext(Inputs);
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
          <label htmlFor="token" className={styles.localClass}>
            API Key
          </label>
          <input
            className={styles.localClass}
            type="password"
            id="token"
            onChange={(e) => setInputs({ ...inputs, token: e.target.value })}
            required
          />

          <label className={styles.localClass} htmlFor="user-name">
            UserName
          </label>
          <input
            className={styles.localClass}
            type="text"
            id="user-name"
            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
            required
          />

          <div className={styles.dateInputs}>
            <div>
              <label htmlFor="start-date" className={styles.localClass}>
                Start Date
              </label>
              <input
                className={styles.localClass}
                type="date"
                id="start-date"
                onChange={(e) => setInputs({ ...inputs, startDay: e.target.value })}
                required
              />
            </div>

            <div>
              <label className={styles.localClass} htmlFor="end-date">
                End Date
              </label>
              <input
                className={styles.localClass}
                type="date"
                id="end-date"
                onChange={(e) => setInputs({ ...inputs, endDay: e.target.value })}
                required
              />
            </div>
          </div>

          <Link href="/result">
            <button className={styles.localClass}>Get Contributions</button>
          </Link>
        </form>
        <button className={styles.modalButton} onClick={toggleModal}>
          About This Tool
        </button>
      </div>
    </>
  );
};

export default MainForm;
