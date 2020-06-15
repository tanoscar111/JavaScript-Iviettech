var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    if (array[i] == 2) {
        console.log("array error");
        break;

    } else {
        for (let j = 2; j < Math.sqrt(array[i]); j++) {
            console.log("array")
        }
    }
}