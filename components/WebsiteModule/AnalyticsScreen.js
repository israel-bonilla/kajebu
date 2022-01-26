import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnalyticsScreen = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontWeight: '500', margin: 20 }}>Analytics</h1>
      <FontAwesomeIcon icon={faChartBar} size="10x" color="gray" />
    </div>
  );
};

export default AnalyticsScreen;
