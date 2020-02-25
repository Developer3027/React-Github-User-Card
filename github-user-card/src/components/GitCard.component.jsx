import React from 'react';



const Gitcard = (props) => {
    return(
        <div className="cardBase">
            <div className="gitCard">
                <h2>{props.user.login}</h2>
                <img className="gitCardImg" src={props.user.avatar_url} alt="pic"></img>
                <p>{`Bio: ${props.user.bio}`}</p>
                <div className="gitCardRow">
                    <p>{`Followers: ${props.user.followers}`}</p>
                    <p>{`Following: ${props.user.following}`}</p>
                </div>
                <p>{`Location: ${props.user.location}`}</p>
            </div>
        </div>
    );
}


export default Gitcard