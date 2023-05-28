const style = 'input-root flex items-center justify-between h-12 bg-gray-100 relative border-2  rounded-lg py-2 px-3 mb-5 font-light'

export function sel(props: {tipoInput: string; name: string; id: string; valor: (string  | readonly string[])[]; nomeOption: (string | readonly string[]);}){
    const i = 1;
    if(props.tipoInput == 'select'){
    return(
        <select name={props.name} id={props.id} className={style}>
                <option value={props.valor[0]}>{props.nomeOption[0]}</option>
                <option value={props.valor[1]}>{props.nomeOption[1]}</option>
                <option value={props.valor[2]}>{props.nomeOption[2]}</option>
                <option value={props.valor[3]}>{props.nomeOption[3]}</option>
                <option value={props.valor[4]}>{props.nomeOption[4]}</option>
            </select>
    )
    } else if (props.tipoInput == 'number'){
        return(
            <input 
            type="number" 
            name={props.name} 
            id={props.id}
            className='h-12 bg-gray-100 relative border-2  rounded-lg py-2 px-3 mb-5 font-light w-24'
            />
        )
    }
}

export function Inputselect(props: {tipoInput: string; name: string; id: string; valor: (string  | readonly string[])[]; nomeOption: (string | readonly string[]);}){

    return(
        <>
            {sel(props)}
        </>
    )
}