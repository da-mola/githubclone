import { Link } from "react-router-dom";
import RepositoryCard from "../components/repository-card/RepositoryCard";
import { useSelector } from "react-redux";
import './AllRepositories.scss';


export default function AllRepositories() {
    const userData = useSelector(state => state.userData);
    const repositoriesData= useSelector(state =>  state.repositoriesData);

        return(
            <div className= "allReposPage">
                <h1>All Repositories</h1>
                    <div className="reposHeader">
                        <div>
                        <img src= {userData.avatar_url} alt="" className="repoAvatar"></img>
                        </div>
                        <div id="detailsUserName">
                            <Link to="/">
                            <h1>{userData ? userData.name : "No name available"}</h1>
                            </Link>
                        </div>
                    </div>
                <div className= "allRepos">
                    {Array.isArray(repositoriesData) && repositoriesData.length !== 0  ?
                        repositoriesData.map(repo => (
                        <RepositoryCard
                            key={repo.id}
                            repoData={repo}
                        />  
                        )) : "No repos available"
                    }     
                </div>   
            </div>
        )
}