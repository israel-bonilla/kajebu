import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SettingsScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontWeight: '500', margin: 20 }}>Settings</h1>
      <FontAwesomeIcon icon={faCogs} size="10x" color="gray" />
    </div>
  )
};

export default SettingsScreen;
