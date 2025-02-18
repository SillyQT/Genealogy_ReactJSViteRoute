import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1>Chào mừng đến với Dashboard</h1>
      <button onClick={handleLogout} className="mt-4 p-2 bg-red-500 text-white">
        Đăng xuất
      </button>
    </div>
  );
}
