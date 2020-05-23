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

let glry_div = document.getElementById('gallery');

let all_employees = [];

//fetch ; store all results 
fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => api_result(data.results));

/////////////////////////////////////////////////////////



//store results for fetch then create employee cards
let api_result = (empl_obj) =>  {    

    for(let x = 0; x < empl_obj.length; x += 1) {

        all_employees.push(empl_obj[x]);

    };

    //display 12 users 
    for(let i = 0; i < all_employees.length; i += 1) {

        data_obj_returned(all_employees[i]); 

    };

};

/////////////////////////////////////////////////////////

//create employee card
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

/********************************************************************************************************/
//search functionality 
// append to : class="search-container" 

let form_container = document.getElementsByClassName('search-container')[0];

//generate form html 
let form_html = document.createElement('form'); 

/////////////////////////////////////////////////////////

//generate form input html 
let form_input_1_html = document.createElement('input'); 

form_input_1_html.type = 'search';
form_input_1_html.id = 'search-input';
form_input_1_html.className = 'search-input';
form_input_1_html.placeholder = 'Search...';

/////////////////////////////////////////////////////////

//generate form input html 
let form_input_2_html = document.createElement('input'); 

form_input_2_html.type = 'submit';
form_input_2_html.placeholder ='&#x1F50D;'; 
form_input_2_html.className = 'search-submit';
form_input_2_html.id = 'search-submit';

/////////////////////////////////////////////////////////

form_container.appendChild(form_html); 

form_html.appendChild(form_input_1_html); 
form_html.appendChild(form_input_2_html); 


///////////////////////////////////////////////////////// 

let search_func = () => { 

    let keywords_searched = form_input_1_html.value; 

    let name_string = all_employees

    //pick up first and last name and store in variable 
    //loop through all names to identify search matches  
    //hide the rest of the elements and show the matched element only 
    console.log(all_employees[0].name.first);

}; 

form_input_2_html.addEventListener('click', (event) => {

    event.preventDefault();

    search_func();

});

/********************************************************************************************************/