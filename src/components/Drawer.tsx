import { Children } from "react";

type liProps = {
  children: React.ReactNode;
};
/*
function SiderbarItens({ children }: liProps) {
  return ();
}

<div >
      
</div>
*/
export function DrawerRoot({ children }: liProps) {
  return (
    <div className="hidden md:block drawer-side bg-secondary w-80">
      <ul className="menu p-4 w-80  h-screen  text-base-content">{children}</ul>
    </div>
  );
}
