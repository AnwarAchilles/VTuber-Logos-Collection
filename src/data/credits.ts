import { ICredit } from "./type";

export enum Author {
  Aikoyori,
  AisuAsai,
  SAWARATSUKI,
  ENSO,
  hvpexe,
  FurkanKarabudak,
}
export const CREDITS: { [key in Author]: ICredit } = {
  [Author.Aikoyori]: {
    author: "Aikoyori",
    pk: "Aikoyori",
    twitter: "https://twitter.com/Aikoyori",
    github: "https://github.com/Aikoyori",
  },
  [Author.AisuAsai]: {
    author: "Aisu Asai",
    pk: "aisu-asai",
    twitter: "https://twitter.com/AisuAsai",
  },
  [Author.SAWARATSUKI]: {
    author: "SAWARATSUKI",
    pk: "sawaratsuki",
    twitter: "https://twitter.com/sawaratsuki1004",
    github: "https://github.com/SAWARATSUKI",
  },
  [Author.ENSO]: {
    author: "ENSO",
    pk: "enso",
    twitter: "https://twitter.com/Enso_exe",
  },
  [Author.hvpexe]: {
    author: "『Zenith』",
    pk: "hvpexe",
    github: "https://github.com/hvpexe",
  },
  [Author.FurkanKarabudak]: {
    author: "F u r k a n K a r a b u d a k",
    pk: "_FrkanKrabudak_",
    twitter: "https://twitter.com/_FrkanKrabudak_",
  },
};

export function getCredit(author: Author): ICredit {
  return CREDITS[author];
}
