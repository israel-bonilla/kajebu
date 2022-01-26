import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HelpScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontWeight: '500', margin: 20 }}>Help</h1>
      <FontAwesomeIcon icon={faQuestionCircle} size="10x" color="gray" />
    </div>
  )
};

export default HelpScreen;
