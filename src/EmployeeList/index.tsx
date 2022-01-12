import React, { FC } from "react";

const EmployeeList: FC<{ searchedEmployees: Array<any>; render: any }> = ({
  searchedEmployees,
  render,
}) => {
  return (
    <section className="EmployeeList">{searchedEmployees.map(render)}</section>
  );
};

export { EmployeeList };
