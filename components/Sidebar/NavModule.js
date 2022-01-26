import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil"
import { activeModuleState, activeSubmoduleState } from "../../atoms/sidebarAtom";
import styles from '../../styles/Sidebar/NavModule.module.scss';

const NavModule = ({ name, children, link, icon }) => {
  const [activeModule, setActiveModule] = useRecoilState(activeModuleState);
  const setActiveSubmodule = useSetRecoilState(activeSubmoduleState);
  const router = useRouter();

  const switchModule = () => {
    if(activeModule === name) return;
    setActiveModule(name);
    if(children) setActiveSubmodule(children[0].props.name);
    router.push(link);
  }

  return (
    <li onClick={switchModule} className={styles.container}>
      {icon && <FontAwesomeIcon icon={icon} size="sm"
        className={styles.icon} />}
      <span className={styles.name}>{name}</span>

      {/* Children (Submodules) if any */}
      {(activeModule === name) && children && <ul>{children}</ul>}
    </li>
  )
}

export default NavModule
