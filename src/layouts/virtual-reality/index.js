// @mui material components
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import React, { useState } from "react";

// examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

// base styles
import typography from "assets/theme/base/typography";

// Argon Dashboard 2 MUI context
import { useArgonController } from "context";
import PopupChatBot from "components/PopupChatBot";
// Images for dark and light modes
import logoDark from "assets/images/logo-ct.png"; // Dark mode logo
import logoLight from "assets/images/logo-ct-dark.png"; // Light mode logo

function VRInfo() {

  const { fontWeightMedium } = typography;
  const [controller] = useArgonController();
  const { darkMode } = controller;
  const [expanded, setExpanded] = useState(false);
  const { darkSidenav } = controller;

  // Determine which logo to use based on the darkSidenav state
  const logoToDisplay = darkSidenav ? logoLight : logoLight;
  const textColor = darkSidenav ? "white" : "black";

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  // Set text color based on the current mode

  return (
    <DashboardLayout>
      
      <Box sx={{ padding: 3 }}>
        <Card sx={{ marginBottom: 1, padding: 2, backgroundColor: darkMode ? "#fff" : "#fff" }}>
        <img
            src={logoToDisplay}
            alt="CitiFi Literacy Guidance Platform"
            style={{ height: "60px", display: "block", margin: "0 auto" }}
          />
                    <br></br>

          <Typography variant="h5" fontWeight={fontWeightMedium} color={textColor} gutterBottom>
            Literacy and Educational Modules

          </Typography>
          <Typography variant="h5" fontWeight={fontWeightMedium} color={textColor} gutterBottom>
            

          </Typography>
          <br></br>

          <Box>
            <Box sx={{ marginBottom: 2 }}>

              <Typography variant="body2" color="#000">
               1. Personal Finances 
              </Typography> 
              <Typography variant="body2">
               
            </Typography >

              <Typography variant="body2" color={textColor}>
              An overview of making and overseeing personal budgets for goal-setting and financial stability.     
              <Link href="https://www.investopedia.com/terms/b/budget.asp" target="_blank" rel="noreferrer" sx={{ marginLeft: 1, color: darkMode ? "#1565c0a4" : "#1565c0a4" }}>
                  Learn more
                </Link>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
            <Typography >

            </Typography>
            <br></br>
              <Typography variant="body2" color={textColor}>
                ⁠2. Mutual Funds 
              </Typography>
              <Typography variant="body2" color={textColor}>
              Describes the many kinds of mutual funds and how they are used to lower risks and diversify investments.
                <Link href="https://www.amfiindia.com/investor-corner/knowledge-center/introduction-to-mutual-funds.html" target="_blank" rel="noreferrer" sx={{ marginLeft: 1, color: darkMode ? "#1565c0a4" : "#1565c0a4" }}>
                  Learn More
                </Link>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
            <br></br>
              <Typography variant="body2" color={textColor}>
              3. Stock Market
              </Typography>
              <Typography variant="body2" color={textColor}>
              A summary of the composition of the Indian stock market, how stocks are exchanged, and crucial advice for investors.
                <Link href="https://www.investopedia.com/articles/stocks/09/indian-stock-market.asp" target="_blank" rel="noreferrer" sx={{ marginLeft: 1, color: darkMode ? "#1565c0a4" : "#1565c0a4" }}>
                  Learn More
                </Link>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
            <br></br>
              <Typography variant="body2" color={textColor}>
              4. Financial Literacy in General
              </Typography>
              <Typography variant="body2" color={textColor}>
              A tool to improve financial knowledge that covers managing personal finances, investments, and savings.
                <Link href="https://flabindia.com/" target="_blank" rel="noreferrer" sx={{ marginLeft: 1, color: darkMode ? "#1565c0a4" : "#1565c0a4" }}>
                  Learn More
                </Link>
              </Typography>
            </Box>
            </Box>
        </Card>
        </Box>


        {/* Wealth Management Tips */}
        <Box sx={{ padding: 3 }}>
        <Card sx={{ marginBottom: 1, padding: 2, backgroundColor: darkMode ? "#fff" : "#fff" }}>
          <Typography variant="h5" fontWeight={fontWeightMedium} color={textColor} gutterBottom>
            Citibank Schemes & Programs
          </Typography>
          <br></br>
          <Box sx={{ marginBottom: 2 }}>
              <Typography variant="body2" color={textColor}>
              1. Loans
              </Typography>
              <Typography variant="body2" color={textColor}>
              Offers on low-interest personal loans, along with information on qualifying, repaying, consolidating balances, and eligibility.                <Link href="https://www.online.citibank.co.in/products-services/loans/loans.htm#:~:text=Products%20and%20Services-,Personal%20Loan,%2Dpayment%2C%20and%20balance%20consolidation" target="_blank" rel="noreferrer" sx={{ marginLeft: 1, color: darkMode ? "#1565c0a4" : "#1565c0a4" }}>
                  Learn More
                </Link>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
            <br></br>
              <Typography variant="body2" color={textColor}>
              2. Credit Cards
              </Typography>
              <Typography variant="body2" color={textColor}>
              A summary of credit card operations, including interest rates, features, and terms and conditions.                
              <Link href="https://www.online.citibank.co.in/citihelp/topics/credit-card/how-do-credit-card-work/index.htm" target="_blank" rel="noreferrer" sx={{ marginLeft: 1, color: darkMode ? "#1565c0a4" : "#1565c0a4" }}>
                  Learn More
                </Link>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
            <br></br>
              <Typography variant="body2" color={textColor}>
              3. Retirement Plans
              </Typography>
              <Typography variant="body2" color={textColor}>
              The retirement savings plan offered by Citi Bank, which includes extra fixed contributions and employer contribution matches
                <Link href="https://www.citibenefits.com/Savings-Pay/Retirement-Savings-Plan#:~:text=Citi%20matches%20your%20contributions%20to,provides%20an%20additional%20fixed%20contribution" target="_blank" rel="noreferrer" sx={{ marginLeft: 1, color: darkMode ? "#1565c0a4" : "#1565c0a4" }}>
                  Learn More
                </Link>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
            <br></br>
              <Typography variant="body2" color={textColor}>
              4. Savings Account
              </Typography>
              <Typography variant="body2" color={textColor}>
              Benefits from Citibank savings account, including chances to earn interest and flexible banking.
                <Link href="https://www.online.citibank.co.in/products-services/banking/citibanking-account.htm" target="_blank" rel="noreferrer" sx={{ marginLeft: 1, color: darkMode ? "#1565c0a4" : "#1565c0a4" }}>
                  Learn More
                </Link>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
            <br></br>
              <Typography variant="body2" color={textColor}>
              5. Emergency Funds
              </Typography>
              <Typography variant="body2" color={textColor}>
              To manage unanticipated financial emergencies and preserve financial stability, it is critical to accumulate an emergency fund.               
              <Link href="https://www.sc.com/in/stories/inv-imp-of-emergency-fund/" target="_blank" rel="noreferrer" sx={{ marginLeft: 1, color: darkMode ? "#1565c0a4" : "#1565c0a4" }}>
                  Learn More
                </Link>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
            <br></br>
              <Typography variant="body2" color={textColor}>
              6. Tax Planning
              </Typography>
              <Typography variant="body2" color={textColor}>
              An overview of the fundamentals of tax planning, including income tax laws, deductions, and investment choices that save taxes for novices.                
              <Link href="https://www.hdfcbank.com/personal/resources/learning-centre/save/income-tax-basics-for-beginners" target="_blank" rel="noreferrer" sx={{ marginLeft: 1, color: darkMode ? "#1565c0a4" : "#1565c0a4" }}>

                  Learn More
                </Link>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
            <br></br>
              <Typography variant="body2" color={textColor}>
              7. Insurance
              </Typography>
              <Typography variant="body2" color={textColor}>
              Benefits from Citibank savings account, including chances to earn interest and flexible banking.
                <Link href="https://www.online.citibank.co.in/products-services/banking/citibanking-account.htm" target="_blank" rel="noreferrer" sx={{ marginLeft: 1, color: darkMode ? "#1565c0a4" : "#1565c0a4" }}>
                  Learn More
                </Link>
              </Typography>
            </Box>
            <Box sx={{ marginBottom: 2 }}>
            <br></br>
              <Typography variant="body2" color={textColor}>
              8. Credit Score for Home Loans
              </Typography>
              <Typography variant="body2" color={textColor}>
              Benefits from Citibank savings account, including chances to earn interest and flexible banking.
                <Link href="https://www.online.citibank.co.in/blog/citi-knowledge-center/simple-guide-to-cibil-score-for-home-loans.html" target="_blank" rel="noreferrer" sx={{ marginLeft: 1, color: darkMode ? "#1565c0a4" : "#1565c0a4" }}>
                  Learn More
                </Link>
              </Typography>
            </Box>

        </Card>
        </Box>




        {/* Financial Guidance and Investments */}
        <Box sx={{ padding: 3 }}>

        <Card sx={{ padding: 2, marginTop:1, backgroundColor: darkMode ? "#fff" : "#fff" }}>
          <Typography variant="h5" fontWeight={fontWeightMedium} color={textColor} gutterBottom>
            Financial Guidance and Investments
          </Typography>
          <br></br>
            {/* Example of Questions for Chatbot */}
            <Box sx={{ marginBottom: 2 }}>
  <Typography variant="h6" color={textColor}>
    Questions You Can Ask Our Chatbot:
  </Typography>
  <br></br>
  <Box>
    <Typography variant="body2" color={textColor}>
      “What is the best way to start investing?”
    </Typography>
    <br></br>
    <Typography variant="body2" color={textColor}>
      “How can I diversify my investment portfolio?”
    </Typography>
    <br></br>
    <Typography variant="body2" color={textColor}>
      “What are the benefits of long-term investing?”
    </Typography>
    <br></br>
    <Typography variant="body2" color={textColor}>
      “How do I prepare for retirement?”
    </Typography>
  </Box>
</Box>
<PopupChatBot/>

            {/* External Resource for Investment Insights */}
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="h6" color={textColor}>
                Investment Insights
              </Typography>
              <Typography variant="body2" color={textColor}>
              The investment services provided by Citi Bank, which include a range of financial tools for risk management and wealth building.                <Link href="https://www.online.citibank.co.in/products-services/investments/investments-home.htm" target="_blank" rel="noreferrer" sx={{ marginLeft: 1, color: darkMode ? "lightblue" : "blue" }}>
                  Learn More
                </Link>
              </Typography>
            </Box>
        </Card>
        </Box>




    </DashboardLayout>
  );
  }


export default VRInfo;