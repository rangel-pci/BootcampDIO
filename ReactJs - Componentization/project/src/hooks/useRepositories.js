import { useEffect, useState } from "react";

export default function useRepositories(user){
    const [filterType, setFilterType] = useState('repos');
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        if(user.username){
            fetch(`https://api.github.com/users/${user.username}/${filterType}`)
            .then(res => res.json())
            .then((res) => {
                console.log(res);
    
                setRepos(res);
            })
        }
    }, [user, filterType])

    return {
        filterType,
        setFilterType,
        repos
    }
}