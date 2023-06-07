import { BsFillPersonFill } from "react-icons/bs";
import { Button } from "./Button";
export function DrawerIten(props: {
        conteudo: string; image: string; info?: string;
    }){
    return(
        <li className="pb-2">
            <Button as="Link" variant='drawer' >
               <img src={props.image} alt={props.info}/>
               <Button.Label>{props.conteudo}</Button.Label>
            </Button>
        </li>
    );
}
