const { exportDefaultSpecifier } = require("babel-types");
// Code your solution here


function findMatching(drivers,driverName){
    let matchedDrivers=[]; 
    drivers.filter(function (driver){
        if(driver.toLowerCase() === driverName.toLowerCase()){
            matchedDrivers.push(driver); 
        }
    });
   return matchedDrivers;
}


function fuzzyMatch(drivers,driverName){
    let matchedDrivers=[];
    drivers.filter(driver => {
        if(driver[0].toLowerCase() === driverName[0].toLowerCase()){
            matchedDrivers.push(driver);
        }
    });
    return matchedDrivers;

}


function matchName(drivers,driverName){
    let matchedDrivers=[];
    drivers.filter(driver => {
        if(driver.name.toLowerCase() === driverName.toLowerCase()){
            matchedDrivers.push(driver);
        }
    });
    return matchedDrivers;

}