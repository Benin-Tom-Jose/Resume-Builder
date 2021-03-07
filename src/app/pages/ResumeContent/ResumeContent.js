import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

import Resume from '../../components/Resume/Resume';
import EditResume from '../../components/EditResume/EditResume';
import DrawerContainer from '../../components/DrawerContainer/DrawerContainer';
import './ResumeContent.scss';

const ResumeContent = () => {

    const RESUME_PROFILE = useSelector(state => state.ResumeReducer.profile);
    const resumeRef = useRef();

    const handleResumeDownload = useReactToPrint({
        content: () => resumeRef.current,
    });

    return (
        <DrawerContainer>
            <div className="resume-content">
                <div className="row">
                    <div className="col-lg-6 resume-content__section section-edit">
                        <EditResume />
                    </div>
                    <div className="col-lg-6 resume-content__section section-view" id="printable">
                        <div className="resume__printable" ref={resumeRef}>
                            <Resume profile={RESUME_PROFILE} />
                        </div>
                        <OverlayTrigger
                            overlay={<Tooltip id="button-download">Download</Tooltip>}
                        >
                            <Button variant="primary" className="btn-download" onClick={handleResumeDownload}></Button>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </DrawerContainer>
    );
};

export default ResumeContent;