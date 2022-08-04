import Filter from './Filter';
import Repositorie from './Repositorie';
import useRepositories from '../hooks/useRepositories';

export default function Repositories({ user }){
    const { 
        filterType,
        setFilterType,
        repos
    } = useRepositories(user);

    return (
        <div className="repositories">
            <p className="filter-title">Filter By:</p>
            <div className="filter">
                <Filter
                    title="User Repos"
                    onClick={() => setFilterType('repos')}
                    selected={filterType === 'repos'}
                />
                <Filter
                    title="Starred Repos"
                    onClick={() => setFilterType('starred')}
                    selected={filterType === 'starred'}
                />
            </div>
            <div className="repositories-container">
            { repos.length > 0 &&
                repos.map((repo) => {
                    return (
                        <Repositorie
                            key={repo.id}
                            name={repo.name}
                            fullname={{fullname: repo.full_name, url: repo.url}}
                            description={repo.description}          
                        />
                    )
                })
            }
            </div>
        </div>
    )
}