import { FC } from "react";
import { iEmployee } from "../@Types";
import "./EmployeeList.css";

const EmployeeList: FC<{
  searchedEmployees: Array<any>;
  render: (employee: iEmployee) => JSX.Element;
}> = ({ searchedEmployees, render }) => {
  return (
    <section className="EmployeeList">{searchedEmployees.map(render)}</section>
  );
};

export { EmployeeList };
