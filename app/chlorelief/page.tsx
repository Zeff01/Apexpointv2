import React from 'react';

import Contacts from './components/Contacts';
import Navbar from './components/Navbar';

export default function page() {
  return (
    <div>
      <Navbar />
      <Contacts />
    </div>
  );
}
