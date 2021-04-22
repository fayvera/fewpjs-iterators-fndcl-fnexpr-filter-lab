// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter( n => 
        n.toLowerCase() === name.toLowerCase() 
    )
}

function fuzzyMatch(drivers, name) {
    return drivers.filter (n =>
        n.charAt(0) === name.charAt(0)
    )
}

function matchName(drivers, string) {
    return drivers.filter( n => 
        n.name === string)
}

