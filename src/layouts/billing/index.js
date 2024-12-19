// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Custom components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import BarChart from "examples/Charts/BarCharts/HorizontalBarChart"; // Ensure you have a BarChart component
import BarCharts from "examples/Charts/BarCharts/VerticalBarChart"; // Ensure you have a BarChart component

import MixedChart from "examples/Charts/MixedChart"; // Ensure you have a BarChart component
import PieChart from "examples/Charts/PieChart";
import BubbleChart from "examples/Charts/BubbleChart";
import RadarChart from "examples/Charts/RadarChart";
import DoughnutChart from "examples/Charts/DoughnutCharts/DefaultDoughnutChart";
import PolarChart from "examples/Charts/PolarChart";
// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Data
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import barChartData from "layouts/dashboard/data/barChartData"; // Import the bar chart data
import chartItems from "layouts/dashboard/data/barChartData"; // Import the bar chart data

import mixedChartData from "layouts/dashboard/data/mixedChartData"; // Import the bar chart data
import pieChartData from "layouts/dashboard/data/pieChartData";
import bubbleChartData from "layouts/dashboard/data/bubbleChartData";
import radarChartData from "layouts/dashboard/data/radarChartData";
import doughnutChartData from "layouts/dashboard/data/doughnutChartData";
import useGradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

import polarChartData from "layouts/dashboard/data/polarChartData";
import SalesTable from "examples/Tables/SalesTable";
import salesTableData from "layouts/dashboard/data/salesTableData";

// Layout components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { StackedLineChartOutlined } from "@mui/icons-material";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";

function Billing() {
  const { chartData, loading } = useGradientLineChartData();

  return (
    <DashboardLayout>
              <SalesTable title="Liquidity Metrics" rows={salesTableData} />

      <ArgonBox mt={4} mb={3}>
        <Grid container spacing={3}>
        

          {/* Gradient Line Chart */}
          <Grid item xs={12} md={4}>
            <Card>
              <ArgonBox p={2}>
                <GradientLineChart
                  title="Income-Savings-Expenditure"
                  description={
                    <ArgonBox display="flex" alignItems="center">
                      <ArgonBox fontSize="lg" color="green" mb={0.3} mr={0.5} lineHeight={0}>
                        <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                      </ArgonBox>
                      <ArgonTypography variant="button" color="text" fontWeight="medium">
                      Monthly Income, Expenditure, and Savings{" "}
                        <ArgonTypography variant="button" color="text" fontWeight="regular">
                          of your Finances
                        </ArgonTypography>
                      </ArgonTypography>
                    </ArgonBox>
                  }
                  chart={chartData}
                />
              </ArgonBox>
            </Card>
          </Grid>

          {/* Bar Chart */}
          <Grid item xs={12} md={4}>
            <Card>
              <ArgonBox p={2}>
                <BarChart
                  title="Financing vs Spending"
                  description={
                    <ArgonBox display="flex" alignItems="center">
                      <ArgonBox fontSize="lg" color="red" mb={0.3} mr={0.5} lineHeight={0}>
                        <Icon sx={{ fontWeight: "bold" }}>bar_chart</Icon>
                      </ArgonBox>
                      <ArgonTypography variant="button" color="text" fontWeight="medium">
                        Compare Your Financing vs Spending{" "}
                        <ArgonTypography variant="button" color="text" fontWeight="regular">
                          Over Time
                        </ArgonTypography>
                      </ArgonTypography>
                    </ArgonBox>
                  }
                  chart={chartData}
                />
              </ArgonBox>
            </Card>
          </Grid>

          {/* Mixed Chart */}
          <Grid item xs={12} md={4}>
            <Card>
              <ArgonBox p={2}>
                <BarChart
                  title="Targets, Savings & Expense Trends"
                  description={
                    <ArgonBox display="flex" alignItems="center">
                      <ArgonBox fontSize="lg" color="orange" mb={0.3} mr={0.5} lineHeight={0}>
                        <Icon sx={{ fontWeight: "bold" }}>show_chart</Icon>
                      </ArgonBox>
                      <ArgonTypography variant="button" color="text" fontWeight="medium">
                        Track Targets, Expenses, and Savings{" "}
                        <ArgonTypography variant="button" color="text" fontWeight="regular">
                          Over Different Months
                        </ArgonTypography>
                      </ArgonTypography>
                    </ArgonBox>
                  }
                  chart={ barChartData }
                />
              </ArgonBox>
            </Card>
          </Grid>
          

          

{/* Radar Chart - Spending Categories Analysis */}
<Grid item xs={12} md={4}>
  <Card>
    <ArgonBox p={2}>
      <BarChart
        title="Spending Categories Analysis"
        description={
          <ArgonBox display="flex" alignItems="center">
            <ArgonBox fontSize="lg" color="red" mb={0.3} mr={0.5} lineHeight={0}>
              <Icon sx={{ fontWeight: "bold" }}>radar</Icon>
            </ArgonBox>
            <ArgonTypography variant="button" color="text" fontWeight="medium">
              Analyze Your Spending{" "}
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                Across Categories
              </ArgonTypography>
            </ArgonTypography>
          </ArgonBox>
        }
        chart={radarChartData}  // Ensure `chartData` reflects spending categories
      />
    </ArgonBox>
  </Card>
</Grid>

{/* Polar Chart - Income Sources Breakdown */}
<Grid item xs={12} md={4}>
  <Card>
    <ArgonBox p={2}>
      <GradientLineChart
        title="Income Sources Breakdown"
        description={
          <ArgonBox display="flex" alignItems="center">
            <ArgonBox fontSize="lg" color="teal" mb={0.3} mr={0.5} lineHeight={0}>
              <Icon sx={{ fontWeight: "bold" }}>bar_chart</Icon>
            </ArgonBox>
            <ArgonTypography variant="button" color="text" fontWeight="medium">
              Understand Your Income{" "}
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                From Different Sources
              </ArgonTypography>
            </ArgonTypography>
          </ArgonBox>
        }
        chart={polarChartData}  // Ensure `chartData` reflects income sources
      />
    </ArgonBox>
  </Card>
</Grid>

{/* Bubble Chart - Investment Performance Analysis */}
<Grid item xs={12} md={4}>
  <Card>
    <ArgonBox p={2}>
      <MixedChart
        title="Investment Performance Analysis"
        description={
          <ArgonBox display="flex" alignItems="center">
            <ArgonBox fontSize="lg" color="purple" mb={0.3} mr={0.5} lineHeight={0}>
              <Icon sx={{ fontWeight: "bold" }}>bubble_chart</Icon>
            </ArgonBox>
            <ArgonTypography variant="button" color="text" fontWeight="medium">
              Visualize Your Investments{" "}
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                Over Time
              </ArgonTypography>
            </ArgonTypography>
          </ArgonBox>
        }
        chart={bubbleChartData}  // Ensure `chartData` reflects investment performance
      />
    </ArgonBox>
  </Card>
  
</Grid>


        </Grid>

      </ArgonBox>
    </DashboardLayout>
  );
}

export default Billing;