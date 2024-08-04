import React from "react";
import {  useLocation, useNavigate } from "react-router-dom"; 
import DonutChart from "./Charts/DonutChart";
import LineChart from "./Charts/LineChart";
import PlotChart from "./Charts/PlotChart";
import PolarArea from "./Charts/PolarArea";
import TimeLine from "./Charts/TimeLine";
import SemiDonut from "./Charts/SemiDonut";

const Dashboard = ({ userType }) => {
  const navigate = useNavigate(); 
  const location = useLocation();
  const data = location.state?.userType || "user"; 
  console.log("LOCation",data);
  

  const handleBackClick = () => {
    navigate("/login")
  };

  console.log("userType", userType);

  return (
    <div style={styles.container}>
      <button style={styles.backButton} onClick={handleBackClick}>
        ← Back
      </button>
      <div style={styles.dashboardGrid}>
        {data === "admin" ? (
          <>
            <ChartCard title="Donut Chart">
              <DonutChart />
            </ChartCard>
            <ChartCard title="Plot Chart">
              <PlotChart />
            </ChartCard>
          </>
        ) : (
          <>
            <ChartCard title="Line Chart">
              <LineChart />
            </ChartCard>
            <ChartCard title="Semi Donut Chart">
              <SemiDonut />
            </ChartCard>
            <ChartCard title="Polar Area Chart">
              <PolarArea />
            </ChartCard>
            <ChartCard title="Timeline">
              <TimeLine />
            </ChartCard>
          </>
        )}
      </div>
    </div>
  );
};

const ChartCard = ({ title, children }) => (
  <div style={styles.card}>
    <div style={styles.cardContent}>{children}</div>
  </div>
);

const styles = {
  container: {
    padding: "20px",
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: "10px",
    left: "10px",
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.2s",
  },
  backButtonHover: {
    backgroundColor: "#0056b3",
  },
  dashboardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    marginTop: "50px", // Add margin to avoid overlap with back button
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    transition: "transform 0.2s",
  },
  cardContent: {
    minHeight: "150px",
  },
  cardHover: {
    transform: "scale(1.05)",
  },
};

styles.card[":hover"] = styles.cardHover;
styles.backButton[":hover"] = styles.backButtonHover;

export default Dashboard;
