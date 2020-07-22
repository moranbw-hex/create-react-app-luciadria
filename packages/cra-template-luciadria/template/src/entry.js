import {setLicenseText} from  "@luciad/ria/util/License";
import developmentLicense from "./license/luciadria_development.txt";
setLicenseText(developmentLicense);

require("./index");