import { URLS } from "@/app/lib/types/urls";

interface IProps {
  title: string;
  href: string;
}

export const headerMenuItems: IProps[] = [
  {
    title: "صفحه اصلی",
    href: URLS.home,
  },
  {
    title: "محصولات",
    href: URLS.product,
  },
  {
    title: "وبلاگ",
    href: URLS.blog,
  },
  {
    title: "فروشگاه",
    href: URLS.shopping,
  },
  {
    title: "درباره ما",
    href: URLS.aboutUs,
  },
  {
    title: "تماس با ما",
    href: URLS.contactUs,
  },
];
