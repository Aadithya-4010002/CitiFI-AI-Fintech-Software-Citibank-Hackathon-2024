// @mui material components
import Card from "@mui/material/Card";

//   components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

//   examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

// Import the Chat component
import Chat from "components/Chat"; // Adjust the path based on your folder structure

function Tables() {
  const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  return (
    <DashboardLayout>
      
      {/* Add your existing table code here */}
      <ArgonBox>
        <Table columns={columns} rows={rows} />
        {/* If you have a projects table, you can add it too */}
        {/* <Table columns={prCols} rows={prRows} /> */}
      </ArgonBox>
      
      {/* Integrate the Chat component */}
      <Chat />

    </DashboardLayout>
  );
}

export default Tables;