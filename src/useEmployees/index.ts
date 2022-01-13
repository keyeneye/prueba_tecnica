/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
const urlBase = "https://prueba-tecnica-brive.herokuapp.com/api/employee/";

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
    Swal.fire({
      title: "Cargando...",
      backdrop: `rgba(0,0,123,0.4) left-top no-repeat`,
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });
    try {
      await axios.get(urlBase).then((response) => {
        const { data } = response;
        setEmployees(data.employee.filter((info: any) => info.state));
        Swal.close();
        return { response };
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrio un error al conectarse a la BD",
        confirmButtonColor: "#f58840",
        confirmButtonText: "Entendido",
      });
      return error;
    }
  };

  const createEmployee = async (
    name: any,
    email: any,
    telephone: any,
    file: any
  ) => {
    Swal.fire({
      title: "Cargando...",
      backdrop: `rgba(0,0,123,0.4) left-top no-repeat`,
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("telephone", telephone);
    formData.append("img", file);
    await axios
      .post(urlBase, formData)
      .then((response) => {
        const { data } = response;
        setEmployees([...employees, data.employee]);
        Swal.close();
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: data.msg,
          confirmButtonColor: "#f58840",
          confirmButtonText: "Entendido",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrio un error al conectarse a la BD",
          confirmButtonColor: "#f58840",
          confirmButtonText: "Entendido",
        });
        return error;
      });
  };

  const deleteEmployee = async (id: string, name: string) => {
    const res = await Swal.fire({
      title: `Seguro que quieres eliminar al empleado "${name}"?`,
      showDenyButton: true,
      confirmButtonText: "Eliminar",
      denyButtonText: "No eliminar",
      denyButtonColor: "#f58840",
      confirmButtonColor: "#cd1818",
      reverseButtons: true,
      icon: "warning",
    });
    if (res.isConfirmed) {
      Swal.fire({
        title: "Cargando...",
        backdrop: `rgba(0,0,123,0.4) left-top no-repeat`,
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });
      try {
        await axios.delete(urlBase + id).then((response) => {
          getEmployees();
          Swal.close();
          Swal.fire({
            icon: "success",
            title: "Exito",
            text: response.data.msg,
            confirmButtonColor: "#f58840",
            confirmButtonText: "Entendido",
          });
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrio un error al conectarse a la BD",
          confirmButtonColor: "#f58840",
          confirmButtonText: "Entendido",
        });
      }
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
