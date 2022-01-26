import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Dashboard/Header.module.scss'

const Header = () => {
  const router = useRouter();
  const [btnAction, setBtnAction] = useState("");

  useEffect(() => {
    switch (router.pathname) {
      case '/all-products':
        setBtnAction("+ New Product");
        break;
      case '/offers':
        setBtnAction("+ Add New Offer");
        break;
      case '/pipelines':
        setBtnAction("+ New Pipeline");
        break;
      case '/email-campaigns':
        setBtnAction("+ New Email Campaign");
        break;
      case '/events':
        setBtnAction("+ New Event");
        break;
      case '/forms':
        setBtnAction("+ New Form");
        break;
      case '/blog':
        setBtnAction("+ New Post");
        break;
      default:
        setBtnAction("");
        break;
    }
  }, [router.pathname])

  return (
    <header className={styles.container}>
      <div className={styles.input}>
        <FontAwesomeIcon icon={faSearch} className={styles.icon} />
        <input type="text" placeholder="Kajebu Assistant" />
      </div>

      {/* Button related to active module */}
      {btnAction && <button className={styles.button}>{btnAction}</button>}
    </header>
  )
}

export default Header
