import { Link, NavLink } from 'react-router-dom';

// Implementing Navigation Links

const NavigationBar = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/browse">Browse Pokémon</NavLink>
      </li>
      <li>
        <NavLink to="/stories">Comics</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavigationBar;
