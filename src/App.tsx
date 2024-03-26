import { useState } from 'react';
import { ToggleDisplayButton } from './components/left-input-components/app';
import './App.scss';
// create a layout first
/**
 * * a left section for editing(background color: light blue)
 * *a right section for displaying information as a page (background color: white; color: black)
 * *  left section can be shrink in order to expand the right section with a button click on top right corner.
 */
export function PageHeader() {
  return (
    <header className="page-header">
      <p> CV application</p>
    </header>
  );
}
export function LeftInputForm() {
  return (
    <aside className="input-form">
      <p>
        please change the position of the expand button to the right-top-corner!
      </p>
      {/*  import A section to add general information like name, email and phone 
           import A section to add your educational experience (school name, title of study and date of study)
           import A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
           *each section contain an edit and submit button (unsolved)
           *each section  can be expand and shrink by button (unsolved)
      */}
      number. */
      <ToggleDisplayButton />
    </aside>
  );
}

export function DisplayForm() {
  return (
    <main className="display-form">
      <p>please add display field for me and giving these border!</p>
    </main>
  );
}
