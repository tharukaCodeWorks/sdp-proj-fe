import { Divider, List, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";
import { IPublicUserResponseData } from "../../typings/interfaces/responses/complaintsResponse";
import StatusLabel from "../common/status-label/StatusLabel";
import { PriorityLabel } from "../common/priority-label/priority-label";

export interface IComplaintViewDrawerContentProps {
  viewedComplaint: IPublicUserResponseData;
}

export const ComplaintViewDrawerContent: FC<IComplaintViewDrawerContentProps> = ({
  viewedComplaint,
}) => {
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
      <ListItem>
        <ListItemText
          primary="Department"
          secondary={viewedComplaint.departmentName}
        />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText
          primary="Division"
          secondary={viewedComplaint.divisionName}
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
        <ListItemText
          primary="Status"
          secondary={<StatusLabel>{viewedComplaint.status}</StatusLabel>}
        />
      </ListItem>
    </List>
  );
};
