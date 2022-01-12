import "./App.css";
import { EmployeeList } from "../EmployeeList";
import { EmployeeSearch } from "../EmployeeSearch";
import { useEmployees } from "../useEmployees";
import { EmployeeItem } from "../EmployeeItem";
import { EmployeeButton } from "../EmployeeButton";
import { Modal } from "../Modal";
import { EmployeeForm } from "../EmployeeForm";

function App() {
  const {
    searchedEmployees,
    setSearch,
    openModal,
    setOpenModal,
    createEmployee,
    deleteEmployee,
  } = useEmployees();

  return (
    <div className="App">
      <header className="App-header">
        <EmployeeSearch setSearch={setSearch} />
      </header>
      <main className="App-main">
        <EmployeeList
          searchedEmployees={searchedEmployees}
          render={(employee: any) => (
            <EmployeeItem
              key={employee._id}
              name={employee.name}
              email={employee.email}
              telephone={employee.telephone}
              img={employee.img}
              id={employee._id}
              deleteEmployee={deleteEmployee}
            />
          )}
        />
        <EmployeeButton openModal={openModal} setOpenModal={setOpenModal} />
      </main>
      {openModal && (
        <Modal>
          <EmployeeForm createEmployee={createEmployee} />
        </Modal>
      )}
    </div>
  );
}

export default App;
