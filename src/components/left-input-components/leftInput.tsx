import './leftInput.scss';
import { useState } from 'react';

// export function ToggleDisplayButton() {
//   // how to put an icon inside the button?
//   // how to change text inside button -> change icon?

//   return <button>Expand</button>;
// }

export function PersonalInputSection({ handleChange }) {
  {
    /*  
  
        contains expand button ( in form of an icon)    
        is already style (unsolved)
     */
  }
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('');
  const [isDisplay, setIsDisplay] = useState(true);
  function handleDisplay() {
    setIsDisplay(!isDisplay);
  }

  function handleSubmitClick() {
    handleChange({
      name: nameValue,
      email: emailValue,
      phoneNumber: phoneNumberValue,
    });
  }
  if (!isDisplay) {
    return (
      <button className="expand/hiding-button" onClick={handleDisplay}>
        {isDisplay ? 'Hide Section' : ' Expand'}
      </button>
    );
  }
  return (
    <section className="personal-input-section">
      <div className="section-title">Personal information:</div>{' '}
      <div className="input-section">
        <label htmlFor="name-input">
          Name:
          <input
            id="name-input"
            type="text"
            onChange={(e) => {
              setNameValue(e.target.value);
            }}
          />
        </label>
        <label htmlFor="email-input">
          Email:
          <input
            type="email"
            id="email-input"
            onChange={(e) => {
              setEmailValue(e.target.value);
            }}
          />
        </label>
        <label htmlFor="phoneNumber-input">
          Phone-number:
          <input
            type="text"
            id="phoneNumber-input"
            onChange={(e) => {
              setPhoneNumberValue(e.target.value);
            }}
          />
        </label>
        {/* is there a way to access inputs' value without using states? */}
        <button className="submit-button" onClick={handleSubmitClick}>
          Submit
        </button>
      </div>
      <button className="expand/hiding-button" onClick={handleDisplay}>
        {isDisplay ? 'Hide Section' : ' Expand'}
      </button>
    </section>
  );
}
export function EducationalInputSection({ handleChange }) {
  {
    /*
       contains expand button ( in form of an icon)    
       is already style (unsolved
    */
  }

  const [isDisplay, setIsDisplay] = useState(true);
  const [schoolValue, setSchoolValue] = useState('');
  const [titleOfStudyValue, setTitleOfStudyValue] = useState('');
  const [startDateValue, setStartDateValue] = useState('');
  const [endDateValue, setEndDateValue] = useState('');
  function handleDisplay() {
    setIsDisplay(!isDisplay);
  }
  function handleSubmitClick() {
    handleChange({
      school: schoolValue,
      titleOfStudy: titleOfStudyValue,
      startDate: startDateValue,
      endDate: endDateValue,
    });
  }
  if (!isDisplay) {
    return (
      <button className="expand/hiding-button" onClick={handleDisplay}>
        {isDisplay ? 'Hide Section' : ' Expand'}
      </button>
    );
  }
  return (
    <section className="educational-input-section">
      <div className="section-title">Educational information:</div>
      <div className="input-section">
        <label htmlFor="school-name-input">
          {' '}
          School name:
          <input
            type="text"
            id="school-name-input"
            onChange={(e) => {
              setSchoolValue(e.target.value);
            }}
          />
        </label>
        <label htmlFor="title-of-study-input">
          Title of study:
          <input
            type="text"
            id="title-of-study-input"
            onChange={(e) => {
              setTitleOfStudyValue(e.target.value);
            }}
          />
        </label>
        <label htmlFor="date-of-study-input">
          Date of study:
          <input
            type="date"
            className="date-of-study-input"
            onChange={(e) => {
              setStartDateValue(e.target.value);
            }}
          />
        </label>
        <label htmlFor="date-of-finish-study-input">
          {' '}
          date of finish:
          <input
            type="date"
            className="date-of-finish-study-input"
            onChange={(e) => {
              setEndDateValue(e.target.value);
            }}
          />
        </label>

        <button className="submit-button" onClick={handleSubmitClick}>
          Submit
        </button>
      </div>
      <button className="expand/hiding-button" onClick={handleDisplay}>
        {isDisplay ? 'Hide Section' : ' Expand'}
      </button>
    </section>
  );
}
export function PracticalInputSection({ handleChange }) {
  {
    /*
      
      contains expand button ( in form of an icon)    
      is already style (unsolved)

    */
  }
  const [isDisplay, setIsDisplay] = useState(true);
  const [companyValue, setCompanyValue] = useState('');
  const [positionValue, setPositionValue] = useState('');
  const [jobDescriptionValue, setJobDescriptionValue] = useState('');
  function handleDisplay() {
    setIsDisplay(!isDisplay);
  }

  function handleSubmitClick() {
    handleChange({
      company: companyValue,
      position: positionValue,
      jobDescription: jobDescriptionValue,
    });
  }
  if (!isDisplay) {
    return (
      <button className="expand/hiding-button" onClick={handleDisplay}>
        {isDisplay ? 'Hide Section' : ' Expand'}
      </button>
    );
  }
  return (
    <section className="practical-input-section">
      <div className="section-title">Practical information:</div>
      <div className="input-section">
        <label htmlFor="company-name-input">
          Company name:
          <input
            type="text"
            id="company-name-input"
            onChange={(e) => setCompanyValue(e.target.value)}
          />
        </label>
        <label htmlFor="position-title-input">
          Position title:
          <input
            type="text"
            id="position-title-input"
            onChange={(e) => setPositionValue(e.target.value)}
          />
        </label>
        <label htmlFor="job-description-input">
          Job description:
          {/**make the job-description bigger */}
          <input
            type="text"
            id="job-description-input"
            onChange={(e) => {
              setJobDescriptionValue(e.target.value);
            }}
          />
        </label>
        <button className="submit-button" onClick={handleSubmitClick}>
          Submit
        </button>
      </div>
      <button className="expand/hiding-button" onClick={handleDisplay}>
        {isDisplay ? 'Hide Section' : ' Expand'}
      </button>
    </section>
  );
}
