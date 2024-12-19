// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

//  
import ArgonBox from "components/ArgonBox";

 import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";

// Overview page components
import Header from "layouts/profile/components/Header";

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg";

function Overview() {
  return (
    <DashboardLayout
      sx={{
        backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.info.main, 0.6),
            rgba(gradients.info.state, 0.6)
          )}, url(${bgImage})`,
        backgroundPositionY: "50%",
      }}
    >
      <Header />
      <ArgonBox mt={5} mb={3}>
        <Grid container spacing={3}>
          {/* Removed PlatformSettings component */}
          {/* Removed ProfileInfoCard component */}
          {/* Removed ProfilesList component (Conversations) */}
        </Grid>
      </ArgonBox>
      <ArgonBox mb={3}>
        <Card>
          <ArgonBox pt={2} px={2}>
            {/* Removed Projects Section */}
          </ArgonBox>
        </Card>
      </ArgonBox>

    </DashboardLayout>
  );
}

export default Overview;