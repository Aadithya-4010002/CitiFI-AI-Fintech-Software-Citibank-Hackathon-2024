import React, { useState } from "react";
import Card from "@mui/material/Card";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Argon Dashboard 2 MUI context
import { useArgonController } from "context";

// Images for dark and light modes
import logoDark from "assets/images/logo-ct.png"; // Dark mode logo
import logoLight from "assets/images/logo-ct-dark.png"; // Light mode logo

// base styles
import typography from "assets/theme/base/typography";

function HelpSec() {
  const { d1, h2, fontWeightMedium } = typography;
  const [expanded, setExpanded] = useState(false);
  const [controller] = useArgonController();
  const { darkSidenav } = controller;

  // Determine which logo to use based on the darkSidenav state
  const logoToDisplay = darkSidenav ? logoDark : logoLight;
  const textColor = darkSidenav ? "white" : "black";

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Sample FAQ questions and answers
  const faqs = [
    {
      question: "What is the AI-driven Relationship Manager?",
      answer: "The AI-driven Relationship Manager is an advanced AI platform that offers personalized financial guidance, wealth management insights, and tailored recommendations for loans, funds, and investments."
    },
    {
      question: "How does the Insights Dashboard work?",
      answer: "The Insights Dashboard uses machine learning models and transaction analysis to provide credit recommendations, liquidity metrics, and alerts for spending, saving, and expenditure burn rates."
    },
    {
      question: "What is the Financial Literacy Platform?",
      answer: "The Financial Literacy Platform offers educational lessons, resources, and materials, along with a custom chatbot for in-depth or personal financial queries."
    },
    {
      question: "How secure is the platform?",
      answer: "The platform uses OAuth 2.0 authentication, GDPR, and CCPA compliance to ensure user data privacy and security. The integration of the PLAID API allows secure fetching of transaction data."
    },
    {
      question: "What is the role of GPT-4o in the app?",
      answer: "GPT-4o serves as the core engine for conversational AI, providing personalized financial advisory, recommendations, and responses through natural language processing (NLP) capabilities."
    },
    {
      question: "What kind of wealth management recommendations can I expect?",
      answer: "The app offers recommendations on investment options, credit usage optimization, liquidity metrics, and spending alerts, customized based on your financial profile and goals."
    },
    {
      question: "How does the AI adapt to my preferences?",
      answer: "The AI-driven Relationship Manager adapts through user queries, interactions, and transaction analysis, offering personalized financial advice tailored to your risk profile and preferences."
    },
    {
      question: "Can I get financial guidance on specific topics?",
      answer: "Yes, the Literacy Platform provides educational modules and resources. You can also ask the custom chatbot questions on topics like investing, budgeting, and retirement planning."
    },
    {
      question: "How does the app contribute to financial inclusion?",
      answer: "The app democratizes access to wealth management services by providing personalized financial education and advisory benefits to underserved groups, including women and students."
    },
    {
      question: "How does the subscription model work?",
      answer: "The app offers subscription-based advisory services, allowing users to access exclusive financial offerings and insights for enhanced wealth management."
    },
    {
      question: "What are the main risks involved in using the app?",
      answer: "Integration complexities with existing banking infrastructure and user trust in AI-driven recommendations are the key challenges. The app addresses these by ensuring robust integration and personalized interactions."
    },
    {
      question: "What are the business benefits of the platform?",
      answer: "The platform enhances revenue through subscription-based services, boosts customer lifetime value via tailored recommendations, and enables data-driven decision-making through transaction analytics."
    },
    {
      question: "How does the AI-driven Relationship Manager enhance customer engagement?",
      answer: "The AI-driven Relationship Manager offers personalized financial insights and proactive engagement, which increase customer satisfaction and retention, leading to higher engagement from both young and mature customers."
    },
    {
      question: "What value does the subscription model add to Citi's customers?",
      answer: "The subscription model provides exclusive financial services, advanced insights, and tailored recommendations, allowing customers to make informed financial decisions and benefit from premium advisory features."
    },
    {
      question: "What is the role of the Literacy Platform in business growth?",
      answer: "The Literacy Platform helps bridge the financial knowledge gap by empowering users with education, which builds trust and encourages users to use Citi's financial products, thus improving customer retention and brand loyalty."
    },
    {
      question: "How does the platform improve credit usage for users?",
      answer: "The platform uses machine learning models to analyze customer behavior, providing proactive alerts and recommendations that promote responsible credit use, thus improving customer financial health and minimizing default risks."
    },
    {
      question: "What benefits do underserved groups like women and students get from the platform?",
      answer: "Women and students benefit from personalized financial education and advisory features, such as exclusive investment opportunities and tools that enhance financial knowledge, contributing to financial empowerment."
    },
    {
      question: "How is the Insights Dashboard beneficial for business decision-making?",
      answer: "The Insights Dashboard provides actionable analytics from customer transactions, which allows Citi to optimize product offerings, target marketing more effectively, and improve customer outreach strategies."
    },
    {
      question: "What makes this platform different from traditional relationship managers?",
      answer: "Unlike traditional relationship managers who are typically available only to high-income clients, the AI-driven Relationship Manager offers wealth management services to all customers, promoting inclusivity and personalized assistance for everyone."
    },
    {
      question: "What are the expected outcomes from the AI-driven relationship manager?",
      answer: "Expected outcomes include increased customer engagement through financial literacy modules, improved customer lifetime value through proactive insights, and more opportunities for cross-selling financial products."
    },
    {
      question: "How does the platform help in revenue generation for Citi?",
      answer: "The platform increases revenue by offering subscription-based services, exclusive financial offerings, and advisory features that attract a diverse customer base, while enhancing cross-selling and up-selling opportunities."
    },
    {
      question: "How does the app help customers during market fluctuations?",
      answer: "The app uses AI to provide guidance during market downturns, offering insights on how to adjust investments or manage liquidity, which helps customers make informed decisions even in uncertain times."
    },
    {
      question: "How does the advanced AI help with customer retention?",
      answer: "The AI adapts to customer preferences, provides tailored advice, and proactively offers insights, all of which lead to higher customer satisfaction, loyalty, and retention."
    },
    {
      question: "How is user data privacy ensured?",
      answer: "User data privacy is ensured by leveraging OAuth 2.0 for secure authentication and complying with GDPR and CCPA regulations, providing a trustworthy and transparent experience for users."
    },
    {
      question: "How does the app help in promoting responsible spending habits?",
      answer: "The platform provides users with alerts on spending, saving, and burn rate metrics, enabling them to track their financial health and promote responsible spending behavior."
    },
    {
      question: "What role does machine learning play in liquidity metrics?",
      answer: "Machine learning models, developed with Scikit-learn and TensorFlow, analyze spending patterns and savings rates to provide users with liquidity metrics that help them understand their current financial position and make better decisions."
    },
    {
      question: "How does the platform support investment education?",
      answer: "The platform provides financial literacy modules on investing, along with customized chat support, helping users make educated investment decisions suitable for their risk tolerance and financial goals."
    }
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Card>
        <Typography margin-top="100px" variant="body2" color={textColor} align="center" mb={2}>
          <img
            src={logoToDisplay}
            alt="CitiFi Wealth and Management"
            style={{ height: "60px", display: "block", margin: "0 auto" }}
          />
        </Typography>

        <Typography variant="body2" color={textColor} align="center" mb={2}>
          Get started with CitiFi Wealth & Management App, your all-in-one platform for informed financial decisions and wealth management.
        </Typography>

        <Typography variant="h6" color={textColor} align="center" mt={4}>
          Frequently Asked Questions (FAQs)
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" color={textColor}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="textSecondary" variant="body2">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Card>
    </DashboardLayout>
  );
}

export default HelpSec;