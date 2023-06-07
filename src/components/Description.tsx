
export function Description(props:{
    className?: string;conteudo: string; nome: string
}){
    return(
       <>
       <div className='pb-6'>
            <p className="text-lg font-semibold">
                {props.nome}
            </p>
            <p className="border border-solid border-b-stone-950 text-gray-600">
                {props.conteudo}
            </p>
        </div>
       </> 
    );
}