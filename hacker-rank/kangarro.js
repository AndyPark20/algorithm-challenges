
//Two Kangarroos  and they both start at different poisition and velocity. 
    // speed = distance / time
    // Kangaroo 1: Total distance = (v1 X jumps) + x1
    // kangaroo 2: Total distance = (v2 X jumps) + x2
        // (v1 X jumps) + x1 = (v2 X jumps) + x2
            // (x2 - x1) / (v2 - v1)


const getFinalDistance = (x1, v1, x2, v2) => {

    return (x2 - x1) % (v1 - v2) === 0 ? 'YES' : 'NO';
}

console.log(getFinalDistance(0, 3, 4, 2));