import "./CategoryList.css";
import { NavLink } from "react-router-dom";

function CategoryList() {
  return (
    <nav>
      <ul className="category--list">
        <li>
          <NavLink className={({isActive}) => (isActive ? "active-link": "")} to={"/Inicio"}> Inicio </NavLink>
        </li>
        <li>
        <NavLink className={({isActive}) => (isActive ? "active-link": "")} to={"/futbol"}> Futbol </NavLink>
        </li>
        <li>
        <NavLink className={({isActive}) => (isActive ? "active-link": "")} to={"/tenis"}> Tenis </NavLink>
        </li>
        <li>
        <NavLink className={({isActive}) => (isActive ? "active-link": "")} to={"/hockey"}> Hockey </NavLink>
        </li>
        <li>
        <NavLink className={({isActive}) => (isActive ? "active-link": "")} to={"/basket"}> Basket </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default CategoryList;
