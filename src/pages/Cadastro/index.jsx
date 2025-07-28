import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";
import Header from "../../components/header";
function Cadastro() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await api.post("/cadastro", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error) {
      alert("Erro ao cadastrar:", error);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center bg-blue-100 p-4">
        <div className="w-full max-w-md bg-white border border-gray-50 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl text-center font-bold mb-6">Cadastro</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="password">Senha:</label>
              <input
                type="password"
                id="password"
                ref={passwordRef}
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
      </main>
    </div>
  );
}

export default Cadastro;