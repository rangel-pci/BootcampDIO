import { useEffect, useState } from "react";

export default function useApp(){
    const [user, setUser] = useState({});
    const [searchUserName, setSearchUserName] = useState(null);

    useEffect(() => {
        if(searchUserName){
            getUser(searchUserName).then(data => {
                setUser(data)
            });
        }
    }, [searchUserName])

    const handleSearchUser = (userName) => {
        setSearchUserName(userName);
    }

    const getUser = async (username) => {
        const data = await fetch('https://api.github.com/users/' + username)
        const res = await data.json();

        console.log(res);
        return {
            avatar_url: res.avatar_url,
            name: res.name,
            username: res.login,
            location: res.location,
            site: res.blog,
            followers: res.followers,
            following: res.following,
            public_repos: res.public_repos,
        };
    }

    return {
        user,
        handleSearchUser
    }
}