export default function Button({ className = '', title, ...rest}){
    return(
        <button className={className} {...rest} >
            {title}
        </button>
    )
}