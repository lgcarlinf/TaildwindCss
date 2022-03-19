import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="w-full lg:w-3/5 md:w-full md:h-screen md:overflow-y-scroll flex-col justify-center">
      <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      {pacientes &&
        pacientes.map((p, i) => (
          <Paciente
            key={p.id}
            paciente={p}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        ))}
    </div>
  );
};

export default ListadoPacientes;
