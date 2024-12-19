import { useRef } from "react";
import { Link } from "react-router-dom"; // Ensure you have this import

// SwiperJS
import SwiperCore, { Autoplay, Navigation } from "swiper";

// SwiperJS react components
import { Swiper, SwiperSlide } from "swiper/react";

// SwiperJS styles
import "swiper/swiper-bundle.min.css";

// @mui material components
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Images
import bg1 from "assets/images/img-2.jpg";
import bg2 from "assets/images/img-1.jpg";
import bg3 from "assets/images/img-3.jpg";
import bg4 from "assets/images/img-4.jpg";
import bg5 from "assets/images/img-5.jpg";


function Slider() {
  // install SwiperJS modules
  SwiperCore.use([Autoplay, Navigation]);

  // SwiperJS navigation buttons ref
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Card sx={{ position: "relative", display: "block", height: "100%", overflow: "hidden" }}>
      <Swiper
        onInit={({ params, navigation }) => {
          const { navigation: nav } = params;

          nav.prevEl = navigationPrevRef.current;
          nav.nextEl = navigationNextRef.current;
          navigation.init();
          navigation.update();
        }}
        autoplay={{ delay: 5000 }}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        loop
        style={{ height: "100%" }}
      >
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
        <SwiperSlide>
          <ArgonBox
            sx={{
              position: "relative",
              backgroundImage: `url(${bg2})`,
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <ArgonBox position="absolute" bottom={16} ml={6} py={2.5} textAlign="left" width="80%">
              <ArgonBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="32px"
                height="32px"
                bgColor="white"
                borderRadius="md"
                textAlign="center"
                mb={2}
              >
                <ArgonTypography variant="caption" color="dark" lineHeight={0}>
                  
                  <ArgonBox component="i" color="dark" className="ni ni-camera-compact" />
                </ArgonTypography>
              </ArgonBox>
              <ArgonBox>
  <Link to="/helpsection/help" style={{ textDecoration: 'none' }}> 
    <ArgonTypography variant="h5" color="white" mb={0.5}>
      Get started with CitiFi Wealth & Management
    </ArgonTypography>
  </Link>
</ArgonBox>
            </ArgonBox>
          </ArgonBox>
        </SwiperSlide>
        <SwiperSlide>
          <ArgonBox
            sx={{
              position: "relative",
              backgroundImage: `url(${bg5})`,
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <ArgonBox position="absolute" bottom={16} ml={6} py={2.5} textAlign="left" width="80%">
              <ArgonBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="32px"
                height="32px"
                bgColor="white"
                borderRadius="md"
                textAlign="center"
                mb={2}
              >
                <ArgonTypography variant="caption" lineHeight={0}>
                  <ArgonBox component="i" color="dark" className="ni ni-bulb-61" />
                </ArgonTypography>
              </ArgonBox>
              <Link to="/tables" style={{ textDecoration: 'none' }}> 

              <ArgonTypography variant="h5" color="white" mb={0.5}>
                Get AI Driven Insights on your finances
              </ArgonTypography>
              </Link>
            
            </ArgonBox>
          </ArgonBox>
        </SwiperSlide>
        <SwiperSlide>
          <ArgonBox
            sx={{
              position: "relative",
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <ArgonBox position="absolute" bottom={16} ml={6} py={2.5} textAlign="left" width="80%">
              <ArgonBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="32px"
                height="32px"
                bgColor="white"
                borderRadius="md"
                textAlign="center"
                mb={2}
              >
                <ArgonTypography variant="caption" color="dark" lineHeight={0}>
                  <ArgonBox component="i" color="dark" className="ni ni-trophy" />
                </ArgonTypography>
              </ArgonBox>
              <Link to="/virtual-reality" style={{ textDecoration: 'none' }}> 

              <ArgonTypography variant="h5" color="white" mb={0.5}>
                Obtain financial literacy and wealth management skills.
              </ArgonTypography>
            </Link>
            </ArgonBox>
          </ArgonBox>
        </SwiperSlide>
      <SwiperSlide>
          <ArgonBox
            sx={{
              position: "relative",
              backgroundImage: `url(${bg4})`,
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <ArgonBox position="absolute" bottom={16} ml={6} py={2.5} textAlign="left" width="80%">
              <ArgonBox
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="32px"
                height="32px"
                bgColor="white"
                borderRadius="md"
                textAlign="center"
                mb={2}
              >
                <ArgonTypography variant="caption" color="dark" lineHeight={0}>
                  <ArgonBox component="i" color="dark" className="ni ni-trophy" />
                </ArgonTypography>
              </ArgonBox>
              <Link to="/virtual-reality" style={{ textDecoration: 'none' }}> 

              <ArgonTypography variant="h5" color="white" mb={0.5}>
                Connect your bank account securely with authenticators!
              </ArgonTypography>
            </Link>
            </ArgonBox>
          </ArgonBox>
        </SwiperSlide>
      <SwiperSlide>
      <ArgonBox
        sx={{
          position: "relative",
          backgroundImage: `url(${bg5})`,
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <ArgonBox position="absolute" bottom={16} ml={6} py={2.5} textAlign="left" width="80%">
          <ArgonBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="32px"
            height="32px"
            bgColor="white"
            borderRadius="md"
            textAlign="center"
            mb={2}
          >
            <ArgonTypography variant="caption" color="dark" lineHeight={0}>
              <ArgonBox component="i" color="dark" className="ni ni-trophy" />
            </ArgonTypography>
          </ArgonBox>
          <Link to="/virtual-reality" style={{ textDecoration: 'none' }}> 

          <ArgonTypography variant="h5" color="white" mb={0.5}>
            Customize your interface from the settings!
          </ArgonTypography>
        </Link>
        </ArgonBox>
      </ArgonBox>
    </SwiperSlide>
    </Swiper>

    </Card>

  );
}

export default Slider;
