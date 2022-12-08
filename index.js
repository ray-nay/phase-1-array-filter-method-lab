function findMatching(drivers, name) {
    //let driver;
    return drivers.filter(function(item){
        if (item === name) {
            return item
        } else{
            if (name.toLowerCase() === item.toLowerCase()) {
                return item
            }
        }
    })
    //return driver
}



function fuzzyMatch(drivers, query) {
   return drivers.filter(function(item) {
        return item.startsWith(query)
      //return item.slice(0, 1).indexOf(query.toLowerCase()) !== -1
    })
    //console.log(result)
  }

function matchName (drivers, name){
    return drivers.filter(function (driver) {
        return driver.name === name
    })
}