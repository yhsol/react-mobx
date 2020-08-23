import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type AlertDialogT = {
  openFl: boolean;
  title?: string;
  message?: string;
  buttonCancelText?: string;
  buttonConfirmText?: string;
  handleAlertClose?: any;
  onClickAlertCancel?: any;
  onClickAlertConfirm?: any;
};

export default function AlertDialog(props: AlertDialogT) {
  const {
    openFl,
    title = 'alert title',
    message = 'alert message',
    buttonCancelText = '취소',
    buttonConfirmText = '확인',
    handleAlertClose,
    onClickAlertCancel,
    onClickAlertConfirm
  } = props;

  //   const [open, setOpen] = React.useState(openFl);
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  return (
    <div>
      <Dialog
        open={openFl}
        onClose={handleAlertClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          {onClickAlertCancel && (
            <Button onClick={onClickAlertCancel} color="primary">
              {buttonCancelText}
            </Button>
          )}
          {onClickAlertConfirm && (
            <Button onClick={onClickAlertConfirm} color="primary" autoFocus>
              {buttonConfirmText}
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
