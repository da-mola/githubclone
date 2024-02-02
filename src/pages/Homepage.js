import { Link } from "react-router-dom";
import Profile from "../components/profile/Profile"
import RepositoryCard from "../components/repository-card/RepositoryCard";
import Header from "../components/header/Header";
import { useSelector } from "react-redux";
import './Homepage.scss';

export default function Homepage() {
    const repositoriesData= useSelector(state =>  state.repositoriesData);
        return(
            <div className= "homePage">
                <Header/>
                <Profile/>
                <div className= "homepageRepos">
                            {Array.isArray(repositoriesData) && repositoriesData.length !== 0  ?
                             repositoriesData.slice(0,4).map(repo => (
                            <RepositoryCard
                                key={repo.id}
                                repoData={repo}
                            />  
                            )) : "No repos available"}                     
                </div>
                <Link to="/all-repositories">
                        <div className="view"><strong>View All Repositories</strong></div>
                    </Link>
            </div>
        )
}