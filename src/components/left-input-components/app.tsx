import { log } from 'console';
import './style.scss';

export function ToggleDisplayButton() {
  // how to put an icon inside the button?
  // how to change text inside button -> change icon?

  return <button>Expand</button>;
}

export function PersonalInputSection({ handleChange }) {
  {
    /*  
    what to do now? displaying inputs inside display-section
    how?
        contains expand button ( in form of an icon)    
        is already style (unsolved)
     */
  }
  console.log(handleChange);

  return (
    <section className="personal-input-section">
      <div className="section-title">Personal information:</div>{' '}
      <div className="input-section">
        <label htmlFor="name-input">
          Name:
          <input id="name-input" type="text" />
        </label>
        <label htmlFor="email-input">
          Email:
          <input type="email" id="email-input" />
        </label>
        <label htmlFor="phoneNumber-input">
          Phone-number:
          <input type="text" id="phoneNumber-input" />
        </label>
        <button className="edit-button">Edit</button>
        <button className="submit-button">Submit</button>
      </div>
    </section>
  );
}
export function EducationalInputSection() {
  {
    /*
       contains school name input
       contains title of study input
       contains date of study  input
     
       contains expand button ( in form of an icon)    
       is already style (unsolved)

    */
  }

  return (
    <section className="educational-input-section">
      <div className="section-title">Educational information:</div>
      <div className="input-section">
        <label htmlFor="school-name-input">
          {' '}
          School name:
          <input type="text" id="school-name-input" />
        </label>
        <label htmlFor="title-of-study-input">
          Title of study:
          <input type="text" id="title-of-study-input" />
        </label>
        <label htmlFor="date-of-study-input">
          Date of study:
          <input type="date" className="date-of-study-input" />
        </label>
        <label htmlFor="date-of-finish-study-input">
          {' '}
          date of finish:
          <input type="date" className="date-of-finish-study-input" />
        </label>
        <button className="edit-button">Edit</button>
        <button className="submit-button">Submit</button>
      </div>
    </section>
  );
}
export function PracticalInputSection() {
  {
    /*
      contains company name input    
      contains position title    
      contains description of the job input
      contains date from and until  when you worked for that company
      contains submit button
      contains edit button
      contains expand button ( in form of an icon)    
      is already style (unsolved)

    */
  }
  return (
    <section className="practical-input-section">
      <div className="section-title">Practical information:</div>
      <div className="input-section">
        <label htmlFor="company-name-input">
          Company name:
          <input type="text" id="company-name-input" />
        </label>
        <label htmlFor="position-title-input">
          Position title:
          <input type="text" id="position-title-input" />
        </label>
        <label htmlFor="job-description-input">
          Job description:
          {/**make the job-description bigger */}
          <input type="text" id="job-description-input" />
        </label>
      </div>
    </section>
  );
}
