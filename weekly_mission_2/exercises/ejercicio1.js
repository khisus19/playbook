const twitter = {
    user: "Jesús Álvarez",
    nickName: "khisus19",
    followers: 54,
    following: 694,
    join: "january 2011",
    tweets: 797
}

console.log(`My name is: ${twitter.user}`)
console.log(`Make sure to follow me on twitter @${twitter.nickName}`)


const facebook = {
    user: "Jesús Álvarez",
    email: "khisus19@gmail.com",
    age: 34,
    join: "january 2009",
    closeFamily: {
        father: "Francisco Álvarez",
        mother: "Minerva Simancas",
        siblings: ["Johan Álvarez", "Mary Álvarez"]
    },
    hobbies: ["Reading fantasy and history novels", "Play retro video games", "Watch Real Madrid's football matches"],
    hoursInAppPerDay: 1
    
}

console.log(`My name is: ${facebook.user}`)
console.log(`If you wanna be my friend add me on facebook @${facebook.email}`)

const didi = {
    user: "Maria Salcedo",
    prefferPayMethod: "cash",
    mostCommonPlacesVisited: "Inglés Individual",
    lastTenAmountPaid: [38.8, 33, 25, 25, 25, 25, 34.9, 37.6, 28.86, 25],
    averageAmountPaid: function() {
        this.lastTenAmountPaid.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            var sumatoria = valorAcumulado + nuevoElemento;
            return sumatoria / 10;}
        )
    }
}

console.log( didi.user);
console.log( didi.averageAmountPaid);