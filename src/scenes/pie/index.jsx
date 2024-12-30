import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header
        title="Buyer's Business Domain Chart"
        subtitle="Contract Domain property"
      />

      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
