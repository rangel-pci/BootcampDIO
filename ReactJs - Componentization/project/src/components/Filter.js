import Button from "./Button";

export default function Filter({title, selected, ...rest}){
    return (
        <Button
            className={'filter-button ' + (selected ? 'selected' : '')}
            {...rest}
            title={title}
        />
    )
}