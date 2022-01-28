import { useRouter } from "next/router";
import NavModule from "./NavModule"
import SidebarNav from "./SidebarNav"
import styles from "../../styles/Sidebar/Sidebar.module.scss";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { activeModuleState } from "../../atoms/sidebarAtom";
import { userState } from "../../atoms/userAtom";

const Sidebar = () => {
  const router = useRouter();
  const setActive = useSetRecoilState(activeModuleState);
  const username = useRecoilValue(userState);

  return (
    <aside className={styles.container}>
      <div className={styles.sidebarTop}>
        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src="http://links.israelb.xyz/kajebu/Kajebu-Logo.png" 
            width={100}
            height={40}
            alt=""
            onClick={() => {
              setActive("");
              router.push('/dashboard');
            }}
          />
        </div>

        {/* Navigation */}
        <SidebarNav />
      </div>

      <div className={styles.sidebarBottom}>
        {/* Sidebar Actions */}
        <ul>
          <NavModule name="Settings" icon={faCog} link="/settings" />
          <NavModule name="Help" icon={faQuestionCircle} link="/help" />
        </ul>

        {/* Sidebar Bottom */}
        <div className={styles.profile} onClick={() => router.push('/profile')}>
          <FontAwesomeIcon icon={faUserCircle} size="2x" className={styles.avatar} />
          <span className={styles.username}>{username}</span>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
