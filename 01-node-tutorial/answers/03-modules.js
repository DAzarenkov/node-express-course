const names = require("./04-names");
const util = require("./05-utils");
const items = require("./06-alternative-flavor");

console.log("Names: ", names.name1, names.name2);

console.log("Util:");
util();

console.log("Items: ", items.item1, items.item2);

require("./07-mind-grenade");
