// Tomando de referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos.

// Objeto de Twitter
const twitter = {
    user: "Jesús Álvarez",
    nickName: "khisus19",
    followers: 54,
    following: 694,
    join: "january 2011",
    tweets: 797
}

// Clase de Twitter
class Twitter {
    constructor (user, nickName, followers, following, join, tweets) {
        this.user = user;
        this.nickName = nickName;
        this.followers = followers;
        this.following = following;
        this.join = join;
        this.tweets = tweets;
    }
}

let twitterMaria = new Twitter("María", "mary_g12", 420, 603, "june 2010", 1540);
console.log(twitterMaria);

// Objeto de Facebook:
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

// Clase de Facebook:
class Facebook {
    constructor (user, email, age, join, closeFamily, hobbies, hoursInAppPerDay) {
        this.user = user;
        this.email = email;
        this.age = age;
        this.join = join;
        this.closeFamily = closeFamily;
        this.hobbies = hobbies;
        this.hoursInAppPerDay = hoursInAppPerDay;
    }
}

let facebookMaria = new Facebook ("María", "mariasalcedo@gmail.com", "31", "january 2009", undefined, ["sewing", "videogames", "dancing"], 3);
console.log(facebookMaria)

// Objeto de Didi
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

// Clase de Didi
class Didi {
    constructor (user, prefferPayMethod, mostCommonPlacesVisited, lastTenAmountPaid) {
        this.user = user;
        this.prefferPayMethod = prefferPayMethod;
        this.mostCommonPlacesVisited = mostCommonPlacesVisited;
        this.lastTenAmountPaid = lastTenAmountPaid;
    }
}

let didiMary = new Didi("mary", "transfer", "cinepolis", [25, 38, 28.5, 40, 38.3, 25.7, 22, 26.5, 33.1, 32]);
console.log(didiMary);
didi.averageAmountPaid();