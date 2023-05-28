
import Monetary from '../assets/monetary.png';
import Bed from '../assets/bed.png';
import Portion from '../assets/portion.png';
import Bath from '../assets/bath.png';

function selecionarCard(card: string){
    switch (card) {
        case "monetary":
            return Monetary;
            break;
        case "bed":
            return Bed;
            break;
        case "portion":
            return Portion;
            break;
        case "bath":
            return Bath; 
            break; 
        default:
            break;
    }}

export function CardDonate(props:{card: string; texto: string}) {
    
  return (
    <div className="card my-5 rounded-xl overflow-hidden bg-base-100 shadow-xl">
      <figure>
        <img
          src={selecionarCard(props.card)}
          alt="Gato"
          className="hover:scale-125 transition-all"
        />
      </figure>
      <div className="card-body text-base-100 bg-secondary px-5 pt-5 pb-8">
        <h2 className="card-title cursor-pointer justify-center">{props.texto}</h2>

      </div>
    </div>
  );
}
