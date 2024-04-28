import { DownloadedLogos } from "./DownloadedLogos";
import { ProgrammingVTuberLogos } from "./ProgrammingVTuberLogos";
import { ServiceLogos } from "./ServiceLogos";
import { FindViaTwitterLogos } from "./brands";
import { IBrand } from "./type";

const BRANDS: IBrand[] = [...ProgrammingVTuberLogos, ...FindViaTwitterLogos, ...ServiceLogos, ...DownloadedLogos];

BRANDS.sort((a, b) => a.name.localeCompare(b.name));

export { BRANDS };
