import { FC, useEffect, useState } from "react";
import { PublicUserLayout } from "../../components";
import {
  MenuItem,
  Container,
  Typography,
} from "@mui/material";

import { PriorityLabel } from "../../components/common/priority-label/priority-label";
import StatusLabel from "../../components/common/status-label/StatusLabel";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  deletePublicUserComplaint,
  getAllPublicUserComplaints,
} from "../../redux/actions/ComplaintAction";
import { CustomDrawer } from "../../components/common/drawer/CustomDrawer";
import { ComplaintViewDrawerContent } from "../../components/complaint/ComplaintViewDrawerContent";
import { IPublicUserResponseData } from "../../typings/interfaces/responses/complaintsResponse";
import { CustomTable } from "../../components/common/custom-table/CustomTable";
import { PUBLIC_USER_COMPLAINT_TABLE_HEADERS } from "../../data";
import { JSX } from "react/jsx-runtime";
import { ConfirmDialog } from "../../components/common/confirm-dialog/ConfirmDialog";

export const ComplaintsPage: FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { publicUserComplaints, publicUserComplaintsLoading } = useAppSelector(
    (state) => state.compalint
  );
  const dispatch = useAppDispatch();
  const [selectedComplaint, setSelectedComplaint] =
    useState<IPublicUserResponseData | null>(null);
  const [closeActionMenu, setCloseActionMenu] = useState(false);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [tableData, setTableData] = useState<any>([]);

  const handleDeleteClick = () => {
    setDeleteDialogOpen(true);
    setCloseActionMenu(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedComplaint) {
      dispatch(
        deletePublicUserComplaint({ id: selectedComplaint.complaintId })
      ).then((res: any) => {
        getAllComplaints();
      });
    }
    setDeleteDialogOpen(false);
    setSelectedComplaint(null);
    setCloseActionMenu(false);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setSelectedComplaint(null);
    setCloseActionMenu(false);
  };

  const handleClose = () => {
    setDrawerOpen(false);
    setCloseActionMenu(false);
  };

  const handleOpenDrawer = () => {
    setCloseActionMenu(true);
    setDrawerOpen(true);
  };

  useEffect(() => {
    getAllComplaints();
  }, []);

  useEffect(() => {
    if (publicUserComplaints?.body !== null) populateTableData();
  }, [publicUserComplaints]);

  const getAllComplaints = () => {
    dispatch(getAllPublicUserComplaints());
  };

  const handleOnClickRow = (row: any) => {
    const selectedRow = publicUserComplaints?.body.find(
      (item) => item.complaintId === row[0]
    );
    selectedRow && setSelectedComplaint(selectedRow);
  };

  const populateTableData = () => {
    const tableData: (string | number | JSX.Element)[][] = [];
    publicUserComplaints?.body.forEach((row) => {
      const tempDataRow = [
        row.complaintId,
        row.complaintTitle,
        row.complaintDesc,
        row.departmentName,
        row.divisionName,
        <PriorityLabel priority={row.priority} />,
        <StatusLabel>{row.status}</StatusLabel>,
      ];
      tableData.push(tempDataRow);
    });
    setTableData(tableData);
  };

  const actionMenu = [
    <MenuItem onClick={handleOpenDrawer}>View/Edit</MenuItem>,
    <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>,
  ];

  return (
    <PublicUserLayout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h6">My Complaints</Typography>
        <CustomTable
          data={tableData}
          headers={PUBLIC_USER_COMPLAINT_TABLE_HEADERS}
          enableActionColumn={true}
          actonMenu={actionMenu}
          onClickAction={handleOnClickRow}
          closeActionMenu={closeActionMenu}
        />
      </Container>
      <CustomDrawer drawerOpen={drawerOpen} onClose={handleClose} title="Complaint Details">
        {selectedComplaint && (
          <ComplaintViewDrawerContent viewedComplaint={selectedComplaint} />
        )}
      </CustomDrawer>

      <ConfirmDialog
        openDialog={deleteDialogOpen}
        onClickPositiveAction={handleDeleteConfirm}
        onClickNegativeAction={handleDeleteCancel}
        message="Are you sure you want to delete this complaint?"
        positiveBuutonText="Confirm"
        negativeBuutonText="Cancel"
      />
    </PublicUserLayout>
  );
};
