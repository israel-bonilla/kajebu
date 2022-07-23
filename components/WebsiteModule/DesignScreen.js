import { faCompass, faEye, faPalette, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../../styles/Website/DesignScreen.module.scss';

const DesignScreen = () => {
  const WebDesignRow = ({ title }) => (
    <li className={styles.listItem}>{title}<FontAwesomeIcon icon={faPen} color="#347BFF" /></li>
  );
  const webDesignRowTitles = ["Homepage", "Library", "Store", "Sales Page", "Login", "Static Page", "Thank You Page", "404 Page", "Blog", "Blog Post", "Blog Search"];

  return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <h1 style={{ fontWeight: '500', margin: 20 }}>Website Design</h1>
    <div className={styles.options}>
      <FontAwesomeIcon icon={faEye} /><span>Preview</span>
      <FontAwesomeIcon icon={faPalette} /><span>Manage Themes</span>
      <FontAwesomeIcon icon={faCompass} /><span>Navigation</span>
    </div>
    <ul className={styles.webDesignList}>
      {webDesignRowTitles.map(title => <WebDesignRow key={title} title={title} />)}
    </ul>
  </div>;
};

export default DesignScreen;
