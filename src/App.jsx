import React, { useState } from "react";
import { useSelector } from "react-redux";

const App = () => {

 const {users} = useSelector((state) => state.userReducer);
  return (
    <div className="p-5">
      <h1 className="text-center text-2xl bg-red-100 rounded-md mb-3 p-2">User List</h1>
      <ul className="text-center border-2 border-cyan-600 rounded-md bg-slate-200 flex flex-col gap-2">
        {users.map((user) => <li className="text-xl font-semibold" key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default App;
