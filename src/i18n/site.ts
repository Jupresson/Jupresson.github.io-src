export const locales = ["en", "fi"] as const;

export type Locale = (typeof locales)[number];

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface DetailRow {
  label: string;
  value: string;
}

export interface ProjectCardData {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  path?: string;
  sourceUrl?: string;
}

export interface UiContent {
  siteTitle: string;
  nav: {
    home: string;
    projects: string;
    languageLabel: string;
  };
  footer: {
    availability: string;
  };
  buttons: {
    details: string;
    source: string;
    copiedEmail: string;
    viewMoreProjects: string;
    downloadCV: string;
    badges: string;
  };
}

export interface HomePageContent {
  kind: "home";
  metaTitle: string;
  hero: {
    name: string;
    taglineTemplate: string;
    introHtml: string;
    image: string;
    imageAlt: string;
  };
  moreAbout: {
    title: string;
    introHtml: string;
    summaryLabel: string;
    paragraphs: string[];
    showLessLabel: string;
  };
  featuredProjects: {
    title: string;
    items: ProjectCardData[];
  };
  skills: {
    title: string;
    rows: DetailRow[];
  };
  contact: {
    title: string;
    email: string;
    emailTitle: string;
    emailDescription: string;
    socialTitle: string;
    socialDescription: string;
    socialLinks: SocialLink[];
  };
}

export interface ProjectListPageContent {
  kind: "project-list";
  metaTitle: string;
  hero: {
    title: string;
    subtitle: string;
  };
  intro: string;
  items: ProjectCardData[];
}

export interface ProjectDetailPageContent {
  kind: "project-detail";
  metaTitle: string;
  hero: {
    title: string;
    titleClass?: string;
    subtitle: string;
    description: string;
    image: string;
    imageAlt: string;
    imageClass?: string;
  };
  story: {
    title: string;
    introHtml: string;
    summaryLabel: string;
    paragraphs: string[];
    showLessLabel: string;
  };
  details: {
    title: string;
    rows: DetailRow[];
  };
  video?: {
    title: string;
    embedUrl: string;
  };
  links?: {
    title: string;
    socialTitle: string;
    socialDescription: string;
    socialLinks: SocialLink[];
  };
  backLinkText: string;
}

export type SitePageContent =
  | HomePageContent
  | ProjectListPageContent
  | ProjectDetailPageContent;

export interface PageEntry<T extends SitePageContent = SitePageContent> {
  slug: string;
  content: Record<Locale, T>;
}

export function normalizePathname(pathname: string): string {
  if (!pathname) {
    return "/";
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const normalizedPathname = normalizePathname(pathname);

  if (normalizedPathname === "/fi" || normalizedPathname.startsWith("/fi/")) {
    return "fi";
  }

  return "en";
}

export function stripLocaleFromPathname(pathname: string): string {
  const normalizedPathname = normalizePathname(pathname);

  if (normalizedPathname === "/fi") {
    return "/";
  }

  const pathWithoutLocale = normalizedPathname.replace(/^\/fi(?=\/|$)/, "");
  return pathWithoutLocale || "/";
}

export function localizePath(pathname: string, locale: Locale): string {
  const canonicalPath = stripLocaleFromPathname(pathname);

  if (locale === "en") {
    return canonicalPath;
  }

  return canonicalPath === "/" ? "/fi" : `/fi${canonicalPath}`;
}

export function getLanguageSwitchPath(pathname: string, targetLocale: Locale): string {
  return localizePath(pathname, targetLocale);
}

export function formatTemplate(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    const value = values[key];
    return value === undefined ? match : String(value);
  });
}