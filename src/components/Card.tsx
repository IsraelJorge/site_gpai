import ImageCat from '../assets/gato-.jpg';

export function Card() {
  return (
    <div className="card w-64 my-5 rounded-xl overflow-hidden bg-base-100 shadow-xl">
      <figure>
        <img
          src={ImageCat}
          alt="Gato"
          className="hover:scale-125 transition-all"
        />
      </figure>
      <div className="card-body text-base-100 bg-secondary px-5 pt-5 pb-8">
        <h2 className="card-title cursor-pointer">Federico</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
}
