import { NavLink, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <div>
      <h1>Our Services</h1>

      <ul>
        <li>
          <NavLink to="service1">Service 1</NavLink>
        </li>
        <li>
          <NavLink to="service2">Service 2</NavLink>
        </li>
        <li>
          <NavLink to="service3">Service 3</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}