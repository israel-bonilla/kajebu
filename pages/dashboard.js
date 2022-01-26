import { useEffect } from "react";
import DashboardTemplate from "../components/Dashboard/DashboardTemplate"
import WelcomeScreen from "../components/Dashboard/WelcomeScreen"

const Dashboard = () => {
  
  useEffect(() => {
    window.location.reload();
  }, []);

  return <DashboardTemplate Screen={WelcomeScreen} />;
}

export default Dashboard
