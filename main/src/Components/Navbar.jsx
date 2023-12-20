import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
  return (
    <header>
      <nav>
        <span className="Logo">
        <FontAwesomeIcon icon={faPenNib} />
        </span>
      </nav>
    </header>
  )
}
