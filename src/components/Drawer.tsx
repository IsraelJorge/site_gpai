import { Button } from './Button';
import { Icon } from './Icon';

type DrawerRootProps = {
  children: React.ReactNode;
};

type DrawerItemProps = {
  label: string;
  iconName: string;
  to: string;
};

function DrawerRoot({ children }: DrawerRootProps) {
  return (
    <div className="hidden md:block drawer-side bg-secondary w-80">
      <ul className="menu p-4 w-80  h-screen  text-base-content">{children}</ul>
    </div>
  );
}

function DrawerItem({ label, iconName, to }: DrawerItemProps) {
  return (
    <li className="pb-2">
      <Button as="NavLink" to={to} variant="drawer">
        <Icon name={iconName} className="text-xl" size={20} />
        <Button.Label>{label}</Button.Label>
      </Button>
    </li>
  );
}

export const Drawer = Object.assign(DrawerRoot, {
  Item: DrawerItem,
});
