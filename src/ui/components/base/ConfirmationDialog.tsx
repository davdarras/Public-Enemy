import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { memo } from "react";

type DialogTypeProps = {
  title: string;
  body: string;
  agreeBtnLabel: string;
  disagreeBtnLabel: string;
  handleConfirmation: () => void;
  openConfirmationDialog: boolean;
  setOpenConfirmationDialog: (open: boolean) => void;
};

/**
 * Agree/DIsagree confirmation dialog
 */
export const ConfirmationDialog = memo(
  ({
    title,
    body,
    agreeBtnLabel,
    disagreeBtnLabel,
    handleConfirmation,
    openConfirmationDialog,
    setOpenConfirmationDialog,
  }: DialogTypeProps) => {
    /**
     * Toogle confirmation dialog
     */
    const toggleConfirmationDialog = () => {
      setOpenConfirmationDialog(!openConfirmationDialog);
    };

    return (
      <Dialog
        open={openConfirmationDialog}
        onClose={toggleConfirmationDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="error"
            variant="contained"
            onClick={toggleConfirmationDialog}
          >
            {disagreeBtnLabel}
          </Button>
          <Button
            color="info"
            variant="contained"
            onClick={handleConfirmation}
            autoFocus
          >
            {agreeBtnLabel}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
);

ConfirmationDialog.displayName = "ConfirmationDialog";
