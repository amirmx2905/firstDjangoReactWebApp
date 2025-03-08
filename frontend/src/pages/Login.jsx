import React from "react";
import Form from "../components/Form";

function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <Form route="api/token/" method="login" />
    </div>
  );
}

export default Login;
