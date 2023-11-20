import React from 'react';

import Contacts from './components/Contacts';
import Navbar from './section/Navbar';

export default function page() {
  return (
    <div>
      <Navbar />
      <Contacts />
    </div>
  );
}
