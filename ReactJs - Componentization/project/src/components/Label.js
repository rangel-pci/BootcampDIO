export default function Label({ title, value }){
    return (
        <>
            <span className="label-name">{title}</span>
            <span className="label-value">{value}</span>
        </>
    )
}