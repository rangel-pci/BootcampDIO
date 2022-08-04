export default function Repositorie({ name, fullname, description }){
    return (
        <div className="repositorie">
            <p className="name">{name}</p>
            <p className="fullname"><a href={fullname.url}>{fullname.fullname}</a></p>
            <p className="description">{description}</p>
        </div>
    )
}