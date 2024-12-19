// components
import ArgonTypography from "components/ArgonTypography";

const categoriesListData = [
  {
    color: "dark",
    icon: <i className="ni ni-books" style={{ fontSize: "12px" }} />,
    name: "Literacy and Educational Modules",
    description: (
      <>
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
         Educational resources for better fiancial knowledge.
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-bulb-61" style={{ fontSize: "12px" }} />,
    name: "Wealth Management Tips",
    description: (
      <>
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
        Guidelines for effective asset growth and management.
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
  {
    color: "dark",
    icon: <i className="ni ni-tv-2" style={{ fontSize: "12px" }} />,
    name: "Investment and Financial Guidance",
    description: (
      <>
        <ArgonTypography variant="caption" color="text" fontWeight="medium">
        Expert advice for smart investment and financial decisions.
        </ArgonTypography>
      </>
    ),
    route: "/",
  },
];

export default categoriesListData;