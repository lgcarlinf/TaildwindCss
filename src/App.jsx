import "./App.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState([]);

  const eliminarPaciente = (id) => {
    let pacientesQuedan = pacientes.filter((p) => p.id !== id);
    setPacientes(pacientesQuedan);
  };

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  return (
    <div className="container mx-auto mt-20  ">
      <Header />
      <div className="mt-12 md:flex ">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        {pacientes && pacientes.length > 0 ? (
          <ListadoPacientes
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        ) : (
          <div className="w-full lg:w-3/5 md:w-full md:h-screen md:overflow-y-scroll flex-col justify-center">
            <h2 className="font-black text-3xl text-center">
              No Hay Pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes y {""}
              <span className="text-indigo-600 font-bold">
                apareceran en este lugar
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
