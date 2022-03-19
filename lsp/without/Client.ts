import {Ostrich} from "./Ostrich";
import {Duck} from "./Duck";

const duckObj = new Duck();
duckObj.fly();

const ostrichObj = new Ostrich();
ostrichObj.fly(); // Violation of LSP principle
