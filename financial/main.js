import { validate } from "./validate.js";
import { preProcessing } from "./preProcessig.js";
import { ratings } from "./ratings.js";
import { checkAlreadyExists } from "./checkExist.js";
import { reviews } from "./review.js";

function accountCreation(){
    validate();
    checkAlreadyExists();
    preProcessing();
    reviews();
    ratings();
}
accountCreation();