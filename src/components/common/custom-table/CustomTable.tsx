import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FC, ReactNode, useEffect, useState } from "react";

export interface ICustomTableProps {
  headers: Array<string>;
  data: Array<Array<string>>;
  enableActionColumn?: boolean;
  actonMenu?: Array<ReactNode>;
  onClickAction?(selected: any): void;
  closeActionMenu?: boolean;
}

export const CustomTable: FC<ICustomTableProps> = ({
  headers,
  data,
  enableActionColumn,
  actonMenu,
  onClickAction,
  closeActionMenu,
}) => {
  const isEmpty = data.length === 0;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const open = Boolean(anchorEl);

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    selectedComplaint: any
  ) => {
    setAnchorEl(event.currentTarget);
    onClickAction && onClickAction(selectedComplaint);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (closeActionMenu === true) {
      setAnchorEl(null);
    }
  }, [closeActionMenu]);

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 4, maxHeight: 500 }}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell sx={{ fontWeight: "bold" }}>{header}</TableCell>
              ))}
              {enableActionColumn && (
                <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((dataRow, i) => {
              return (
                <>
                  <TableRow key={i}>
                    {dataRow.map((data, index) => (
                      <TableCell key={index}>{data}</TableCell>
                    ))}
                    {enableActionColumn && (
                      <>
                        <IconButton
                          aria-label="more"
                          aria-controls="long-menu"
                          aria-haspopup="true"
                          onClick={(e) => handleClick(e, dataRow)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={open}
                          onClose={handleClose}
                        >
                          {actonMenu}
                        </Menu>
                      </>
                    )}
                  </TableRow>
                </>
              );
            })}

            <TableRow>
              {isEmpty && (
                <TableCell colSpan={7} align="center">
                  No complaints to show.
                </TableCell>
              )}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={data.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
