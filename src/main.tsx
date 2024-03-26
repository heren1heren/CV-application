import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { DisplayForm, LeftInputForm, PageHeader } from './App';
const root: HTMLElement = document.getElementById('root')!;
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <PageHeader />
    <div className="main-wrapper">
      <LeftInputForm />
      <DisplayForm />
    </div>
  </React.StrictMode>
);
