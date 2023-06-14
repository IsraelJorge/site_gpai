import clsx from 'clsx';

type CardProps = {
  image: string;
  label: string;
  description?: string;
  variant?: 'default' | 'donate';
};

export function Card({
  image,
  label,
  description,
  variant = 'default',
}: CardProps) {
  return (
    <div
      className={clsx('card rounded-xl overflow-hidden bg-base-100 shadow-xl', {
        'w-64 h-72': variant === 'default',
        'w-36 h-40': variant === 'donate',
      })}
    >
      <figure
        className={clsx({
          'h-28': variant === 'donate',
          'h-20': variant === 'donate',
        })}
      >
        <img
          src={image}
          alt="Foto do Pet"
          className="hover:scale-125 transition-all w-full h-full object-cover"
        />
      </figure>
      <div
        className={clsx('card-body text-base-100 bg-secondary ', {
          'h-40 px-5 pt-5 pb-8': variant === 'default',
          'px-3 pt-3 pb-0': variant === 'donate',
        })}
      >
        <h2
          className={clsx('card-title cursor-pointer', {
            'text-center justify-center text-base': variant === 'donate',
          })}
        >
          {label}
        </h2>
        {variant === 'default' && <p>{description}</p>}
      </div>
    </div>
  );
}
