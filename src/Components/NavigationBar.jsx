import React from 'react'
import {Link} from 'react-router-dom'
function NavigationBar() {
  return (
    <div>
      <nav>
        <ul>
            <li>
                <Link to="/">Homepage</Link>
            </li>
            <li>
                <Link to="/aboutus">Aboutus</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavigationBar
