// //Solution of Assignment all 45 Questions

// //Envoirment Setup :Solution of Question_no_1

// //Solution of Question_no_2

// let MesSage="Hello World" //used PascalCase
// console.log("Hello World");

// //Solution of Question_no_3

// // store a person name in a variable and then print that person's name in lowercase, uppercase, and titlecase.
// const PersonName: string = "MUHAMMAD FAHAD";
// // lowercase
// console.log(PersonName.toLowerCase());
// // upercase
// console.log(PersonName.toUpperCase());
// // titleCase
// let firstLetter: string = PersonName.charAt(0).toUpperCase();
// let restLetters: string = PersonName.slice(1).toLowerCase();
// let titleCase = firstLetter + restLetters;
// console.log(titleCase);

// //Solution of Question_no_4

// //famous quote:Find a quote from a famous person you admire. Print the quote and the name of 
// //its author. Your output should look something like the following, including the quotation 
// //marks:
// //Albert Einstein once said, "Aperson who never made a mistake never tries anything new."

// let qoute: string= "A person who naver made a mistake never tried anything new";
// let author: string= "Albert Einstine";
// console.log(`${author} once said, "${qoute}"`);

// //Solution of Question_no_5

// //Famous Quote 2: Repeat Exercise 4, but this time store the famous 
// //person's name in a variable called famous_person. Then compose your
// // message and store it in a new variable called messge.Printyour 
// //message.

// let famous_person: string= "Albert Einstin";
// let quote: string= "A person who never made a mistake never tried anything new";
// let mes_sage : string= `${famous_person} once said, "${quote}"`;
// console.log(mes_sage);

// //Solution of Question_no_6

// //Stripping Names: Store a person's name, and include some whitespace
// // characters at the begining and end of the name. Make sure you use
// // each character combination, "\t" and "\n", at least once. Print the
// // name once, so the whitespace around the name is displayed. Then print
// // the name after striping the white spaces.

// let personName:string = "  \n\tMUHAMMAD FAHAD\t\n  ";
// console.log(personName);
// var without_whitespace = personName.trim();
// console.log(without_whitespace);

// //Solution of Question_no_7 & no_8

// //Number Eight: Write addition, subtraction, multiplication, and 
// //division operations that each result in the number 8. Be sure to 
// //enclose youroperations in print statments to see the result.
// // Task Q8
// // you should create four lines that look like this .console.log(5+3)
// // your output should simply be four lines with the number 8 appearing
// // once on each line.
// console.log(5+3) //addition
// console.log(10-2) //subtraction
// console.log(4*2) //multiplication
// console.log(16/2) //division

// //Solution of Question_no_9

// //Favorite Number: Store your favorite number in a variable. Then, using
// // that variable, create a message that reveals your favorite number. 
// //Print that message.
// let favorite_Number: number = 19;
// let message:string ='Here is your favorite number  ' +favorite_Number;
// console.log(message);

// //Solution of Question_no_10

// //Adding Comments:Choose two of the programs you've written, and add 
// //at least one comment to each. If you don;t have anything specific to
// // write because your programs are too simple at this point, just add
// //your name and the current date at the top of each program file.Then 
// //write one sentence describing what the program does.
// //Program written by: [Muhammad Fahad]
// //current Date: [Tuesday, February 27, 2024]
// // This program will add two digits.

// //solution 9: printing a favourite number.

// const favoriteNumber:number= 4;
// // reveling my favourite number in a message formate.
// console.log (`My favourite number is ${favoriteNumber}.`);

// //Solution of Question_no_11

// // Assignment solution
// //Names:Store the names of a few of your friends in ab arry called
// // names.Print each person's name by accessing each element in the 
// //list.one at a time.
// let names: string [] = ["Muhammad", "Ali", "Essa", "Hamza"];
// for(let i=0; i<names.length; i++){
// console.log(names[i]);

// }

// //Solution of Question_no_12

// //Greetings: Start with the arry you used in Exersise 11, butt instead
// //ofjust printing each person's name, print a message to them. The each
// //massage should be the same, but each message should be personalized
// // with the person's name.

// let names: string[]= ['jamal', 'shabana', 'akmal', 'bublo'];
// const message:string= 'Welcome to Tpescript class:'
// for(let i=0; i<names.length; i++){
//     console.log(message + names[i]);
// }

// //Solution of Question_no_13

// //Think of your favorite mode of transportation, such as motorcycle or
// // a car, and make a list that stores several examples.
// //Use your list to print a series of statments about these items,
// //such as "I would like to own a Honda motorcycle."

// let transportation : string[]=['car','bus','motorcycle','aeroplane']
// for(let i=0; i<transportation.length; i++){
//     console.log('I would like to own a '+ transportation[i])
// }

// //Solution of Question_no_14

// // If you could invite anyone, loving or deceased, to dinner, who would 
// //you invite? Make a list othet includes at least three people you'd 
// //like to invite to dinner. then use your list to print a massage to 
// //each person, inviting them to dinner.
// let guestList: string[]= ['Mustufa', 'Ubaid', 'faheem', 'asif'];
// for(let i=0;i<guestList.length; i++){
// console.log('Dear Mr. ' + guestList[i] + ',\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }

// //Solution of Question_no_15

// let guestList: string[]= ['Mustufa', 'Ubaid', 'faheem', 'asif'];

// for(let i=0; i<guestList.length; i++){
// console.log('Dear Mr. ' + guestList[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!')
// }

// let absent_Guest:string = 'Mustufa';
// let new_Guest:string ='Muhammad';
// guestList[0]= new_Guest;
// for(let i=0;i<guestList.length; i++){
//     console.log('Dear Mr. ' + guestList[i] + ',\n\It is our pleasure to invite you in our party.\n\nThank You!')
//     }
// console.log (`Mr. ${absent_Guest} is not comming to the party.\n\nThank You!\n\n`) 

// //Solution of Question_no_16

// // creating a guest list arry
// let guestList: string[]= ["Hamza", "Usman", "Ayesha", "Areeba"];
// // making variable for those guest who cant come
// let dontcom = guestList[0];
// // print the name of guest who cant come
// console.log(dontcom, "Did not come");
// // add or remove values from guest list Arry
// guestList.splice(0, 1, "Usman");
// // massage print for bigger table
// console.log("Good News! We have found a bigger table for a dinner");
// // adding a value at starting index of Arry
// guestList.unshift("Zohaib");
// // adding a new value at ending index of Arry
// guestList.push("Zafar");
// //  adding a new value at middle index of Arry
// let middleIndex:number = Math.floor(guestList.length / 2);
// //  adding a new guest at middle index of Arry
// guestList.splice(middleIndex, 0, "Zulfiqar");
// // print massage of updated list
// console.log("updated list of our Guests")
// // sending an invitition massage to our guests one by onewith thier names 
// guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));

// //Solution of Question_no_17

// var guestList: string[] = ["Hamza", "Usman", "Hassan", "Areeba"];
// // informing that only two people can be invited
// console.log("Due to limited space, only two people can be invited for dinner.");
// // Removeing guests untill only two names remain
// while (guestList.length > 2) {
//     var removedGuest = guestList.pop();
//     console.log("sorry, ".concat(removedGuest, ", you are no longer invited to dinner."));
// }
// // Printing invitations to the remaining two guests
// guestList.forEach(function (guest) {
//     console.log("Dear ".concat(guest, ", you are still invited to dinner."));
// });
// // Removing the last two names from the list
// guestList.pop();
// guestList.pop();
// // printing final list to confirm it's empty
// console.log("Final guest List:", guestList);

// //Solution of Question_no_18

// // // store the location in a arry, Make sure the arry is not in alphabetical order.
// let places : string[]=['Singapore', 'Dubai', 'London', 'Paris', 'Istanbul']

// // print your arry in its original order.
// console.log('orignal ' + places);
// // Print your arry in alphabetical orderwithout modifying the actual list.
// console.log('copy '+ [...places].sort());
// //show that your arry is still in itsoriginal order by printing it.
// console.log('orignal ' + places);
// // Print your arry in reverse alphabetical order without chaning the order
// //  of the original list.
// console.log('copy ' + [...places].sort().reverse());
// // show that your arry is still in it's original order again.
// console.log('orignal '+ places);
// //  Reverse the order of your list again. Show that it's order has changed. 
// console.log('orignal '+ places.reverse());
// // Reverse the order of your list again. Print the list to show it's back 
// // to its original original order.
// console.log('orignal '+ places.reverse());
// // Sort your arry so it's stored in alphabetical order. Print the arry to 
// // show that its order has been Changed.
// console.log('orignal '+ places.sort());
// // Sort to change your arry so it's stored in reverse alphabetical order.
// // Print the list to show that it's order has changed.
// console.log('orignal '+ places.sort().reverse());

// //Solution of Question_no_19
// // Question 17 Shrinking Guest List
// var guestList = ["Hamza", "Usman", "Hassan", "Areeba"];
// // informing that only two people can be invited
// console.log("Due to limited space, only two people can be invited for dinner.")
// // Removeing guests untill only two names remain
// while (guestList.length> 2) {
// const removedGuest = guestList.pop();
// console.log(`sorry, ${removedGuest}, you are no longer invited to dinner.`);
// }
// // Printing invitations to the remaining two guests
// guestList.forEach((guest) => {
//     console.log(`Dear ${guest}, you are still invited to dinner.`));
// }
// // Removing the last two names from the list
// guestList.pop();
// guestList.pop();
// // printing final list to confirm it's empty
// console.log("Final guest List:", guestList);
// // Question.no.19.

// // Print a message indicating the number of people you are inviting 
// // to dinner.
// var invitations = ["Hamza", "Usman"];
// var count_invitations = invitations.length;
// console.log("".concat(count_invitations, ": People will come to the dinner"));

// //Solution of Question_no_20

// // Think of something you could store in a arry.
// let items : string[]=['Pakistan', 'Karachi', 'Urdu'];
// // Write a progra that creates alist containing thsese items.
// let item2:string[]=[];
// item2.push('Germony');
// item2.push('England');
// item2.push('India');

// console.log(item2);

// //Solution of Question_no_21

// // Write a program that creates objects containing these items.


// interface person {
//     name : string,
//     age: number,
//     nationality: string,
//     Student : Boolean
// }
// let person : person = {
//     name : 'Jahangeer',
//     age : 27,
//     nationality: 'Pakistan',
//     Student : true

// }

// // Data type of object
// console.log(person);
// interface car {
//     maker : string,
//     color: string,
//     automatic: boolean
// }
// //  car object
// let car = {
// maker : 'Honda',
// color: 'White',
// automatic : true
// }
// console.log (car);

// //Solution of Question_no_22
// // If you have not recieved in array index error in one of your
// //  programs yet, try to make one happen.
// let newArry :string []= ['will smith','James Bond', 'Tem Cruise'];

// //  Accessing arry by index
// console.log(newArry[5]);
// // Make sur you correct the eror before closing the program.
// // Correct the error
// console.log(newArry);

// //Solution of Question_no_23
// // Write a series of conditional tests.
// // creating car variable

// let cAr :string= 'subaru';
// // Test No. 1
// console.log("Is car === 'subaru'? I predict True.");
// console.log(cAr ===`subaru`);

// // Test No. 2
// console.log("Is car == 'subaru'? I predict True.");
// console.log(cAr ==`subaru`);

// // Test No. 3
// console.log("Is car != 'Suzuki'? I predict True.");
// console.log(car != 'Suzuki');

// // Test No. 4
// console.log("Is car !== 'Swift'? I predict True.");
// console.log(car !== 'Swift');

// // Test No. 5
// console.log("Is car.Upper case == 'SUBARU'? I predict True.");
// console.log(car.toUpperCase ()== 'SUBARU');

// // Test No. 6
// console.log("Is car.Lower case == 'SUBARU'? I predict True.");
// console.log(car.toLowerCase ()== 'SUBARU');

// // Test No. 7
// console.log("Is car === 'SUBARU'? I predict True.");
// console.log(car === 'SUBARU');

// // Test No. 8
// console.log("Is car === 'Train'? I predict True.");
// console.log(car === 'Train');

// // Test No. 9
// console.log("Is car === 'Bus'? I predict True.");
// console.log(car === 'Bus');

// // Test No. 10
// console.log("Is car === 'Cycle'? I predict True.");
// console.log(car === 'Cycle');

// // = means set the value of something.
// //  == means check the value of somthing.
// //  === means check with data type of something.
// // != means not equal to
// // example: 2 != 2 false

// //Solution of Question_no_24
// // Test.1.Equality and Inequality Test.
// console.log("Equality test with string: ","Apple" === "Apple");

// // Test.2.Equality and Inequality Test.
// console.log("Equality test with string: ",("Apple" as string) != "Orange");

// // Tests using the lower case function.
// console.log("Lower Case funtion test: ", "HEllo".toLowerCase() ==="hello");

// // Numerical test involving equality
// console.log("Equality test with numbers:", 27 === 27 );

// // Numerical test involving inequality
// console.log("Equality test with numbers:",(23 as number) !=27);

// // Greater than test
// console.log("Greater than test: ", 10>5);

// // Less than test
// console.log ("Less than test: ", 5<10);

// // Greater than or less than test
// console.log("Greater than and equal to test: ", 10>=5);

// // Less than or equal to test
// console.log ("Less than or equal to test: ", 5<= 10);

// // Test using "and" operator
// console.log("And operator test:", 5===5 && 10> 5);

// // Test using "Or" operator
// console.log("Or operator test:", 5===5 || false );

// // Test whether an item is in a arry
// const fruits :string[]= ['Mango', 'strawberry', 'Banana']
// console.log('Test ""Banana" in the arry:', fruits.includes("Banana"));

// // Test whether an item is not in a arry
// console.log('Testing"Apple" is not in Arry:', fruits.includes('Apple'));

// //Solution of Question_no_25
// //  Create a variable called alien_color and assign it a value of 'green', 'yellow", or 'red'.
// let alien_color: string= 'green';

// // Write an if statment to test whether the alien's color is green. If it is,
// //  print a message that the player just 5 points.
// if(alien_color === 'green'){
//     console.log("Player Just earned 5 points !");
// } 
// // Write one version of this program that passes the if test and another that fails.
// // (The version that fails will have no output.)

// alien_color = 'Yellow';
// // (the version that fails will have no output.)
// if (alien_color ==='green'){
//     console.log(" Player Just earned 5 points !");
// }

// //Solution of Question_no_26

// // Alien color #2: Choose a color for an alien as you did in Exercise 25,
// // and write an if- else chain.
// let alien_color:string="green";

// // Write an if-else chain.
// // If the alien_color is green.
// //  print a statment that the player just earned 5 points for shooting 
// // the alien.
// if (alien_color ==="green"){
//     console.log("player just earned 5 points for shooting the alien.");
// }else {
//     console.log("player just earned 10 points")

// }

// // . If alien's color isn't green, print a statment that the player just 
// // earned 10 points.
// // . Write one version of this program that runs the if block and another
// //  that runs the else block.
// alien_color = "yellow"

// if (alien_color ==="green"){
//     console.log("player just earned 5 points for shooting the alien.");
// }else {
//     console.log("player just earned 10 points")

// }


// //  note: () means parenthese
// //  [] square Bracket
// //   {} curly braces

// //Solution of Question_no_27

// // If the alien is green, print a message that the player earned 5 points.
// // If the alien is yellow, print a message that the player earned 10 points.
// // If the alien is red, print a message that the player earned 15 points.
// // Write three versiion of this program, making sure each message is 
// // printed for the approprate color allien.5
// // // Version 1 of the program
// let allienColors : string='green';
// if(allienColors ==='green'){
//     console.log("Version 1; player earned 5 points.");
// }
// else if(allienColors ==='yellow'){
//     console.log("player earned 10 points.");
// }
// else if(allienColors ==='red'){
//     console.log("player earned 15 points.");
// }
// else{
//     console.log("please select right color");
// }
// // // Version 2 of the program
// allienColors = "yellow";

// if(allienColors ==='green'){
//     console.log("player earned 5 points.");
// }
// else if(allienColors ==='yellow'){
//     console.log("Version 2; player earned 10 points.");
// }
// else if(allienColors ==='red'){
//     console.log("player earned 15 points.");
// }
// else{
//     console.log("please select right color");
// }
// // // Version 3 of the program
// allienColors = "red";

// if(allienColors ==='green'){
//     console.log("player earned 5 points.");
// }
// else if(allienColors ==='yellow'){
//     console.log("player earned 10 points.");
// }
// else if(allienColors ==='red'){
//     console.log("Version 3; player earned 15 points.");
// }
// else{
//     console.log("please select right color");
// }

// //Solution of Question_no_28
// let age:number= 27
// if (age<2) {console.log("person is a baby")}
// else if(age>=2 && age<4){
//     console.log("person is a toddler")}
//     else if(age>=4 && age<13){
//         console.log("person is a kid")}
//         else if(age>=13 && age<20){
//             console.log("person is a teenager")}
//             else if(age>=20 && age<65){
//                 console.log("person is an adult")}
//                 else{console.log("person is an elder")
                    
//                 }

// //Solution of Question_no_29

// let favorite_fruits:string [] = ["mango", "apple", "banana"]
// if(favorite_fruits.includes('mango')){console.log(`I really like mango!`);}
// if(favorite_fruits.includes('apple')){console.log(`I really like apple!`);}
// if(favorite_fruits.includes('banana')){console.log(`I really like banana!`);}
// if(favorite_fruits.includes('strawberry')){console.log(`I really like strawberry!`);}
// if(favorite_fruits.includes('orange')){console.log(`I really like orange!`);}

// //Solution of Question_no_30

// const userName:string[]=['admin', 'Daffy Duck', 'sylvester', 'Tweety'];
// userName.forEach(userName=> {
//     if (userName === `admin`)
//     {
//         console.log('Hello admin, would you like to see a status report?');   
//     }
// else{
//     console.log(`Hello ${userName}, thank you for logging in again.`);})

// //Solution of Question_no_31
// let users: string[]=["Amjad", "asad", "shumila", "junaid", "shafiq"]
// // if (users.length === 0){
// //     console.log("We need to find users!")}
// //     else{for (let user of users){
// //         if (user ==="admin")
// //         {console.log("Hello admin, would you like to see the report")}
// //     else{console.log(`Hello ${user} thank you for logging in again`)
// // }}
// //     }
//     users = []
//    if (users.length === 0) {
//         console.log("we nood to find some users!")}

// // //Solution of Question_no_32

// let current_users :string []=["admin", "Eric", "Ali", "Hamza","fatima"]
// let new_users: string[]= ["admin", "fatima", "Aliza", "Haseeb", "Noor"]
// let current_users_lower: string[]= current_users.map(user => user.toLowerCase())

// for (let new_user of new_users){
//     if (current_users_lower.includes (new_user.toLocaleLowerCase())){
//         console.log(`sorry ${new_user}, that name is taken`)
//     } else {console.log(`Yes ${new_user}, is still in available list`)}
// }

// //Solution of Question_no_33
// let numbers:number[]=[1,2,3,4,5,6,7,8,9]
// for (let number of numbers){

// if (number === 1) {
//     console.log(`${number}st`)//1st
// }else if (number === 2){
//     console.log(`${number}nd`)//2nd
// }else if (number === 3){
//     console.log(`${number}rd`)//3rd
// }else{
//     console.log(`${number}th`)//4th, 6th, 7th, 8th, 9th
// }
// }


// //Solution of Question_no_34

// let favourite_pizza : string[]=["peppereno", "chicken", "veg" ]
// for (let pizza of favourite_pizza){
//     console.log(pizza)

// console.log("\n")
// for (let pizza of favourite_pizza){
//     console.log(`I realy like ${pizza} pizza!`)
// }
// console.log("\nI realy love pizza")

// //Solution of Question_no_35

// let animals:string[]= ["cow", "dog", "cat"]
// for (let animal of animals){
//     console.log(animal)
// }
// console.log("\n")
// for (let animal of animals){
//     console.log(`A ${animal} has a tail`)
// }
// console.log("\n all of these animals are pet animals")


// //Solution of Question_no_36

// function make_shirt(size:string, text:string) {
//     console.log(`Create a ${size} shirt with the message:${Text}`);
// }
// make_shirt(`large`, `i love typescript`);
// make_shirt(`medium`, `i need a big shirt`);
// make_shirt(`small`, `i need a big shirt`);


// //Solution of Question_no_37

// function make_shirt(size:string=`Large`, text:string=`I love TypeScript.`){
//     console.log(`Creating a ${size} shirt with the message:${text}`)
// }
// make_shirt();
// make_shirt(`medium`);
// make_shirt(`small`, ` love Python`);


// //Solution of Question_no_38

// function describe_city(city: string, country:string='Default Country.'){
//     console.log(`${city} is in ${country}`);
//     }
//     describe_city(`Karachi`, `Pakistan`);
//     describe_city(`Tokyo`, `Japan`);
//     describe_city(`Paris`, `Farance`);

// //Solution of Question_no_39

// function city_countery(city: string,country:string){
    
//     return `${city}, ${country}`;
// }

// console.log(city_countery('Karachi', 'Pakistan'));
// console.log(city_countery('Tokyo', 'Japan'));
// console.log(city_countery('Paris', 'Farance'));

// //Solution of Question_no_40

// function make_album (artist:string, title:string, tracks?:number) {
//     const album : {artist:string, title:string, tracks?:number} = {
//         artist :artist, 
//         title:title
//     }
//     if (tracks !==undefined){
//         album.tracks = tracks;
//     }
//     return album;

// }
// const album1=make_album('Artist 1', 'Album Title 1');
// console.log(album1);
// const album2=make_album('Artist 2', 'Album Title 2');
// console.log(album2);
// const album3=make_album('Artist 3', 'Album Title 3', 12);
// console.log(album3);

// //Solution of Question_no_41

// let magicians:string[]=['Harry Potter', 'Hermione Granger', 'Ron Weasley',
// 'Albus Dumbledore'];

// function show_magicians(magicians:string[]){

//     magicians.forEach(element =>{
//         console.log(element);
//     });
// }
// show_magicians(magicians)}

// //Solution of Question_no_42

// let magician :string[]=['Harry potter', 'Hermione Granger', 'Ron Weasley',
// 'Albus Dumbledore'];

// function make_great (magicianArray:string[]){
//     for (let i=0; i<magicianArray.length; i++){
//         magician[i]=  'the great ' + magicianArray[i]
//     }
// }

// function show_magicians(magicians:string[]){
//     magicians.forEach(element=>{
//         console.log(element);
//     })

// };
// make_great(magician);
// show_magicians(magician);

// //Solution of Question_no_43

// let magician :string[]=['Harry potter', 'Hermione Granger', 'Ron Weasley',
// 'Albus Dumbledore'];

// function copyArry(arr:string[]){
//     return[...arr]

// }
// function make_great (magicianArry:string[]){
//     for (let i=0; i<magicianArry.length; i++){

//         magicianArry[i]='the Great' + magicianArry[i]
// }
// }
// function show_magicians(magicians: string[]){
//     magicians.forEach(element => {
//         console.log(element);
//     });
// }
// const copyMagicianArry= copyArry(magician)

// make_great(copyMagicianArry)
// console.log('\n\nThis is my original arry:');
// show_magicians(magician);
// console.log('\n\nThis is my modified copy of the arry:');
// show_magicians(copyMagicianArry);

// //Solution of Question_no_44

// function makeSandwiches (item:string[]){
//     console.log('\nMakeing your sandwich with:');
//     item.forEach(element=>console.log("-"+ element));
//     console.log('Enjoy your sandwich!\n');
// }
// makeSandwiches(['Ham', 'Cheese', 'Lettuce']);
// makeSandwiches(['Turkey', 'Bacon']);
// makeSandwiches(['Peanut butter', 'Jelly']);

// //Solution of Question_no_45

// function storCarinfo(manufaturer:string, modelName:string, 
//     ...extraoption :{[key:string]:any}[]):
//     object {
//         const carinfo={
//             manufaturer, 
//             modelName,
//             ...Object.assign({},...extraoption)
//         }
//         return carinfo;
//     };
// let answer= storCarinfo('Honda', 'Civic',{color:'black'}, {features:['Navigation', 'Power window']})
// console.log(answer);
