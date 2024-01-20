export interface IHeaderMenuItemsProps {
  $navOpen: boolean;
}

export interface IOverlay {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuData {
  header: {
    headerLogo: string;
    headerLogoAlt: string;
    label: string;
  };
  footer: {
    footerLogo: string;
    footerLogoAlt: string;
    label: string;
  };
  homeLink: string;
  address: {
    office: string;
    street: string;
    city: string;
  };
  contact: {
    title: string;
    phone: string;
    phoneLink: string;
    phoneLabel: string;
    email: string;
    emailLink: string;
    emailLabel: string;
  };
  social: {
    label: string;
    icon: string;
    link: string;
  }[];
  menu: {
    title: string;
    link: string;
    label: string;
  }[];
}

export interface IFooterMenuItemsProps {
  $navOpen: boolean;
}

export interface IOverlay {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface MenuData {
  footer: {
    footerLogo: string;
    footerLogoAlt: string;
    label: string;
  };
  header: {
    headerLogo: string;
    headerLogoAlt: string;
    label: string;
  };
  homeLink: string;
  address: {
    office: string;
    street: string;
    city: string;
  };
  contact: {
    title: string;
    phone: string;
    phoneLink: string;
    phoneLabel: string;
    email: string;
    emailLink: string;
    emailLabel: string;
  };
  social: {
    label: string;
    icon: string;
    link: string;
  }[];
  menu: {
    title: string;
    link: string;
    label: string;
  }[];
}
