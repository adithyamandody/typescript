console.log("hello world");
//explicit types
var firstnumber = 50;
var x = ["hello", 10];
//enums
var continents;
(function (continents) {
    continents[continents["North_america"] = 0] = "North_america";
    continents[continents["South_america"] = 1] = "South_america";
    continents[continents["Africa"] = 2] = "Africa";
    continents[continents["Europe"] = 3] = "Europe";
    continents[continents["Antartica"] = 4] = "Antartica";
    continents[continents["Australia"] = 5] = "Australia";
})(continents || (continents = {}));
;
var region = continents.Africa; //2
