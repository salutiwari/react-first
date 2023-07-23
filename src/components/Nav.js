import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  //   const Nav = styled.Nav`

  // .navbar-lists{
  //     display: flex;
  //     gap: 4.8rem;
  //     align-items: center;

  //     .navbar-links{

  // &:link,
  // &: visited;
  // display:inline-block;
  // text-decoration: none;
  // font-size: 1.8rem;
  // font-weight: 500;
  // text-transform: uppercase;
  // color: ${({ theme }) => theme.colors.black};
  // transition: color 0.3s linear;
  //     }

  //     &: :hover,
  //     &: :active{
  //         color: ${({ theme }) => theme.colors.helper};
  //     }
  // }

  // `;

  return;
  <Nav>
    <div className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink to="./" className="navbar-links homelinks">
            Home
          </NavLink>
        </li>
      </ul>
    </div>
  </Nav>;
};

export default Nav;
