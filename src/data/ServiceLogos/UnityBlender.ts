import { Author, getCredit } from "../credits";
import { IBrand } from "../type";

export const UnityBlender: IBrand = {
  name: "UnityBlender",
  logos: [
    {
      url: "https://raw.githubusercontent.com/Ender-Wiggin2019/ServiceLogos/main/UnityBlender/UnityBlenderT.png",
      credit: getCredit(Author.SAWARATSUKI),
      type: "default",
    },
  ],
};
