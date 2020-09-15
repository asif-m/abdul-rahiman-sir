import React from 'react';
import {DonateInfo} from '../donate-info/donate-info';
import {TitleContainer} from '../title-container/title-container';
import './home-page.css';

export function HomePage() {
    return (
      <div className="home-page">
          <TitleContainer/>
          <DonateInfo/>
      </div>
    );
  }
  