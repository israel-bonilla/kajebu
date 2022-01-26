import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { activeSubmoduleState } from "../../atoms/sidebarAtom";
import styles from '../../styles/Sidebar/NavSubmodule.module.scss'

const NavSubmodule = ({ name, link }) => {
  const router = useRouter();
  const [activeSubmodule, setActiveSubmodule] = useRecoilState(activeSubmoduleState);

  const switchSubmodule = () => {
    if(activeSubmodule === name) return;
    setActiveSubmodule(name);
    router.push(link);
  }
  
  return (
    <li
      onClick={switchSubmodule}
      className={`${styles.nameBase} ${activeSubmodule === name ? styles.nameActive : styles.name}`}
    >{name}</li>
  )
}

export default NavSubmodule
