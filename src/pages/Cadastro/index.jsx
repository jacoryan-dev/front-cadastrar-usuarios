import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // lógica de cadastro
    // após o cadastro, redirecionar para a página de login
    navigate("/login");
  };

  return (
    <div className="mx-auto mt-4 max-w-md bg-white border  border-gray-50 p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl text-center font-bold mb-6">Cadastro</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-500"
        >
          Cadastrar
        </button>
      </form>
      <Link
        to="/login"
        className="block text-center mt-4 text-sm text-blue-500 hover:underline"
      >
        Já possui uma conta? Faça login
      </Link>
    </div>
  );
}

export default Cadastro;
