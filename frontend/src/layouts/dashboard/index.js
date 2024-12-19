// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";
import Slider from "layouts/dashboard/components/Slider";

// React hooks
import { useState, useRef } from "react"; // Import useState and useRef from React

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SalesTable from "examples/Tables/SalesTable";
import CategoriesList from "examples/Lists/CategoriesList";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import BarChart from "examples/Charts/BarCharts/HorizontalBarChart"; // Ensure you have a BarChart component
import MixedChart from "examples/Charts/MixedChart"; // Ensure you have a BarChart component

// Argon Dashboard 2 MUI base styles
import typography from "assets/theme/base/typography";

// Data
import useGradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import barChartData from "layouts/dashboard/data/barChartData"; // Import the bar chart data
import mixedChartData from "layouts/dashboard/data/mixedChartData"; // Import the bar chart data

import salesTableData from "layouts/dashboard/data/salesTableData";
import categoriesListData from "layouts/dashboard/data/categoriesListData";

// SwiperJS components
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide
import Card from "@mui/material/Card";

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components

// SwiperJS styles
import "swiper/swiper-bundle.min.css";


// Import styles for Swiper
import "swiper/swiper-bundle.min.css";


function Default() {
  const { size } = typography;

  const { chartData, loading } = useGradientLineChartData();
  

  SwiperCore.use([Autoplay, Navigation]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (

    
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
    
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={7}>
            <Card sx={{ position: "relative", display: "block", height: "100%", overflow: "hidden" }}>
              <Swiper
                onInit={({ params, navigation }) => {
                  const { navigation: nav } = params;
                  
                  navigation.init();
                  navigation.update();

                  nav.prevEl = navigationPrevRef.current;
                  nav.nextEl = navigationNextRef.current;
                  
                }}
                autoplay={{ delay: 5000 }}
                speed={800}
                spaceBetween={0}
                slidesPerView={1}
                loop
                style={{ height: "100%" }}
              >
                {/* Slide for Line Chart */}
                <SwiperSlide>
                  <GradientLineChart
                    title="Financial Insights"
                    description={
                      <ArgonBox display="flex" alignItems="center">
                        
                        <ArgonBox fontSize={size.lg} color="green" mb={0.3} mr={0.5} lineHeight={0}>
                          <Icon sx={{ fontWeight: "bold" }}>arrow_upward</Icon>
                        </ArgonBox>
                        <ArgonTypography variant="button" color="text" fontWeight="medium">
                          Get Real-Time Insights{" "}
                          <ArgonTypography variant="button" color="text" fontWeight="regular">
                            on your Finances
                          </ArgonTypography>
                        </ArgonTypography>
                      </ArgonBox>
                    }
                    chart={chartData}
                  />
                </SwiperSlide>

                {/* Slide for Bar Chart */}
                <SwiperSlide>
                  <BarChart // Ensure your BarChart component can accept data and options
                    title="Sales and Expenses"
                    description={
                      <ArgonBox display="flex" alignItems="center">
                        <ArgonBox fontSize={size.lg} color="red" mb={0.3} mr={0.5} lineHeight={0}>
                          <Icon sx={{ fontWeight: "bold" }}>bar_chart</Icon>
                        </ArgonBox>
                        <ArgonTypography variant="button" color="text" fontWeight="medium">
                          Compare Your Sales and Expenses{" "}
                          <ArgonTypography variant="button" color="text" fontWeight="regular">
                            Over Time
                          </ArgonTypography>
                        </ArgonTypography>
                      </ArgonBox>
                    }
                    chart={chartData}
                  />
                </SwiperSlide>
                {/* Slide for Polar Area Chart */}

{/* Slide for Mixed Chart */}
<SwiperSlide>
  <MixedChart // Ensure your MixedChart component can accept data and options
    title="Sales, Expenses, and Profit Trends"
    description={
      <ArgonBox display="flex" alignItems="center">
        <ArgonBox fontSize={size.lg} color="orange" mb={0.3} mr={0.5} lineHeight={0}>
          <Icon sx={{ fontWeight: "bold" }}>show_chart</Icon>
        </ArgonBox>
        <ArgonTypography variant="button" color="text" fontWeight="medium">
          Track Sales, Expenses, and Profit{" "}
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            Over Different Months
          </ArgonTypography>
        </ArgonTypography>
      </ArgonBox>
    }
    chart={chartData} // Import the appropriate mixed chart data
  />
</SwiperSlide>

                {/* Navigation buttons */}
                <ArgonBox
                  display="flex"
                  alignItems="center"
                  position="absolute"
                  top={12}
                  right={12}
                  zIndex={5}
                >
                  <ArgonBox
                    width="3.25rem"
                    height="3.25rem"
                    color="white"
                    p={2}
                    sx={{ cursor: "pointer" }}
                    ref={navigationPrevRef}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </ArgonBox>
                  <ArgonBox
                    width="3.25rem"
                    height="3.25rem"
                    color="white"
                    p={2}
                    sx={{ cursor: "pointer" }}
                    ref={navigationNextRef}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </ArgonBox>
                </ArgonBox>
              </Swiper>
            </Card>
          </Grid>
          <Grid item xs={12} lg={5}>
            {/* You can keep the slider or remove it based on your design */}
            <Slider />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
          <Link to="/billing" style={{ textDecoration: 'none' }}>
            <SalesTable title="Liquidity Metrics" rows={salesTableData} />
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
   <Link to="/virtual-reality" style={{ textDecoration: 'none' }}>
    <CategoriesList title="Literacy & Guidance" categories={categoriesListData} />
  </Link>
</Grid>
        </Grid>
      </ArgonBox>
    </DashboardLayout>
  );
}

export default Default;
