const timer = (number) =>{
    let second = 60;
    let minutes = second *60;
    let hour = minutes*60
    let day = hour*24
    let year = day*365
    if(number == 0){
        return 'now'
    }
    let remaining = 0;

        return `${Math.round(number/year)} ${number%year}`
}

console.log(timer(1231233))