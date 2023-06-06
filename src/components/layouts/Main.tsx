type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return <div className="w-full max-w-7xl mx-auto pt-16 px-4">{children}</div>;
}
