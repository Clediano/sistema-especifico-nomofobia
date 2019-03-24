import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, DialogActions, Button } from '@material-ui/core';

class ConfirmDialog extends Component {
    render() {

        const { open, messageContent, handleClose, dialogTitle } = this.props;

        return (
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <Typography gutterBottom>
                        {messageContent}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    {this.props.children}
                </DialogActions>
            </Dialog>
        );
    }
}

export default ConfirmDialog;