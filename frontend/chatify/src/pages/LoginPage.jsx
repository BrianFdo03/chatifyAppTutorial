import React from "react";
import { useAuthStore } from "../store/useAuthStore";

function LoginPage() {
  const { authUser, isLoading, isLoggedIn, login, logout } = useAuthStore();

  console.log("isLoggedIn: ", isLoggedIn);
  console.log("isLoading: ", isLoading);
  return (
    <>
      <div className="z-10">
        <p>LoginPage</p>
        <button className="btn btn-primary" onClick={login}>
          {" "}
          Login Button{" "}
        </button>
        <br /> <br />
        {/* <button className="btn btn-primary">Login Button</button> */}
        <button className="btn btn-secondary" onClick={logout}>
          {" "}
          Logout Button{" "}
        </button>
        <br />
        {/* <button className="btn btn-secondary">Logout Button</button> */}
      </div>
    </>
  );
}

export default LoginPage;
