import styles from './ExplainModal.module.css';
import type { FC } from 'react';
type ExplainModalProps = {
  isOpen: boolean;
  toggleModal: () => void;
};

const ExplainModal: FC<ExplainModalProps> = ({ isOpen, toggleModal }) => {
  return (
    <div
      id="myModal"
      className={styles.modal}
      style={{ display: isOpen ? 'block' : 'none' }}
      onClick={toggleModal}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.close} onClick={toggleModal}>
          &times;
        </span>
        <h2>
          About <br />
          GitHub Contributions Tracker
        </h2>
        <p>
          GitHub Contributions Tracker is a tool designed to help you track the number of
          contributions made by GitHub users over a specified period. By providing a start date, end
          date, and your GitHub API key, you can easily retrieve and display the contributions for
          the selected users.
        </p>
        <p>
          <strong>Steps to use:</strong>
        </p>
        <ol>
          <li>Enter the start date and end date for the period you want to track.</li>
          <li>
            Provide your GitHub API key. You can obtain one from your{' '}
            <a href="https://github.com/settings/tokens" target="_blank" rel="noreferrer">
              GitHub settings
            </a>
            .
          </li>
          <li>Click "Get Contributions" to retrieve the data.</li>
        </ol>
        <p>
          This tool is particularly useful for project managers, team leads, and individual
          developers who want to monitor their contribution activity or that of their team. It
          provides a quick and efficient way to gather contribution data without having to navigate
          through GitHub's interface.
        </p>
      </div>
    </div>
  );
};

export default ExplainModal;
