import { FunctionComponent } from 'react';
import { LayoutProps } from '../../@types/layoutProps.type';
export const siteTitle = 'Julian Palomo';

const Layout: FunctionComponent = ({ children, home }: LayoutProps) => (
  <section>{children}</section>
);

export default Layout;
