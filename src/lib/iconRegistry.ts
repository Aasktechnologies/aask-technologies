import {
  Droplet,
  Wind,
  Train,
  Car,
  Wrench,
  Shield,
  Users,
  Award,
  Globe,
  Target,
  Eye,
  Heart,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Play,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
  Calendar,
  Building2,
  ArrowUpRight,
} from "lucide-react";

export const iconRegistry = {
  // Services
  Droplet,
  Wind,
  Train,
  Car,
  Wrench,

  // About/Features
  Shield,
  Users,
  Award,
  Globe,
  Target,
  Eye,
  Heart,

  // Contact
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,

  // Navigation/UI
  ArrowRight,
  Play,
  Menu,
  X,

  // Social
  Facebook,
  Twitter,
  Linkedin,
  Instagram,

  // Projects
  Calendar,
  Building2,
  ArrowUpRight,
};

export type IconName = keyof typeof iconRegistry;

export const getIcon = (iconName: string) => {
  return iconRegistry[iconName as IconName] || Droplet;
};
