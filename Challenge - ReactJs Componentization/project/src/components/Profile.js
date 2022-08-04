import Label from "./Label";

export default function Profile({ user }){
    return (
        <div className="profile">
            <div className="info-container">
                <img src={user.avatar_url} alt="user avatar"/>
                <p>{user.name}</p>
                <div className="label">
                    <Label title="Username" value={user.username} />
                </div>
                <div className="label">
                    <Label title="Location" value={user.location} />
                </div>
                <div className="label">
                    <span className="label-name">Site:</span>
                    <span className="label-value">
                        <a href="rangelpereira.com">{user.site}</a>
                    </span>
                </div>                
            </div>
            <div className="info-container social">
                <div className="label social">
                    <Label title="Followers" value={user.followers} />
                </div>
                <div className="label social">
                    <Label title="following" value={user.following} />
                </div>
                <div className="label social">
                    <Label title="Public Repos" value={user.public_repos} />
                </div>
            </div>
        </div>
    )
}