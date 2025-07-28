import { useEffect, useState } from "react";
import api from "../../services/api";
import Header from "../../components/header";

function Dashboard() {
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    async function loadUsers() {
      try {
        const token = localStorage.getItem("token");

        const response = await api.get("/listar-usuarios", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const {
          data: { users },
        } = response;

        setAllUsers(users);
      } catch (error) {
        alert("Erro ao carregar usuários. Tente novamente mais tarde.", error);
      }
    }
    loadUsers();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-blue-100 p-4">
      <div className="w-full max-w-lg bg-white border border-gray-50 p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl text-center font-bold mb-6 ">Lista de Usuários</h1>
      <table className="min-w-full border border-white rounded-lg divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nome
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              E-mail
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {allUsers &&
            allUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-blue-950 font-medium">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-blue-700">
                  {user.email}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
      </main>
    </div>
  );
}

export default Dashboard;
