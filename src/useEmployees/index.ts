/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
const urlBase = "http://localhost:8080/api/employee/";

function useEmployees() {
  const [employees, setEmployees] = useState<any>([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  let searchedEmployees = [];
  if (!(search.length > 0)) {
    searchedEmployees = employees;
  } else {
    searchedEmployees = employees
      .filter((employee: any) =>
        employee.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
      .filter((employee: any) => employee.state);
  }

  const getEmployees = async () => {
    try {
      await axios.get(urlBase).then((response) => {
        const { data } = response;
        console.log(data.employee);
        setEmployees(data.employee.filter((info: any) => info.state));
        // setEmployees(data.employee);
      });
    } catch (error) {
      return error;
    }
  };

  const createEmployee = async (
    name: any,
    email: any,
    telephone: any,
    file: any
  ) => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("telephone", telephone);
    formData.append("img", file);
    await axios
      .post(urlBase, formData)
      .then((response) => {
        const { data } = response;
        console.log(data.employee);
        // return data.employee;
        setEmployees([...employees, data.employee]);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  const deleteEmployee = async (id: string) => {
    try {
      await axios.delete(urlBase + id).then((response) => {
        console.log(response);
        getEmployees();
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return {
    employees,
    setEmployees,
    setSearch,
    searchedEmployees,
    getEmployees,
    createEmployee,
    deleteEmployee,
    openModal,
    setOpenModal,
  };
}

export { useEmployees };
