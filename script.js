const randomNum = Math.floor(Math.random() * 6);

const compliments = () => {
    const complimentArray = ['you are pretty', 'you are very special', 'you are so in shape, wow', 'you are so sweet', 'you are so caring', 'you are so smart'];
    return complimentArray[randomNum];
}

console.log(compliments());