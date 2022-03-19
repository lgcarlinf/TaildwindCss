import { useEffect } from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const handleDelete = () => {
    const resp = confirm("Deseas eliminar este paciente?");
    if (resp) {
      eliminarPaciente(paciente.id);
    }
  };

  return (
    <div className="mt-5 bg-white shadow-md mx-5 px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{paciente.name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{paciente.owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{paciente.alta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-500 hover:bg-indigo-700 text-white font-bold uppercase rounded-md text-sm"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold uppercase rounded-lg text-sm"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
