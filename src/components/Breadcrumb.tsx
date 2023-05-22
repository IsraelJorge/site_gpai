import { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';

type BreadcrumbProps = {
  children: React.ReactNode;
};

function BreadcrumbRoot({ children }: BreadcrumbProps) {
  return (
    <div className="text-sm breadcrumbs">
      <ul>{children}</ul>
    </div>
  );
}

function BreadcrumbItem({
  children,
  to,
  ...rest
}: BreadcrumbProps & LinkProps) {
  return (
    <li>
      <Link to={to} {...rest}>
        {children}
      </Link>
    </li>
  );
}

export const Breadcrumb = Object.assign(BreadcrumbRoot, {
  Item: BreadcrumbItem,
});
