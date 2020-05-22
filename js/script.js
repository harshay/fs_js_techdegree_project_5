/******************************************************************************************************** 
 * Name : Harshay
 * Teamtreehouse Techdegree
 * Project 5 : Random User Generator API  
 * Full Stack Javascript
 * Grading Level : Exceeds
********************************************************************************************************/
//notes


//API Documentation : https://randomuser.me/documentation
//url for extracting data using the fetch api : 'https://randomuser.me/api/'      

/********************************************************************************************************/

//use fetch api 
//fetch functions

//number of random users which need to be picked up from the fetch api 
let num_rand_users = 13;

let glry_div = document.getElementById('gallery');

let all_employees = [];

//display 12 users 
for(let i = 0; i < num_rand_users; i += 1) {

    //fetch ; store all results 
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => all_employees.push(data.results[0]));

};


//store employee info in an object
let data_obj_returned = (empl_obj) => {

    
    //create card div containing info for one employee
    let card_main_div = document.createElement('div');

    card_main_div.className = 'card';

    glry_div.appendChild(card_main_div);

    //image container div
    let  card_1_div = document.createElement('div');

    //info container div
    let  card_2_div = document.createElement('div');

    //assign class names to newly created divs
    card_1_div.className = 'card-img-container';
    card_2_div.className = 'card-info-container';

    card_main_div.appendChild(card_1_div);  
    card_main_div.appendChild(card_2_div);

    //name
    card_2_div_h3 = document.createElement('h3');
    card_2_div_h3.className = 'card-name cap';
    card_2_div_h3.id = 'name';

    //email
    card_2_div_p1 = document.createElement('p');
    card_2_div_p1.className = 'card-text';

    //city 
    card_2_div_p2 = document.createElement('p');
    card_2_div_p2.className = 'card-text cap'; 

    card_2_div.appendChild(card_2_div_h3);
    card_2_div.appendChild(card_2_div_p1);
    card_2_div.appendChild(card_2_div_p2);

    //console.log(empl_obj); 

    //contruct img tag
    let img_string = '<img class="card-img" src="' + empl_obj.picture.medium + '" alt="profile picture">'; 

    //contruct h3 tag
    let h3_string =  empl_obj.name.first + ' ' + empl_obj.name.last; 

    //contruct p (1) tag
    let p1_string = empl_obj.email; 

    //contruct p (2) tag
    let p2_string = empl_obj.location.city  + ', ' + empl_obj.location.state; 

    //add employee info to tags
    card_1_div.innerHTML = img_string; 
    card_2_div_h3.innerHTML = h3_string;
    card_2_div_p1.innerHTML = p1_string;
    card_2_div_p2.innerHTML = p2_string; 

};


//display 12 users 
for(let i = 0; i < all_employees.length; i += 1) {

    data_obj_returned(all_employees[i]); 

};





/********************************************************************************************************/