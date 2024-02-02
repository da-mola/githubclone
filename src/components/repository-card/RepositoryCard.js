import { Link } from 'react-router-dom';
import './RepositoryCard.scss';

export default function RepositoryCard({ repoData }) {
    function calculateDaysAgo(lastUpdateDate) {
        const now = new Date();
        const lastUpdate = new Date(lastUpdateDate);
        const timeDifferenceInMilliseconds = now - lastUpdate;
        const timeDifferenceInDays = Math.floor(timeDifferenceInMilliseconds / (1000 * 60 * 60 * 24));
        return timeDifferenceInDays;
    }
      
    return(
        <div className="container">
            <h4 className="repositoryCardName">
                    <Link to={`/repository/${repoData.name}`}>
                    {repoData.name}
                    </Link>
                </h4>
            <p className="repositoryCardDescription">
                {repoData.description}
            </p>
            <p className="repositoryCardIcons">
                <span>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                        <path fill="#fff" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                    </svg>
                    &nbsp;
                    <strong>{repoData.stargazers_count}</strong>
                    &nbsp;
                </span>
                <span>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-star mr-2">
                        <path fill="#fff" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                    </svg>
                    &nbsp;
                    <strong>{repoData.forks_count}</strong>
                    &nbsp;
                </span>
                <span> Updated {calculateDaysAgo(repoData.updated_at)} days ago</span>
            </p>
        </div>
    ); 
}
