import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const Streamloots: IBrand = {
  name: "Streamloots",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/Streamloots/Streamloots.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
