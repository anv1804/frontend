import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import { DateSelectArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { tokens } from "../themes";
import { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import { Modal, Form, Input, Select, DatePicker, Button } from "antd";
import moment from "moment";

const { Option } = Select;
const { TextArea } = Input;

interface CustomEvent {
  id: string;
  title: string;
  start: Date;
  end?: Date;
  allDay?: boolean;
  backgroundColor?: string;
  description?: string;
  assignedEmployee?: string;
}

const taskTypes = [
  { label: "Task Type 1", value: "type1", color: "#FF5733" },
  { label: "Task Type 2", value: "type2", color: "#33B5FF" },
  { label: "Task Type 3", value: "type3", color: "#33FF57" },
  { label: "Task Type 4", value: "type4", color: "#FF33A8" },
];

const employees = [
  { name: "Alice Johnson", value: "alice", image: "https://via.placeholder.com/24" },
  { name: "Bob Smith", value: "bob", image: "https://via.placeholder.com/24" },
  { name: "Charlie Lee", value: "charlie", image: "https://via.placeholder.com/24" },
];

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMdDevices = useMediaQuery("(max-width:920px)");
  const isSmDevices = useMediaQuery("(max-width:600px)");
  const isXsDevices = useMediaQuery("(max-width:380px)");
  const [currentEvents, setCurrentEvents] = useState<CustomEvent[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<DateSelectArg | null>(null);
  const [form] = Form.useForm();

  const handleAddEventClick = () => {
    setSelectedDate(null); // Clear any previous date selection
    setIsModalVisible(true);
  };

  const handleDateClick = (selected: DateSelectArg) => {
    setSelectedDate(selected);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      const calendarApi = selectedDate?.view.calendar;
      calendarApi?.unselect();

      const taskType = taskTypes.find((type) => type.value === values.type);

      if (values.title && taskType) {
        calendarApi?.addEvent({
          id: `${selectedDate ? selectedDate.startStr : moment().format()}-${values.title}`,
          title: values.title,
          start: values.startDate.format(),
          end: values.endDate.format(),
          allDay: selectedDate?.allDay ?? false,
          backgroundColor: taskType.color,
          extendedProps: {
            description: values.description,
            assignedEmployee: values.employee,
          },
        });
      }
      form.resetFields();
      setIsModalVisible(false);
    }).catch((info) => {
      console.log("Validate Failed:", info);
    });
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" gap={2}>
        {/* Calendar */}
        <Box
          flex="1 1 100%"
          sx={{
            "& .fc-list-day-cushion ": {
              bgcolor: `${colors.greenAccent[500]} !important`,
            },
          }}
        >
          <Button type="primary" onClick={handleAddEventClick} style={{ marginBottom: 16 }}>
            Add Event
          </Button>
          <FullCalendar
            height="75vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: `${isSmDevices ? "prev,next" : "prev,next today"}`,
              center: "title",
              right: `${isXsDevices
                ? ""
                : isSmDevices
                  ? "dayGridMonth,listMonth"
                  : "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                }`,
            }}
            initialView="dayGridMonth"
            editable
            selectable
            selectMirror
            dayMaxEvents
            select={handleDateClick}
            eventsSet={(events) =>
              setCurrentEvents(
                events.map((event) => ({
                  id: event.id,
                  title: event.title,
                  start: event.start as Date,
                  end: event.end as Date,
                  allDay: event.allDay,
                  backgroundColor: event.backgroundColor,
                  description: event.extendedProps.description,
                  assignedEmployee: event.extendedProps.assignedEmployee,
                }))
              )
            }
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2024-02-27",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2024-02-29",
              },
            ]}
          />
        </Box>

        {/* Event Modal */}
        <Modal
          title="Create Event"
          visible={isModalVisible}
          onOk={handleModalOk}
          onCancel={handleModalCancel}
          okText="Create"
          cancelText="Cancel"
        >
          <Form form={form} layout="vertical" name="eventForm" initialValues={{
            startDate: selectedDate ? moment(selectedDate.start) : null,
            endDate: selectedDate ? moment(selectedDate.end) : null,
          }}>
            <Form.Item
              name="title"
              label="Event Title"
              rules={[{ required: true, message: "Please enter the event title" }]}
            >
              <Input placeholder="Enter event title" />
            </Form.Item>
            <Form.Item
              name="type"
              label="Task Type"
              rules={[{ required: true, message: "Please select a task type" }]}
            >
              <Select placeholder="Select task type">
                {taskTypes.map((type) => (
                  <Option key={type.value} value={type.value}>
                    {type.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name="description" label="Description">
              <TextArea placeholder="Enter event description" rows={3} />
            </Form.Item>
            <Form.Item name="employee" label="Assign to Employee">
              <Select placeholder="Select employee" allowClear>
                {employees.map((employee) => (
                  <Option key={employee.value} value={employee.value}>
                    <img
                      src={employee.image}
                      alt={employee.name}
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        marginRight: 8,
                        verticalAlign: "middle",
                      }}
                    />
                    {employee.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name="startDate"
              label="Start Date"
              rules={[{ required: true, message: "Please select a start date" }]}
            >
              <DatePicker showTime placeholder="Select start date" />
            </Form.Item>
            <Form.Item
              name="endDate"
              label="End Date"
              rules={[{ required: true, message: "Please select an end date" }]}
            >
              <DatePicker showTime placeholder="Select end date" />
            </Form.Item>
          </Form>
        </Modal>
      </Box>
    </Box>
  );
};

export default Calendar;
