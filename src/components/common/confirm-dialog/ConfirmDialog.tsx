import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { FC } from "react";

export interface IConfirmDialogProps {
    openDialog: boolean;
    onClickPositiveAction():void;
    onClickNegativeAction():void;
    message: string;
    positiveBuutonText: string;
    negativeBuutonText: string;
}

export const ConfirmDialog: FC<IConfirmDialogProps> = ({
    openDialog,
    onClickPositiveAction,
    onClickNegativeAction,
    positiveBuutonText,
    negativeBuutonText,
    message
}) => {
  return (
    <Dialog
      open={openDialog}
      onClose={onClickNegativeAction}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickNegativeAction} color="primary">
          {negativeBuutonText}
        </Button>
        <Button onClick={onClickPositiveAction} color="primary" autoFocus>
          {positiveBuutonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
