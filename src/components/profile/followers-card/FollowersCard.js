import './FollowersCard.scss';

export default function FollowersCard(props) {
    return(
        <div className= "FollowersCard">
            <div className='row'>
                <div className='left-column'>
                    {props.title}
                </div>
                <div className="line"></div>
                <div className='right-column'>
                    {props.value}
                </div>
            </div>
        </div>
    )
}
