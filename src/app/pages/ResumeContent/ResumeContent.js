import React from 'react';
import { useSelector } from 'react-redux';

import Resume from '../../components/Resume/Resume';
import EditResume from '../../components/EditResume/EditResume';
import DrawerContainer from '../../components/DrawerContainer/DrawerContainer';
import './ResumeContent.scss';

const ResumeContent = () => {

    const RESUME_PROFILE = useSelector(state => state.ResumeReducer.profile);

    return (
        <DrawerContainer>
            <div className="resume-content">
                <div className="row">
                    <div className="col-lg-6 resume-content__section section-edit">
                        <EditResume />
                    </div>
                    <div className="col-lg-6 resume-content__section section-view" id="printable">
                        <Resume profile={RESUME_PROFILE} />
                    </div>
                </div>
            </div>
        </DrawerContainer>
    );
};

export default ResumeContent;