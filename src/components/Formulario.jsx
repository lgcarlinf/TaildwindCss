import { useState, useEffect } from "react";
import { validateInput } from "./validate";
import Error from "./Error";
const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    id: "",
    name: "",
    owner: "",
    email: "",
    alta: "",
    sintomas: "",
  });

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateInput(input));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const objInput = {
      name: input.name,
      email: input.email,
      owner: input.owner,
      alta: input.alta,
      sintomas: input.sintomas,
    };

    if (paciente.id) {
      objInput.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id == paciente.id ? objInput : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      objInput.id = generarId();
      setPacientes([...pacientes, objInput]);
    }
    setInput({
      id: "",
      name: "",
      owner: "",
      email: "",
      alta: "",
      sintomas: "",
    });
  };

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setInput({
        id: paciente.id,
        name: paciente.name,
        owner: paciente.owner,
        email: paciente.email,
        alta: paciente.alta,
        sintomas: paciente.sintomas,
      });
    }
  }, [paciente]);

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 lg:mx-0">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        action=""
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre de la mascota"
            value={input.name}
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <Error />}
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre del propietario"
            value={input.owner}
            name="owner"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.owner && <Error />}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="Email Contacto Propietario"
            value={input.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <Error />}
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date"
            value={input.alta}
            name="alta"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.alta && <Error />}
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            className="w-full"
            name="sintomas"
            value={input.sintomas}
            id="sintomas"
            placeholder="Describe los sintomas"
            rows="3"
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.sintomas && <Error />}
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
