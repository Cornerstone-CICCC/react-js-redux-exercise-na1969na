import { useSelector, useDispatch } from "react-redux";
import { increment, setFirstname, setLastname } from "./UserSlice";

type UserState = {
  user: {
    firstname: string;
    lastname: string;
    age: number;
  };
};

const User = () => {
  const user = useSelector((state: UserState) => state.user);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div>
      <p>{user.age}</p>
      <button onClick={handleIncrement}>Increment Age</button>
      <div>
        <input
          type="text"
          value={user.firstname}
          onChange={(e) => dispatch(setFirstname(e.target.value))}
          placeholder="Firstname"
        />
        <input
          type="text"
          value={user.lastname}
          onChange={(e) => dispatch(setLastname(e.target.value))}
          placeholder="Lastname"
        />
      </div>
    </div>
  );
};

export default User;
