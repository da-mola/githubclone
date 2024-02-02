import { useSelector } from "react-redux";
import FollowersCard from "./followers-card/FollowersCard";
import "./Profile.scss";

export default function Profile(){
    const userData = useSelector(state => state.userData);

    return(
        <div className= "profile">
                <div className = "row"> 
                    <div className ="column-1">
                        <img src= {userData.avatar_url} alt="" className="profilePicture"></img> 
                    </div>
                    <div className ="column-2">
                        <FollowersCard
                        title="Followers"
                        value={userData.followers}/>
                    </div>
                    <div className ="column-2">
                    <FollowersCard
                        title="Following"
                        value={userData.following}/>
                    </div>
                    <div className ="column-2">
                        <FollowersCard 
                        title="Location"
                        value={userData.location}/>
                    </div>
                </div>
                <div>
                <h2>{userData ? userData.name : "No name available"}</h2>
                    <p>No bio available</p>
                </div> 
             </div>
    )

}

      


       
