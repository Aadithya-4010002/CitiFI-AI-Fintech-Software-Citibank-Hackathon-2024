const barChartData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Sales",
      backgroundColor: "rgba(54, 162, 235, 0.6)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
      data: [65, 59, 80, 81, 56, 55, 40, 80, 70], // 9 months of sales data
    },
    {
      label: "Expenses",
      backgroundColor: "rgba(255, 99, 132, 0.6)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
      data: [28, 48, 40, 19, 86, 27, 90, 20, 45], // 9 months of expenses data
    },
  ],
};

// Example items array for chart items
const chartItems = [
  {
    icon: {
      color: "primary",
      component: "icon-name", // Replace with actual icon component name
    },
    label: "Item 1",
    progress: {
      content: "$500",
      percentage: 80,
    },
  },
  {
    icon: {
      color: "success",
      component: "icon-name", // Replace with actual icon component name
    },
    label: "Item 2",
    progress: {
      content: "$200",
      percentage: 50,
    },
  },
  // Add more items as needed
];

export default barChartData;



