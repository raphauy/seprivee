export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface SocialLink {
  platform: "instagram" | "whatsapp" | "email";
  href: string;
  label: string;
}
