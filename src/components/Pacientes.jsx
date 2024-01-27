const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, apellido, dni, fecha, mail, numero, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas Eliminar Este Paciente?");

    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Apellido: {""}
        <span className="font-normal normal-case">{apellido}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Documento: {""}
        <span className="font-normal normal-case">{dni}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        E-Mail: {""}
        <span className="font-normal normal-case">{mail}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Numero: {""}
        <span className="font-normal normal-case">{numero}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Ingreso: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Pacientes;
