import { Icons } from "@/components/icons";

export type IconType = keyof typeof Icons;

export type SocialMedia = {
  icon: IconType;
  href: string;
};
