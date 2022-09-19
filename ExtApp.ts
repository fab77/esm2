// import { Box, Hammer, Plant } from 'esmtest';

import { Plant } from "esm1";
import { Hammer} from "esm1";
import { Box } from "esm1";

const b = new Box("studio");


const hammer = new Hammer("green");
const plant = new Plant("green");

b.addObject(hammer);
b.addObject(plant);

await b.getFile("http://skies.esac.esa.int/Herschel/normalized/PACS_hips160//Norder8/Dir40000/Npix47180.fits").then((res) => console.log(res) )
