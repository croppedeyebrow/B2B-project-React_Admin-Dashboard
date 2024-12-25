import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridplugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListitemText,
  Typography,
  useTheme,
} from "@mui/material";

import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("새로운 업무 일정을 등록하세요");
  };
};

export default Calendar;
