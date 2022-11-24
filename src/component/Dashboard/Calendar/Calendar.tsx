import React from "react";
import Calendar from "react-calendar";
import { format } from "date-fns";
import { ChakraProvider, Box, Heading, HStack, Text } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import "react-calendar/dist/Calendar.css";
import "./Calendar.css";

const Calendars = () => {
  const [value, onChange] = React.useState(new Date());

  return (
    <ChakraProvider>
      <div className="Calendars">
        <Box m={0}>
          <Calendar
            locale="US"
            calendarType="US"
            onChange={onChange}
            value={value}
            formatDay={(_, date) => format(date, "d")}
            prevLabel={<ChevronLeftIcon color="#318bf7" w="30px" h="30px" />}
            nextLabel={<ChevronRightIcon color="#318bf7" w="30px" h="30px" />}
            prev2Label={null}
            next2Label={null}
            view="month"
          />
        </Box>
      </div>
    </ChakraProvider>
  );
};

export default Calendars;
