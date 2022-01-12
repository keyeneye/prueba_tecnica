import { FC } from "react";
import "./EmployeeSearch.css";

const EmployeeSearch: FC<{ setSearch: Function }> = ({ setSearch }) => {
  return (
    <input
      type="text"
      className="EmployeeSearch"
      placeholder="Buscar..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export { EmployeeSearch };
