const os = require("os");
// console.log(os); // Complete infos about Operating system
console.log(os.arch()); // 32 or 64 bit?
console.log(os.freemem()); // free ram in bits
console.log(os.freemem() / Math.pow(1024, 3)); // free ram in GB
console.log(os.hostname());
console.log(os.platform());
console.log(os.userInfo());
