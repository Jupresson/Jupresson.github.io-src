import { socialIcons } from "../icons";
import type { SocialLink } from "../../i18n/site";

export const desktopLink = (name: string, url: string): SocialLink => ({
  name,
  url,
  icon: socialIcons.github,
});

export const sourceCodeLink = (name: string, url: string): SocialLink => ({
  name,
  url,
  icon: socialIcons.github,
});

export const browserLink = (name: string, url: string): SocialLink => ({
  name,
  url,
  icon: socialIcons.itchIo,
});
