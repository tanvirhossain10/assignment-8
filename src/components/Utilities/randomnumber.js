const random = (arr) => {
    let numbers = arr;
    let randomIndex = Math.floor(Math.random() * numbers.length);
    // Use the random index to get the randomly picked number
    let randomlyPickedNumber = numbers[randomIndex];
    console.log("Randomly picked number:", randomlyPickedNumber);
    return randomlyPickedNumber;
}

export {
    random as randomNumber,
}