import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="p-6">
      <h1>Dashboard</h1>
      <h2>Xin chào </h2>
      <button onClick={handleLogout} className="mt-4 p-2 bg-red-500 text-white">
        Đăng xuất
      </button>
    </div>
  );
};

export default Dashboard;
