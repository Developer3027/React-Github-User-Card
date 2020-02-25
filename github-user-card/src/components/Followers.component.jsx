import React from 'react';



const Followers = (props) => {
    return(
        <div className="followBase">
        {props.follower.map(user => {
            return (
                <div>
                <div className="gitCardFollow">
                    <a href={user.html_url}>
                    <h3>{user.login}</h3>
                    <img className="gitCardImgFollow" 
                    key={user.id}
                    src={user.avatar_url} 
                    alt={user.login} />
                    <small>{user.id}</small>
                    </a>
                </div>
                </div>
            );
        })}
        </div>
        
    );
}


export default Followers