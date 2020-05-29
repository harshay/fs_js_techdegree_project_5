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
let all_employee_names = [];
let all_cards;
let selected_employee_name;
let selected_index; 


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

    /////////////////////////////////////////////////////////

    //display 12 modal windows
    for(let u = 0; u < all_employees.length; u += 1) {

        mod_window_func(all_employees[u]);

    };

    all_modal_containers = document.getElementsByClassName('modal-container');    
    all_next_buttons = document.getElementsByClassName('modal-next btn');    
    console.log(all_next_buttons.length);
    all_prev_buttons = document.getElementsByClassName('modal-prev btn');

    //hide 12 modal windows
    for(let u = 0; u < all_modal_containers.length; u += 1) {

        all_modal_containers[u].style.display = 'none'; 

    };


    //////////////////////////////////////////////////////

    all_cards = document.getElementsByClassName('card');

    //identify the employee selected 
    for(let z = 0; z < all_cards.length; z += 1) {

        all_cards[z].addEventListener('click', (event) => {


            if(event.target.className === 'card-img') {                

                selected_employee_name = event.target.parentNode.nextElementSibling.childNodes[0].innerHTML;
                
               
            } else if(event.target.className === 'card-name cap') {


                selected_employee_name = event.target.innerHTML;          


            } else if(event.target.className === 'card-text') {


                selected_employee_name = event.target.parentNode.childNodes[0].innerHTML;

    
            } else if(event.target.className === 'card-info-container') {


                selected_employee_name = event.target.childNodes[0].innerHTML;


            } else if(event.target.className === 'card-text cap') {


                selected_employee_name = event.target.parentNode.childNodes[0].innerHTML;

    
            } else if(event.target.className === 'card-img-container') {


                selected_employee_name = event.target.nextElementSibling.childNodes[0].innerHTML;
    
    
            } else if(event.target.className === 'card') {

                selected_employee_name = event.target.childNodes[1].childNodes[0].innerHTML;
   
    
            };

            //identify and store selected employee index
            for(let y = 0; y < all_employee_names.length; y += 1) { 


                if(all_employee_names[y] === selected_employee_name) {
        
                    selected_index = y;     
        
                };                
        
            };


           
            //pass selected employee to open modal window
            all_modal_containers[selected_index].style.display = "";



    
        });

    };


    //next buttons

    /*
    for(let m = 0; m < all_next_buttons.length; m += 1) {
        
        console.log(all_next_buttons.length);

        all_next_buttons[m].addEventListener('click', (event) => {

            all_modal_containers[selected_index].style.display = "none";

            all_modal_containers[selected_index+1].style.display = "";


        });

    };
    */


};



/////////////////////////////////////////////////////////

//create employee card
let data_obj_returned = (empl_obj) => {
    
    //create card div containing info for one employee
    let card_main_div = document.createElement('div');

    //class name for an employee card
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

    all_employee_names.push(h3_string);

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

//search value and return the matched employee cards
let search_func = () => { 

    //all employee cards
    let all_employee_cards = document.getElementsByClassName('card');

    let keywords_searched = form_input_1_html.value; 

    for(let i = 0; i < all_employee_names.length; i += 1) {

        let employee_name = all_employee_names[i];

        let match_test = (employee_name.toUpperCase()).includes(keywords_searched.toUpperCase());

        if(match_test) { 

            all_employee_cards[i].style.display = '';            

        } else {

            all_employee_cards[i].style.display = 'none';

        };      

    }; 

}; 

//reset search results when visitor clicks outside the search box
document.body.addEventListener('click', (event) => {
 
    //all employee cards
    let all_employee_cards = document.getElementsByClassName('card');   
       

    if((event.target.className !== 'search-input') && (event.target.className !== 'search-submit')) {
       
        for(let i = 0; i < all_employee_cards.length; i += 1){

            all_employee_cards[i].style.display = '';            
        
        };

   };

}); 

//set up click event listener/search
form_input_2_html.addEventListener('click', (event) => {

    event.preventDefault();

    search_func();

});

//set up click event listener/search
form_input_1_html.addEventListener('keyup', (event) => {

    search_func();

});

/********************************************************************************************************/
//modal window 

let mod_window_func = (empl_mod_obj) => { 

    let mod_container = document.createElement('div'); 
    mod_container.className = 'modal-container'; 

    document.body.appendChild(mod_container);
    ////////////////////////////////////////////////////////

    let mod_main_div = document.createElement('div'); 
    mod_main_div.className = 'modal'; 

    mod_container.appendChild(mod_main_div);

    ////////////////////////////////////////////////////////

    //button
    let mod_button = document.createElement('button'); 
    let mod_button_strong = document.createElement('strong'); 

    mod_button.type = 'button';
    mod_button.id = 'modal-close-btn'; 
    mod_button.className = 'modal-close-btn';


    mod_main_div.appendChild(mod_button);
    mod_button.appendChild(mod_button_strong);

    mod_button_strong.innerHTML = 'X';

    ////////////////////////////////////////////////////////

    //info container
    let mod_info_container = document.createElement('div'); 
    mod_info_container.className = 'modal-info-container';

    mod_main_div.appendChild(mod_info_container);

    ////////////////////////////////////////////////////////

    //modal window img tag 
    let mod_img_tag = document.createElement('img'); 
    mod_img_tag.src = empl_mod_obj.picture.medium;
    mod_img_tag.className = 'modal-img'; 
    mod_img_tag.alt = 'profile picture';  

    mod_info_container.appendChild(mod_img_tag); 

    ////////////////////////////////////////////////////////

    //h3 tag
    //header 
    let mod_h3_tag = document.createElement('h3');
    mod_h3_tag.className = 'modal-name cap';
    mod_h3_tag.id = 'name';

    mod_h3_tag.innerHTML = empl_mod_obj.name.first + ' ' + empl_mod_obj.name.last;
    
    mod_info_container.appendChild(mod_h3_tag); 

    ////////////////////////////////////////////////////////
    
    //email and city 
    let mod_p_email = document.createElement('p');
    mod_p_email.className = 'modal-text';

    mod_p_email.innerHTML =  empl_mod_obj.email; 

    ///////

    let mod_p_city = document.createElement('p');
    mod_p_city.className = 'modal-text cap';

    mod_p_city.innerHTML =  empl_mod_obj.location.city  + ', ' + empl_mod_obj.location.state;

    mod_info_container.appendChild(mod_p_email);
    mod_info_container.appendChild(mod_p_city);

    ////////////////////////////////////////////////////////

    let mod_hr = document.createElement('hr'); 

    mod_info_container.appendChild(mod_hr);

    ////////////////////////////////////////////////////////

    //phone, street, bday 
    let mod_p_phone = document.createElement('p');
    let mod_p_street = document.createElement('p');
    let mod_p_bday = document.createElement('p');

    mod_p_phone.className = 'modal-text';
    mod_p_street.className = 'modal-text';
    mod_p_bday.className = 'modal-text';

    mod_p_phone.innerHTML = empl_mod_obj.phone;
    mod_p_street.innerHTML = empl_mod_obj.location.street.name;
    mod_p_bday.innerHTML = empl_mod_obj.dob.date;

    mod_info_container.appendChild(mod_p_phone);
    mod_info_container.appendChild(mod_p_street);
    mod_info_container.appendChild(mod_p_bday);

    ////////////////////////////////////////////////////////

    let mod_btn_container = document.createElement('div'); 
    mod_btn_container.className = 'modal-btn-container';      

    mod_container.appendChild(mod_btn_container); 

    //////////////////////////////////////////////////////// 

    let mod_btn_container_b1 = document.createElement('button'); 
    let mod_btn_container_b2 = document.createElement('button'); 

    mod_btn_container_b1.type = 'button';
    mod_btn_container_b2.type = 'button'; 
    
    mod_btn_container_b1.id = 'modal-prev';
    mod_btn_container_b2.id = 'modal-next'; 
    
    mod_btn_container_b1.className = 'modal-prev btn';
    mod_btn_container_b2.ClassName = 'modal-next btn'; 
    
    mod_btn_container_b1.innerHTML = 'Prev';
    mod_btn_container_b2.innerHTML = 'Next';

    mod_btn_container.appendChild(mod_btn_container_b1);
    mod_btn_container.appendChild(mod_btn_container_b2);


    //////////////////////////////////////////////////////// 

    mod_button.addEventListener('click', () => {

        mod_container.style.display = 'none'; 


    });
    
}; 







/********************************************************************************************************/