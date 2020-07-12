import React, { useEffect, useState } from 'react';
import { SimpleDialog } from 'react-viewerbase';
import Microphone from '../../../ui/src/elements/Icon/icons/microphone.svg';
import { useLocation } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const RecordAudioComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div
        onClick={() => {
          const jsonObj = location.search.split('=')[1].split('/')[4];
          const studyId = jsonObj.slice(0, jsonObj.length - 5);
          setIsDialogOpen(true);
          console.log(studyId);
        }}
        className="custom-toolbar-item-container"
        style={{
          height: '48px',
          paddingLeft: '10px',
          paddingRight: '10px',
          cursor: 'pointer',
        }}
      >
        <Microphone
          className="custom-toolbar-icon"
          style={{
            height: '21px',
            width: '21px',
            margin: '2px',
            marginRight: '50%',
            transform: 'translateX(30%)',
          }}
        />
        <p
          className="custom-toolbar-item-text"
          style={{
            fontSize: '12px',
            fontWeight: '500',
            margin: 0,
          }}
        >
          Record
        </p>
      </div>
      <Draggable>
        <div
          style={{
            backgroundColor: 'red',
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: '9999',
            minWidth: '400px',
          }}
        >
          <SimpleDialog
            isOpen={isDialogOpen}
            headerTitle="Voice Record For Report"
            onClose={() => setIsDialogOpen(false)}
            onConfirm={() => setIsDialogOpen(false)}
          >
            <div style={{ color: 'red' }}>I can now be moved around!</div>
          </SimpleDialog>
        </div>
      </Draggable>
      {/* <Dialog
        open={isDialogOpen}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        onClose={() => setIsDialogOpen(false)}
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => setIsDialogOpen(false)}
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={() => setIsDialogOpen(false)} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
};

export default RecordAudioComponent;
