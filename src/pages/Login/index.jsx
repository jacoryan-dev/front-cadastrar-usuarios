import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";
import Header from "../../components/header";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      // Enviar os dados do formulário para a API
      const {data:token} = await api.post("/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });

      localStorage.setItem("token", token);

      alert("Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      alert("Senha ou e-mail incorretos:", error);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center bg-blue-100 p-4">
        <div className="w-full max-w-md bg-white border border-gray-50 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl text-center font-bold mb-6">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            Entrar
          </button>
        </form>
        <Link
          to="/cadastro"
          className="block text-center mt-4 text-sm text-blue-500 hover:underline"
        >
          Não tem uma conta? Cadastre-se
        </Link>
      </div>
      </main>
    </div>
  );
}

export default Login;
