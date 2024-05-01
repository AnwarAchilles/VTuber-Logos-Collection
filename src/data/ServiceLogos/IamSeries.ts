import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const IamSeries: IBrand = {
  name: "IamSeries",
  logos: [
    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/IamSeries/IamProgrammer!.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },

    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/IamSeries/IamProgrammerEnglish.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "english",
    },

    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/IamSeries/IamDesigner!.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "designer"
    },

    {
      url: "https://raw.githubusercontent.com/SAWARATSUKI/ServiceLogos/main/IamSeries/IamDesigner!English.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "designer(EN)"
    },

  ],
};
