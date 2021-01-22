  
// import { capitalizeString } from "./importFiles";
import * as capitalizeStings from "importFiles";

console.log(capitalizeString("Hello!"));

const capitalizeString = (string) => {
    return string.chaAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString };

export const foo = "bar";
export const bar = "foo";

// fall back export
    import substract from "importFiles";

    substract(2, 12);