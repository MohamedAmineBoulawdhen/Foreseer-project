import { NavLink, Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const Navigation = useNavigate();
  console.log(Navigation);
  return (
    <div>
      <div className="flex justify-between">
        <NavLink
          to="/?page=1&pageSize=10&followers=1000&engagementRate=0&category="
          className={({ isActive }) =>
            isActive
              ? "bg-blue-300 text-white font-semibold py-2 px-4 rounded pointer-events-none"
              : "g-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          }
        >
          Traders
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive
              ? "bg-blue-300 text-white font-semibold py-2 px-4 rounded pointer-events-none"
              : "hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          }
        >
          News
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
