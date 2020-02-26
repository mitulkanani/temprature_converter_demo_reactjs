import DashLayout from "containers/dashlayout/DashLayout";
import TempCalculator from "containers/calculator/TempCalculator";

const indexRoutes = [
  { path: "/temp-calculator", component: TempCalculator },
  { path: "/", component: DashLayout }
];

export default indexRoutes;
