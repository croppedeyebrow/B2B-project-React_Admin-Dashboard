import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListitemText,
  Typography,
  useTheme,
} from "@mui/material";

import Header from "../../components/Header";
import { tokens } from "../../theme";

// 2024.12.25수정사항:
// formatDate import를 @fullcalendar/react에서 제거
// @fullcalendar/core에서 formatDate를 새로 import

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("새로운 업무 일정을 등록하세요");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  //   2024.12.25수정사항:
  // selected.startsStr를 selected.startStr로 수정했습니다
  // FullCalendar API에서는 startStr이 올바른 속성 이름입니다

  const handleEventClick = (selected) => {
    if (
      window.confirm(`정말 일정을 삭제하시겠습니까? ${selected.event.title}`)
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="업무 일정 관리" subtitle="일정 리스트"></Header>

      <Box display="flex" justifyContent="space-between">
        {/* 달력 사이드바 */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="16px"
          borderRadius="4px"
        >
          <Typography variant="h5">상세 업무 내역</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "12px 0 ",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* 달력 */}
        <Box flex="1 1 100%" ml="16px">
          <FullCalendar
            height="76vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: "1234", title: "All-day-event", date: "2024-12-25" },
              { id: "4321", title: "Timed-event", date: "2024-12-29" },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
