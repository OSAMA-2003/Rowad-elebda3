'use client';

import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Smile,
  Layers,
  Wrench,
  Sparkles,
  Store,
  Award,
  Shapes,
  Signpost,
  Gem,
  DraftingCompass,
  Clock,
  Palette,
  Cpu,
  Globe,
  Utensils,
  Building2,
  Building,
  Hotel,
  Stethoscope,
  ShoppingBag,
  Calendar,
  Printer,
  Flag,
  Eye,
  Tag,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Phone,
  MapPin,
  Map,
  ExternalLink,
  Send,
  X,
  Menu,
  FileCheck,
  Zap,
  HelpCircle,
} from 'lucide-react';

const iconMap = {
  // Stats
  verified_user: ShieldCheck,
  task_alt: CheckCircle2,
  sentiment_satisfied: Smile,
  category: Layers,
  engineering: Wrench,

  // Services
  festival: Sparkles,
  storefront: Store,
  layers: Layers,
  workspace_premium: Award,
  format_shapes: Shapes,
  signpost: Signpost,

  // Features / Why Us
  diamond: Gem,
  architecture: DraftingCompass,
  timer: Clock,
  design_services: Palette,
  precision_manufacturing: Cpu,
  public: Globe,

  // Industries
  restaurant: Utensils,
  business: Building2,
  location_city: Building,
  hotel: Hotel,
  local_hospital: Stethoscope,
  local_mall: ShoppingBag,
  event: Calendar,

  // Other Common Keys
  print: Printer,
  flag: Flag,
  visibility: Eye,
  folder_special: Tag,
  arrow_back: ArrowLeft,
  arrow_forward: ArrowLeft,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  phone: Phone,
  call: Phone,
  location_on: MapPin,
  schedule: Clock,
  map: Map,
  close: X,
  menu: Menu,
  send: Send,
  check_circle: CheckCircle2,
  check: CheckCircle2,
  zap: Zap,
  file_check: FileCheck,
};

export default function LucideIcon({ name, className = 'w-6 h-6', ...props }) {
  if (!name) return null;

  // If name is already a React component / element
  if (typeof name === 'function' || React.isValidElement(name)) {
    const Component = name;
    return <Component className={className} {...props} />;
  }

  const normalized = String(name).toLowerCase().trim();
  const IconComponent = iconMap[normalized] || iconMap[normalized.replace(/-/g, '_')] || Sparkles;

  return <IconComponent className={className} {...props} />;
}
