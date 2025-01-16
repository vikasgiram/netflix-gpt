import { BG_URL } from "../utils/constants";
import Header from "./Header";
import Search from "./Search";

const SearchPage= () =>{

    return (
        <div>
            <Header/>
            <div className="brightness-50 absolute -z-10">
                <img src={BG_URL} alt="Background" />
            </div>
            <Search/>
         
        </div>
    )
}

export default SearchPage;