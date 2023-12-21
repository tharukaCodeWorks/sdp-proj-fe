import React, { FC, useEffect, useState } from "react";
import { SystemUserLayout } from "../../components/layouts/sys-user-layout/SystemUserLayout";
import { Container, Paper, Tabs, Tab, MenuItem } from "@mui/material";
import { CustomTable } from "../../components/common/custom-table/CustomTable";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  getAllDepartments,
  getAllDivisions,
  getAllSystemUserComplaints,
} from "../../redux/actions/ComplaintAction";
import { PriorityLabel } from "../../components/common/priority-label/priority-label";
import StatusLabel from "../../components/common/status-label/StatusLabel";
import { PUBLIC_USER_COMPLAINT_TABLE_HEADERS } from "../../data";
import { CustomDrawer } from "../../components/common/drawer/CustomDrawer";
import { IPublicUserResponseData } from "../../typings/interfaces/responses/complaintsResponse";
import { clearSystemUserComplaints } from "../../redux/slice/ComplaintSlice";
import { OfficerComplaintViewDrawerContent } from "../../components/complaint/OfficerComplaintViewDrawer";

export const OfficerDashboardPage: FC = () => {
  const dispatch = useAppDispatch();
  const [selectedTab, setSelectedTab] = useState(0);
  const [tableData, setTableData] = useState<any>([]);
  const { systemUserComplaints, updateComplaintBySysLoading } = useAppSelector(
    (state) => state.compalint
  );
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] =
    useState<IPublicUserResponseData | null>(null);
  const [closeActionMenu, setCloseActionMenu] = useState(false);

  useEffect(() => {
    dispatch(getAllSystemUserComplaints({ status: getStatusByTab() }));
    dispatch(getAllDepartments());
    dispatch(getAllDivisions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllSystemUserComplaints({ status: getStatusByTab() }));
  }, [selectedTab]);

  const handleTabChange = (event: any, newValue: any) => {
    setSelectedTab(newValue);
    dispatch(clearSystemUserComplaints());
    setTableData([]);
  };

  const handleClose = () => {
    setDrawerOpen(false);
    setCloseActionMenu(false);
  };

  const getStatusByTab = () => {
    switch (selectedTab) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 3;
      case 4:
        return 4;
      default:
        return 0;
    }
  };

  const handleOpenDrawer = () => {
    setCloseActionMenu(true);
    setDrawerOpen(true);
  };

  const handleOnClickRow = (row: any) => {
    const selectedRow = systemUserComplaints?.body.find(
      (item) => item.complaintId === row[0]
    );
    selectedRow && setSelectedComplaint(selectedRow);
  };

  const actionMenu = [
    <MenuItem onClick={handleOpenDrawer}>View/Edit</MenuItem>,
  ];

  useEffect(() => {
    systemUserComplaints?.body !== null && populateTableData();
  }, [systemUserComplaints]);

  const populateTableData = () => {
    const tableData: (string | number | JSX.Element)[][] = [];
    systemUserComplaints?.body.forEach((row) => {
      const tempDataRow = [
        row.complaintId,
        row.complaintTitle,
        row.complaintDesc,
        row.departmentName,
        row.divisionName,
        row.assignedUserName || "N/A",
        <PriorityLabel priority={row.priority} />,
        <StatusLabel>{row.status}</StatusLabel>,
      ];
      tableData.push(tempDataRow);
    });
    setTableData(tableData);
  };

  const handleOnUpdated = () => {
    dispatch(getAllSystemUserComplaints({ status: getStatusByTab() }));
  };

  return (
    <SystemUserLayout pageTitle={"Workspace"}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Submitted" />
          <Tab label="In Progress" />
          <Tab label="Resolved" />
          <Tab label="Closed" />
          <Tab label="Rejected" />
        </Tabs>
        <CustomTable
          data={tableData}
          headers={PUBLIC_USER_COMPLAINT_TABLE_HEADERS}
          enableActionColumn={true}
          actonMenu={actionMenu}
          onClickAction={handleOnClickRow}
          closeActionMenu={closeActionMenu}
        />
      </Paper>
      <CustomDrawer
        drawerOpen={drawerOpen}
        onClose={handleClose}
        title="Complaint Details"
        loading={updateComplaintBySysLoading}
      >
        {selectedComplaint && (
          <OfficerComplaintViewDrawerContent
            viewedComplaint={selectedComplaint}
            onUpdated={handleOnUpdated}
          />
        )}
      </CustomDrawer>
    </SystemUserLayout>
  );
};
