import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  FormControl,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IPublicUserResponseData } from "../../typings/interfaces/responses/complaintsResponse";
import { PriorityLabel } from "../common/priority-label/priority-label";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { updateComplaintBySys } from "../../redux/actions/ComplaintAction";
import { Option, SearchSelect } from "../common/search-select/SearchSelect";
import { searchSystemUsers as searchSystemUsersAction } from "../../redux/actions/UsersAction";
import { IUpdateComplaintBySysRequest } from "../../typings/interfaces/requests/updateComplaintBySysRequest";

export interface IOfficerComplaintViewDrawerContentProps {
  viewedComplaint: IPublicUserResponseData;
  onUpdated(): void;
}

export const OfficerComplaintViewDrawerContent: FC<
  IOfficerComplaintViewDrawerContentProps
> = ({ viewedComplaint, onUpdated }) => {
  const [status, setStatus] = useState(0);
  const [division, setDivision] = useState(0);
  const [department, setDepartment] = useState(0);
  const [expandedHistory, setExpandedHistory] = useState(false);
  const [commentHistory, setCommentHistory] = useState(false);
  const { divisions, departments } = useAppSelector((state) => state.compalint);
  const { searchSystemUsers } = useAppSelector((state) => state.users);
  const [searchedAssignee, setSearchedAssignee] = useState<
    Array<{ value: string; label: string }>
  >([]);
  const [selectedAssignee, setSelectedAssignee] = useState<Option | null>(null);
  const dispatch = useAppDispatch();

  const handleStatusChange = (event: any) => {
    setStatus(event.target.value);
    updateComplaint({
      complaintId: viewedComplaint.complaintId,
      divisionId: division,
      departmentId: department,
      assignedUserId: selectedAssignee?.value && undefined,
      status: event.target.value,
    });
  };

  const handleDivisoinChange = (event: any) => {
    setDivision(event.target.value);
    updateComplaint({
      complaintId: viewedComplaint.complaintId,
      divisionId: event.target.value,
      departmentId: department,
      assignedUserId: selectedAssignee?.value || undefined,
      status: status || 0,
    });
  };

  const handleDepartmentChange = (event: any) => {
    setDepartment(event.target.value);
    console.log("Selected Assignee: ", selectedAssignee);
    updateComplaint({
      complaintId: viewedComplaint.complaintId,
      divisionId: division,
      departmentId: event.target.value,
      assignedUserId: selectedAssignee?.value || undefined,
      status: status || 0,
    });
  };

  const handleOnSelectAssignee = (selectedOption: Option | null) => {
    setSelectedAssignee(selectedOption);
    updateComplaint({
      complaintId: viewedComplaint.complaintId,
      divisionId: division,
      departmentId: department,
      assignedUserId: selectedOption?.value || undefined,
      status: status || 0,
    });
  };

  const handleHistoryAccordionToggle = () => {
    setExpandedHistory(!expandedHistory);
  };

  const handleCommentAccordionToggle = () => {
    setCommentHistory(!commentHistory);
  };

  useEffect(() => {
    setDivision(viewedComplaint.divisionId);
    setStatus(getStatusMapping(viewedComplaint.status));
    setDepartment(viewedComplaint.departmentId);
    if (viewedComplaint.assignedUserId)
      setSelectedAssignee({
        value: viewedComplaint.assignedUserId,
        label: viewedComplaint.assignedUserName,
      });
  }, [viewedComplaint]);

  useEffect(() => {
    console.log("Selected Assignee: ", selectedAssignee);
  }, [selectedAssignee]);

  useEffect(() => {
    console.log("New: ", searchSystemUsers);
    const resultSet: any = searchSystemUsers?.body.map((item) => {
      return {
        label: `${item.first_name} ${item.last_name ? item.first_name : ""}`,
        value: item.id,
      };
    });
    resultSet && setSearchedAssignee(resultSet);
  }, [searchSystemUsers]);

  const updateComplaint = (data: IUpdateComplaintBySysRequest) => {
    dispatch(updateComplaintBySys(data)).then((res) => {
      onUpdated();
    });
  };

  const getStatusMapping = (status: String) => {
    switch (status) {
      case "SUBMITTED":
        return 0;
      case "IN_PROGRESS":
        return 1;
      case "RESOLVED":
        return 2;
      case "CLOSED":
        return 3;
      case "REJECTED":
        return 4;
      default:
        return 0;
    }
  };

  const handleOnUserSearch = (name: string) => {
    dispatch(searchSystemUsersAction({ name }));
  };

  return (
    <List>
      <ListItem>
        <ListItemText
          primary="Complaint ID"
          secondary={viewedComplaint.complaintId}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="Title"
          secondary={viewedComplaint.complaintTitle}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="Description"
          secondary={viewedComplaint.complaintDesc}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="Priority"
          secondary={<PriorityLabel priority={viewedComplaint.priority} />}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <FormControl fullWidth margin="normal">
          <InputLabel id="department-label">Department</InputLabel>
          <Select
            labelId="department-label"
            id="department"
            name="department"
            value={department}
            label="Department"
            onChange={handleDepartmentChange}
          >
            {departments?.body.map((department) => (
              <MenuItem key={department.id} value={department.id}>
                {department.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ListItem>
      <Divider />
      <ListItem>
        <FormControl fullWidth margin="normal">
          <InputLabel id="divisionId-label">Division</InputLabel>
          <Select
            labelId="divisionId-label"
            id="divisionId"
            name="divisionId"
            value={division}
            label="Division"
            onChange={handleDivisoinChange}
          >
            {divisions?.body?.map((division: any) => (
              <MenuItem key={division.id} value={division.id}>
                {division.divisionName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ListItem>
      <Divider />
      <ListItem>
        <FormControl fullWidth margin="normal">
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            id="status"
            value={status}
            label="Status"
            onChange={handleStatusChange}
          >
            <MenuItem value="0" disabled>
              Submitted
            </MenuItem>
            <MenuItem value="1">In Progress</MenuItem>
            <MenuItem value="2">Resolved</MenuItem>
            <MenuItem value="3">Closed</MenuItem>
            <MenuItem value="4">Rejected</MenuItem>
          </Select>
        </FormControl>
      </ListItem>
      <Divider />
      <ListItem>
        <SearchSelect
          selected={selectedAssignee}
          options={searchedAssignee}
          label="Assignee"
          onSelect={handleOnSelectAssignee}
          onSearchChange={handleOnUserSearch}
        />
      </ListItem>
      <Divider />
      <Accordion
        expanded={expandedHistory}
        onChange={handleHistoryAccordionToggle}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="complaint-history-content"
          id="complaint-history-header"
        >
          <Typography fontWeight={"bold"}>Complaint History</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* Here you can display the complaint history */}
            {/* For example: */}
            {[
              { date: "2023-10-10", action: "Changed status by Unknow user" },
              { date: "2023-10-10", action: "Changed status by Unknow user" },
            ].map((historyItem, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={historyItem.date}
                  secondary={historyItem.action}
                />
              </ListItem>
            ))}
            {/* Add your logic to display complaint history */}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={commentHistory}
        onChange={handleCommentAccordionToggle}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="complaint-history-content"
          id="complaint-history-header"
        >
          <Typography fontWeight={"bold"}>Comment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TextField
            label="Add Comment"
            multiline
            rows={4}
            // value={""}
            onChange={() => {}}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button onClick={() => {}} variant="contained" color="primary">
            Submit Comment
          </Button>
          <List>
            {[
              { date: "2023-10-10", text: "Seems there is no any issue here" },
              { date: "2023-10-10", text: "Seems there is no any issue here" },
            ].map((comment: any, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText
                    primary={comment.date}
                    secondary={comment.text}
                  />
                </ListItem>
                {index < [].length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
    </List>
  );
};
