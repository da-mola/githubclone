import { useDispatch } from "react-redux";
import { useState } from "react"
import './SearchForm.scss';
import { clearUserData, setUserData } from "../../../redux/actions/action";
import { setRepositoriesData } from "../../../redux/actions/action";

export default function SearchForm (){
        const [searchValue, setSearchValue] = useState("");
        const dispatch = useDispatch();

        const handleSearch = async (e) => {
                e.preventDefault();

                try {
                // fetch user data using the API endpoint
                const userDataResponse = await fetch(`https://api.github.com/users/${searchValue}`);
                const userData = await userDataResponse.json();

                const repositoriesDataResponse = await fetch(`https://api.github.com/users/${searchValue}/repos`);
                const repositoriesData = await repositoriesDataResponse.json();
                
                //save userData to the redux store
                dispatch(setUserData(userData));
                //save repositoriesData to the redux store
                dispatch(setRepositoriesData(repositoriesData));


                // fetch repositories data using the API endpoint
                } catch(error) {
                console.error(error);

                // if error occurs, clear the existing data from the store.
                dispatch(clearUserData);
                }
        }

    return(
            <form className="searchBar" onSubmit={handleSearch}>
                <input type="text" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} placeholder="Search"/>
            </form> 
        )
}