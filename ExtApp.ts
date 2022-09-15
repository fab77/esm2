// import { Box, Hammer, Plant } from 'esmtest';

import { Plant } from "esm1";
import { Hammer} from "esm1";
import { Box } from "esm1";

const b = new Box("studio");


const hammer = new Hammer("green");
const plant = new Plant("green");

b.addObject(hammer);
b.addObject(plant);