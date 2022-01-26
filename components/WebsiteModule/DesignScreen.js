import { faCompass, faEye, faPalette, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/Website/DesignScreen.module.scss';

const DesignScreen = () => {
  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <h1 style={{ fontWeight: '500', margin: 20 }}>Website Design</h1>
    <div className={styles.options}>
      <FontAwesomeIcon icon={faEye} /><span>Preview</span>
      <FontAwesomeIcon icon={faPalette} /><span>Manage Themes</span>
      <FontAwesomeIcon icon={faCompass} /><span>Navigation</span>
    </div>
    <ul>
      <li className={styles.listItem}>Homepage<FontAwesomeIcon icon={faPen} color="#347BFF" /></li>
      <li className={styles.listItem}>Library<FontAwesomeIcon icon={faPen} color="#347BFF" /></li>
      <li className={styles.listItem}>Store<FontAwesomeIcon icon={faPen} color="#347BFF" /></li>
      <li className={styles.listItem}>Sales Page<FontAwesomeIcon icon={faPen} color="#347BFF" /></li>
      <li className={styles.listItem}>Login<FontAwesomeIcon icon={faPen} color="#347BFF" /></li>
      <li className={styles.listItem}>Static Page<FontAwesomeIcon icon={faPen} color="#347BFF" /></li>
      <li className={styles.listItem}>Thank You Page<FontAwesomeIcon icon={faPen} color="#347BFF" /></li>
      <li className={styles.listItem}>404 Page<FontAwesomeIcon icon={faPen} color="#347BFF" /></li>
      <li className={styles.listItem}>Blog<FontAwesomeIcon icon={faPen} color="#347BFF" /></li>
      <li className={styles.listItem}>Blog Post<FontAwesomeIcon icon={faPen} color="#347BFF" /></li>
      <li className={styles.listItem}>Blog Search<FontAwesomeIcon icon={faPen} color="#347BFF" /></li>
    </ul>
  </div>;
};

export default DesignScreen;
