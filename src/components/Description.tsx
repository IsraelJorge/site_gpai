type DescriptionProps = {
  className?: string;
  label: string;
  content: string;
};

export function Description({ label, content }: DescriptionProps) {
  return (
    <div className="pb-6">
      <p className="text-lg font-semibold">{label}</p>
      <p className="border border-solid border-b-stone-950 text-gray-600">
        {content}
      </p>
    </div>
  );
}
