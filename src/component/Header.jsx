import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout =() =>{
    dispatch(removeUser());
    navigate('/');
  }
  return (
    <div className="absolute bg-gradient-to-b from-black w-full z-50 flex justify-between">
      <img
        className="size-24 w-auto mx-40 my-4"
        src={LOGO_URL}
        alt=" logo"
      />
      {user && (
        <div className="flex text-white items-center mx-20 my-4 space-x-2">
          <div>
            <img
              className="w-10 h-10 rounded-full"
              src={user.profileUrl}
              alt="prfofilePic"
            />
            <p>{user.name}</p>
          </div>
          <button onClick={handleLogout} className="fa-solid fa-right-from-bracket p-5 text-3xl text-red-700"></button>
        </div>
      )}
    </div>
  );
};
export default Header;
