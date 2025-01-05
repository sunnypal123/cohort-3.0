function canVote(age){
    if (age>=18)
    {
    return true;
    }
    else
    {
        return false;
    
    }
}

let sunny = canVote(12);
console.log(sunny);