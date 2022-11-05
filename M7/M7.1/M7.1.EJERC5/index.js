function showNumbers() {

    let pairs = []
    let count = 2

    for (; count <= 100; count += 2) {
        console.log(count)

        pairs.push(count)

    }

    pairs.reverse()


    document.getElementById("pairs").innerHTML = pairs;
}

/*function showNumbers() {

    let pairs = []

    for (let count = 100; count >= 0; count -= 2) {
        console.log(count)

        pairs.push(count);

        document.getElementById("pairs").innerHTML = pairs;
    }
}*/
