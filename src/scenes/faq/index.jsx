import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="자주 묻는 질문" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            중요한 질문
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>질문 요약</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            중요한 질문 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>질문 요약</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            가장 많이한 질문들
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>질문 요약</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            예상 질문들
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>질문 요약</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            중요한 질문3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>질문 요약</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            중요한 질문 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>질문 요약</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
