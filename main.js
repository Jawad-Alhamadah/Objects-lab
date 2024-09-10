const User ={
    name:"John",
    email: "johnn@hotmail.com",
    id:1,
    Available : true,
    isAvilable : function (){this.Available? console.log("user is available"):console.log("user is not available")},
    adress:{
        City:{
            name :"london",
            population: 2300000
        },
        street: "some street",
        zipCode: 15354

    },
    skills:["cooking","yelling", "mountain falling"]

}

console.log(User)
console.log(User["name"])
User.id =3
console.log(User)

delete User.email

console.log(User)

User.isAvilable()

User.Available=false

console.log(User)

User.isAvilable()


console.log(User.adress.City.name)

console.log(User.skills.join(','))