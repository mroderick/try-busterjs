/*jslint evil:false, sloppy:false, undef:true, white:true, plusplus:true, node:true */

var config = module.exports;

config["Try BusterJS tests"] = {
    rootPath: "../",
    env: "browser",
    sources: [
        "src/try-buster.js"
    ],
    tests: [
        "test/*-test.js"
    ]
};
