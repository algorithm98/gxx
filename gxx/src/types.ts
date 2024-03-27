type registerErrorType = {
    email? : string;
    password?: string;
    name?  : string;
    mobile?  : string;
}


type loginErrorType = {
    email? : string;
    password?: string;
}

type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };