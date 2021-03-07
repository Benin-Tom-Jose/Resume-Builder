import React from 'react';

import './Resume.scss';


const Resume = (props) => {
    const { profile } = { ...props };
    const { personal, experience, education, skills } = { ...profile }

    const isSectionValid = (sectionArray) => {
        let isValid = false;

        sectionArray.map(section => {
            return Object.values(section).map(value => {
                if (value) {
                    isValid = true;
                }
                return null;
            });

        });

        return isValid;
    };

    let showSkills = skills && skills.length > 0;
    let showEducation = isSectionValid(education);
    let showExperience = isSectionValid(experience);


    return (
        <article className="resume">
            <div className="resume__container">
                {
                    personal &&
                    <header className="resume__container__header text-center">
                        {personal.name && <h1 className="name">{personal.name}</h1>}
                        {personal.email && <span className="email">{personal.email}</span>}
                        {personal.phone && <span className="phone">{personal.phone}</span>}
                        {personal.address && <span className="location">{personal.address}</span>}
                    </header>
                }
                <main className="resume__container__content">
                    <div className="row">
                        <div className={`${showSkills ? 'col-sm-8' : 'col-sm-12'}`}>
                            {
                                showEducation &&
                                <section className="section section-education">
                                    <h1 className="section__header">Education</h1>
                                    {
                                        education.map((item, index) =>
                                            <div className="row section-education__content" key={index}>
                                                <div className="col-3">{`${item.startYear ? `${item.startYear} -` : ''} ${item.isCurrent ? "present" : `${item.endYear ? item.endYear : ""}`}`}</div>
                                                <div className="col-9 details">
                                                    <h1 className="degree">{item.degree}</h1>
                                                    <p className="institute">{item.institute}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </section>
                            }
                            {
                                showExperience &&
                                <section className="section section-experience">
                                    <h1 className="section__header">Experience</h1>
                                    {
                                        experience.map((item, index) =>
                                            <div className="row section-experience__content" key={index}>
                                                <div className="col-3">{`${item.startYear ? `${item.startYear} -` : ''} ${item.isCurrent ? "present" : `${item.endYear ? item.endYear : ""}`}`}</div>
                                                <div className="col-9 details">
                                                    <h1 className="designation">{item.designation}</h1>
                                                    <p className="company">{item.company}</p>
                                                </div>
                                            </div>
                                        )
                                    }
                                </section>
                            }
                        </div>
                        <div className="col-sm-4">
                            {
                                showSkills &&
                                <section className="section section-skills">
                                    <h1 className="section__header">Skills</h1>
                                    <div className="tag-container">
                                        {
                                            skills.map((skill, index) =>
                                                <span key={index} className="tag">{skill}</span>
                                            )
                                        }
                                    </div>
                                </section>
                            }
                        </div>
                    </div>
                </main>
                <footer className="resume__container__footer"></footer>
            </div>
        </article>
    )
};

export default Resume;