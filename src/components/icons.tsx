import { IconType } from "@/types";
import {
  BedDouble,
  Bath,
  Sparkle,
  Scaling,
  MoveRight,
  Menu,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Blocks,
  Search,
  LucideProps,
} from "lucide-react";

export const Icons = {
  bedDouble: BedDouble,
  bath: Bath,
  scaling: Scaling,
  moveRight: MoveRight,
  sparkle: Sparkle,
  menu: Menu,
  facebook: Facebook,
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  blocks: Blocks,
  search: Search,
};

interface IconProps extends LucideProps {
  name: IconType;
}

export function Icon({ name, ...props }: IconProps) {
  const Icon = Icons[name];
  return <Icon {...props} />;
}
