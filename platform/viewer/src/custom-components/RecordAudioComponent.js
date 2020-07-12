import React, { useEffect, useState } from 'react';
import { SimpleDialog } from '@ohif/ui';
import { useLocation } from 'react-router-dom';
import Draggable from 'react-draggable';
import Microphone from '../../../ui/src/elements/Icon/icons/microphone.svg';
import VoiceRecorder from './VoiceRecorder/VoiceRecorder';

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
            minWidth: '900px',
          }}
        >
          <SimpleDialog
            isOpen={isDialogOpen}
            headerTitle="Voice Record For Report"
            onClose={() => setIsDialogOpen(false)}
            onConfirm={() => setIsDialogOpen(false)}
          >
            <VoiceRecorder />
          </SimpleDialog>
        </div>
      </Draggable>
    </>
  );
};

export default RecordAudioComponent;
