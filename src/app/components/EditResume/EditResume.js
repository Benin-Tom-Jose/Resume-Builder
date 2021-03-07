import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Button, Card, Col, Form } from 'react-bootstrap';

import { RESUME_DEFAULT_SKILLS } from '../../../config/SampleData';
import { resetResumeProfile, setResumeProfile } from '../../../redux/action/Resume.action';
import './EditResume.scss';

class EditResume extends Component {
    state = {
        defaultSkillSet: RESUME_DEFAULT_SKILLS.sort(),
    };

    componentWillUnmount() {
        this.props.resetProfile();
    }

    handlePersonalFormInputChange = (event, section = "personal") => {
        let key = event.target.name;
        let value = event.target.value;
        this.props.setProfile({ ...this.props.profile, [section]: { ...this.props.profile[section], [key]: value } });
    };

    handleEducationFormInputChange = (event, section, index) => {
        let key = event.target.name;
        let value = (key === "isCurrent") ? event.target.checked : event.target.value;


        let educationDetails = [...this.props.profile[section]]
        educationDetails[index] = { ...educationDetails[index], [key]: value }

        this.props.setProfile({ ...this.props.profile, [section]: educationDetails });
    };

    handleEducationAddition = (event, index) => {
        let section = "education",
            education_template = {
                "degree": "",
                "institute": "",
                "startYear": "",
                "endYear": "",
                "isCurrent": ""
            };

        let educationDetails = [...this.props.profile[section]];
        educationDetails.push(education_template);

        this.props.setProfile({ ...this.props.profile, [section]: educationDetails });
    };

    handleEducationDeletion = (event, index) => {
        let section = "education";
        let educationDetails = [...this.props.profile[section]];
        educationDetails.splice(index, 1);

        this.props.setProfile({ ...this.props.profile, [section]: educationDetails });
    };

    handleExperienceFormInputChange = (event, section, index) => {
        let key = event.target.name;
        let value = (key === "isCurrent") ? event.target.checked : event.target.value;


        let experienceDetails = [...this.props.profile[section]]
        experienceDetails[index] = { ...experienceDetails[index], [key]: value }

        this.props.setProfile({ ...this.props.profile, [section]: experienceDetails });
    };

    handleExperienceAddition = (event, index) => {
        let section = "experience",
            experience_template = {
                "designation": "",
                "company": "",
                "startYear": "",
                "endYear": "",
                "isCurrent": ""
            };

        let experienceDetails = [...this.props.profile[section]];
        experienceDetails.push(experience_template);

        this.props.setProfile({ ...this.props.profile, [section]: experienceDetails });
    };

    handleExperienceDeletion = (event, index) => {
        let section = "experience";
        let experienceDetails = [...this.props.profile[section]];
        experienceDetails.splice(index, 1);

        this.props.setProfile({ ...this.props.profile, [section]: experienceDetails });
    };

    handleSkillChange = (value) => {
        let section = "skills",
            updatedSkills = [];

        value.map(v => {

            if (typeof v === "string") {
                updatedSkills.push(v);
            } else if (typeof v === "object") {
                updatedSkills.push(v.label);
            }

            return null;

        });

        console.log(updatedSkills);

        this.props.setProfile({ ...this.props.profile, [section]: updatedSkills });
    };

    getYearListTemplate = () => {
        let template = [],
            currentYear = new Date().getFullYear(),
            lastYear = "1900";

        for (let year = currentYear; year >= lastYear; year--) {
            template.push(<option value={year} key={year}>{year}</option>);
        }

        return template;
    };

    render() {
        const profile = this.props.profile;

        return (
            <div className="edit-resume">
                <div className="edit-resume__section personal-details">
                    <Card>
                        <Card.Header>
                            <h1 className="header">Personal Details</h1>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formName">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                required
                                                name="name"
                                                type="text"
                                                placeholder="Enter name"
                                                value={profile.personal ? profile.personal.name : ''}
                                                onChange={this.handlePersonalFormInputChange}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">Invalid name !!!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col sm={6}>
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                required
                                                name="email"
                                                type="email"
                                                placeholder="Enter email"
                                                value={profile.personal ? profile.personal.email : ''}
                                                onChange={this.handlePersonalFormInputChange}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">Invalid email !!!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="formPhone">
                                            <Form.Label>Phone</Form.Label>
                                            <Form.Control
                                                required
                                                name="phone"
                                                type="tel"
                                                placeholder="Enter phone"
                                                pattern="^[6-9]\d{9}$"
                                                value={profile.personal ? profile.personal.phone : ''}
                                                onChange={this.handlePersonalFormInputChange}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">Invalid phone number !!!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formAddress">
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control
                                                required
                                                name="address"
                                                as="textarea"
                                                rows={3}
                                                style={{ "resize": "none" }}
                                                value={profile.personal ? profile.personal.address : ''}
                                                onChange={this.handlePersonalFormInputChange}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
                <div className="edit-resume__section education-details">
                    <Card>
                        <Card.Header>
                            <h1 className="header">Education</h1>
                        </Card.Header>
                        <Card.Body>
                            {
                                profile.education &&
                                profile.education.map((edu_item, index) =>
                                    <div className="education_details__item" key={index}>
                                        <Form>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId={`formDegree-education-${index}`}>
                                                        <Form.Label>Degree</Form.Label>
                                                        <Form.Control
                                                            required
                                                            name="degree"
                                                            type="text"
                                                            placeholder="Enter degree"
                                                            value={edu_item.degree}
                                                            onChange={(e) => this.handleEducationFormInputChange(e, "education", index)}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">Invalid degree !!!</Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId={`formInstitute-education-${index}`}>
                                                        <Form.Label>Institute</Form.Label>
                                                        <Form.Control
                                                            required
                                                            name="institute"
                                                            type="email"
                                                            placeholder="Enter institute"
                                                            value={edu_item.institute}
                                                            onChange={(e) => this.handleEducationFormInputChange(e, "education", index)}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">Invalid institute !!!</Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId={`formStartYear-education-${index}`}>
                                                        <Form.Label>Start Year</Form.Label>
                                                        <Form.Control
                                                            required
                                                            custom
                                                            as="select"
                                                            name="startYear"
                                                            value={edu_item.startYear}
                                                            onChange={(e) => this.handleEducationFormInputChange(e, "education", index)}
                                                        >
                                                            {this.getYearListTemplate()}
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId={`formEndYear-education-${index}`}>
                                                        <Form.Label>End Year</Form.Label>
                                                        <Form.Control
                                                            required
                                                            custom
                                                            as="select"
                                                            name="endYear"
                                                            value={edu_item.endYear}
                                                            onChange={(e) => this.handleEducationFormInputChange(e, "education", index)}
                                                        >
                                                            {this.getYearListTemplate()}
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col xs={{ offset: 6 }}>
                                                    <Form.Check
                                                        custom
                                                        type="checkbox"
                                                        id={`formIsCurrent-education-${index}`}
                                                        label="Present (Current)"
                                                        name="isCurrent"
                                                        checked={edu_item.isCurrent}
                                                        onChange={(e) => this.handleEducationFormInputChange(e, "education", index)}
                                                    />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col className="text-center">
                                                    {
                                                        index === (profile.education.length - 1) &&
                                                        <Button className="mt-4" variant="success" onClick={(e) => this.handleEducationAddition(e, index)}>
                                                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.75 7.75a.75.75 0 00-1.5 0v3.5h-3.5a.75.75 0 000 1.5h3.5v3.5a.75.75 0 001.5 0v-3.5h3.5a.75.75 0 000-1.5h-3.5v-3.5z"></path><path fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg>
                                                            Education
                                                        </Button>
                                                    }
                                                    {
                                                        (index > 0 || profile.education.length > 1) &&
                                                        <Button className="mt-4" variant="danger" onClick={(e) => this.handleEducationDeletion(e, index)}>
                                                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M9.036 7.976a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"></path><path fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg>
                                                        Delete
                                                        </Button>
                                                    }
                                                </Col>
                                            </Form.Row>
                                        </Form>

                                    </div>

                                )
                            }
                        </Card.Body>
                    </Card>
                </div>
                <div className="edit-resume__section skills-details">
                    <Card>
                        <Card.Header>
                            <h1 className="header">Skills</h1>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Row>
                                    <Col>
                                        <Form.Group controlId="formSkills">
                                            <Form.Label>Skills</Form.Label>
                                            <Typeahead
                                                multiple
                                                allowNew
                                                id="formSkills"
                                                onChange={this.handleSkillChange}
                                                newSelectionPrefix="Add a new skill : "
                                                options={this.state.defaultSkillSet}
                                                placeholder="Choose skills..."
                                                selected={profile.skills}
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">Invalid skills !!!</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
                <div className="edit-resume__section experience-details">
                    <Card>
                        <Card.Header>
                            <h1 className="header">Experience</h1>
                        </Card.Header>
                        <Card.Body>
                            {
                                profile.experience &&
                                profile.experience.map((exp_item, index) =>
                                    <div className="experience_details__item" key={index}>
                                        <Form>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId={`formDesignation-education-${index}`}>
                                                        <Form.Label>Designation</Form.Label>
                                                        <Form.Control
                                                            required
                                                            name="designation"
                                                            type="text"
                                                            placeholder="Enter designation"
                                                            value={exp_item.designation}
                                                            onChange={(e) => this.handleExperienceFormInputChange(e, "experience", index)}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">Invalid designation !!!</Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId={`formCompany-education-${index}`}>
                                                        <Form.Label>Company</Form.Label>
                                                        <Form.Control
                                                            required
                                                            name="company"
                                                            type="email"
                                                            placeholder="Enter company"
                                                            value={exp_item.company}
                                                            onChange={(e) => this.handleExperienceFormInputChange(e, "experience", index)}
                                                        />
                                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                        <Form.Control.Feedback type="invalid">Invalid company !!!</Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col>
                                                    <Form.Group controlId={`formStartYear-education-${index}`}>
                                                        <Form.Label>Start Year</Form.Label>
                                                        <Form.Control
                                                            required
                                                            custom
                                                            as="select"
                                                            name="startYear"
                                                            value={exp_item.startYear}
                                                            onChange={(e) => this.handleExperienceFormInputChange(e, "experience", index)}
                                                        >
                                                            {this.getYearListTemplate()}
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                                <Col>
                                                    <Form.Group controlId={`formEndYear-education-${index}`}>
                                                        <Form.Label>End Year</Form.Label>
                                                        <Form.Control
                                                            required
                                                            custom
                                                            as="select"
                                                            name="endYear"
                                                            value={exp_item.endYear}
                                                            onChange={(e) => this.handleExperienceFormInputChange(e, "experience", index)}
                                                        >
                                                            {this.getYearListTemplate()}
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col xs={{ offset: 6 }}>
                                                    <Form.Check
                                                        custom
                                                        type="checkbox"
                                                        id={`formIsCurrent-experience-${index}`}
                                                        label="Present (Current)"
                                                        name="isCurrent"
                                                        checked={exp_item.isCurrent}
                                                        onChange={(e) => this.handleExperienceFormInputChange(e, "experience", index)}
                                                    />
                                                </Col>
                                            </Form.Row>
                                            <Form.Row>
                                                <Col className="text-center">
                                                    {
                                                        index === (profile.experience.length - 1) &&
                                                        <Button className="mt-4" variant="success" onClick={(e) => this.handleExperienceAddition(e, index)}>
                                                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.75 7.75a.75.75 0 00-1.5 0v3.5h-3.5a.75.75 0 000 1.5h3.5v3.5a.75.75 0 001.5 0v-3.5h3.5a.75.75 0 000-1.5h-3.5v-3.5z"></path><path fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg>
                                                            Experience
                                                        </Button>
                                                    }
                                                    {
                                                        (index > 0 || profile.experience.length > 1) &&
                                                        <Button className="mt-4" variant="danger" onClick={(e) => this.handleExperienceDeletion(e, index)}>
                                                            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M9.036 7.976a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z"></path><path fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z"></path></svg>
                                                        Delete
                                                        </Button>
                                                    }
                                                </Col>
                                            </Form.Row>
                                        </Form>

                                    </div>

                                )
                            }
                        </Card.Body>
                    </Card>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.ResumeReducer.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProfile: (profile) => dispatch(setResumeProfile(profile)),
        resetProfile: () => dispatch(resetResumeProfile())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditResume);