import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [mail, setMail] = useState("");
  const [numero, setNumero] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setApellido(paciente.apellido);
      setDni(paciente.dni);
      setMail(paciente.mail);
      setNumero(paciente.numero);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const ramdon = Math.random().toString(36).substr(2);
    const fecha2 = Date.now().toString(36);
    return ramdon + fecha2;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validando el formulario
    if ([nombre, apellido, dni, mail, numero, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    //objeto de pacientes
    const objetoPaciente = {
      nombre,
      apellido,
      dni,
      mail,
      numero,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //Editando el Registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //Nuevo Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //reiniciando los valores del formulario

    setNombre("");
    setApellido("");
    setDni("");
    setMail("");
    setNumero("");
    setFecha("");
    setSintomas("");
  };
  return (
    <div className="md:w-1/2  lg:w-2/5">
      <div className="font-black text-3xl text-center">
        Seguimientos Pacientes
      </div>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error mensaje="Por favor llenar todos los campos" />}
        <div className="mb-5">
          <label
            className="block text-gray-800 uppercase font-bold"
            htmlFor="nombre"
          >
            Nombre del Paciente
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Nombre"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-800 uppercase font-bold"
            htmlFor="apellido"
          >
            Apellido del Paciente
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Apellido"
            id="apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-800 uppercase font-bold"
            htmlFor="documento"
          >
            Documento de identidad del Paciente
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Documento de Identidad"
            id="documento"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-800 uppercase font-bold"
            htmlFor="correo"
          >
            Correo Electronico Del Paciente
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email"
            placeholder="E-Mail"
            id="correo"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-800 uppercase font-bold"
            htmlFor="numero"
          >
            Numero telefonico Del Paciente
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text"
            placeholder="Numero"
            id="numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-800 uppercase font-bold"
            htmlFor="fecha"
          >
            Fecha de Ingreso
          </label>
          <input
            className="border-2 w-full p-2 mt-2 rounded-md"
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-gray-800 uppercase font-bold"
            htmlFor="sintomas"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            id="sintomas"
            placeholder="Describe los Sintomas del Paciente"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-all"
          value={paciente.id ? "Editar paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
