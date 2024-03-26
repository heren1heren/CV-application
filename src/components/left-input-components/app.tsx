import './style.scss';

export function ToggleDisplayButton() {
  // how to put an icon inside the button?
  // how to change text inside button -> change icon?

  return <button>Expand</button>;
}

export function PersonalInputSection() {
  {
    /*  contains name input
        contains email input
        contains phone input
        contains submit button
        contains edit button
        contains expand button ( in form of an icon)    
        is already style (unsolved)
     */
  }

  return (
    <section className="personal-input-section">
      <p>I am an flexible input section </p>;
    </section>
  );
}
export function EducationalInputSection() {
  {
    /*
       contains school name input
       contains title of study input
       contains date of study  input
       contains submit button
       contains edit button
       contains expand button ( in form of an icon)    
       is already style (unsolved)

    */
  }

  return (
    <section className="educational-input-section">
      <p>I am an flexible input section </p>;
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
      <p>I am an flexible input section </p>
    </section>
  );
}
