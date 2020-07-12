import React, { useState, useEffect } from 'react';
// import Recorder from 'recorder-js';
import Timer from 'react-compound-timer';

const VoiceRecorder = () => {
  /// can be 'active', 'not started', 'stopped';
  const [recordingState, setRecordingState] = useState('not started');

  return (
    <>
      <Timer
        initialTime={0}
        startImmediately={false}
        onStart={() => setRecordingState('active')}
        onResume={() => setRecordingState('active')}
        onPause={() => setRecordingState('stopped')}
        // onStop={() => console.log('')}
        onReset={() => setRecordingState('not started')}
      >
        {({ start, resume, pause, stop, reset }) => (
          <React.Fragment>
            <div>
              <Timer.Minutes /> Mins
              <Timer.Seconds /> seconds
            </div>
            {/* <div>{timerState}</div> */}
            <br />
            <div>
              <button type="button" onClick={start}>
                Start
              </button>
              <button type="button" onClick={pause}>
                Pause
              </button>
              <button type="button" onClick={resume}>
                Resume
              </button>
              {/* <button type="button" onClick={stop}>
                Stop
              </button> */}
              <button type="button" onClick={reset}>
                Reset
              </button>
            </div>
          </React.Fragment>
        )}
      </Timer>
    </>
  );
};

export default VoiceRecorder;
