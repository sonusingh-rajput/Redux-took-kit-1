import { useDispatch, useSelector } from "react-redux";
import { userDelete } from "./store/reducers/userReducer";

const App = () => {
  const { users } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const deleteHandler = (index) => {
    dispatch(userDelete(index));
    console.log(index);
  };
  return (
    <div className="p-5">
      <h1 className="text-center text-2xl bg-red-100 rounded-md mb-3 p-2">
        User List
      </h1>
      <ul className="text-center border-2 border-cyan-600 rounded-md bg-slate-200 flex flex-col gap-2 p-5">
        {users.map((user, index) => (
          <li className="text-xl font-semibold" key={index}>
            {user.name}{" "}
            <span
              onClick={() => deleteHandler(index)}
              className="bg-red-500 px-2 py-1 rounded-md text-white cursor-pointer"
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
