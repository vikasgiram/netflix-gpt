import { useDispatch, useSelector } from "react-redux";
import { removeUser, setSearchPage } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchPage= useSelector(state=>state.user.searchPage);

  const handleLogout =() =>{
    dispatch(removeUser());
    navigate('/');
  }

  const handleSearch = () => {
    dispatch(setSearchPage());
    if(searchPage)
      navigate('/search');
    else
     navigate('/browse');
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
            <button onClick={handleSearch} className="px-4 py-2 bg-purple-700 rounded-lg mx-6">{searchPage? 'Search': "Home"}</button>
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
