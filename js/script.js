/******************************************************************************************************** 
 * Name : Harshay
 * Teamtreehouse Techdegree
 * Project 5 : Random User Generator API  
 * Full Stack Javascript
 * Grading Level : Exceeds
********************************************************************************************************/

//API Documentation : https://randomuser.me/documentation
//url for extracting data using the fetch api : 'https://randomuser.me/api/'      

/*
Get and display 12 random users
With information provided from The Random User Generator API, send a single request to the API, and use the response data to display 12 users, along with some basic information for each:
Image
First and Last Name
Email
City or location
Refer to the mockups and the comments in the index.html file for an example of what info should be displayed on the page and how it should be styled.
*/   

/********************************************************************************************************/




/********************************************************************************************************/
/*
use fetch api 
fetch functions
*/

fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => console.log(data.results[0]));

    
/********************************************************************************************************/

/*


                <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">first last</h3>
                        <p class="card-text">email</p>
                        <p class="card-text cap">city, state</p>
                    </div>
                </div>

*/

/*

1 - create  a div with class card 
2 - create another div (1) within the div created in step 1 : class="card-img-container"
3 - create another div (2) within the div created in step 1 : class="card-info-container"  
4 - create a string containing the img tag and append to div created in step 2 ; 
5 - create a string containing a h3 tag and append to div created in step 3 ; 
6 - create a string containing a p (1) tag and append to div created in step 3 ; 
7 - create a string containing a p (2) tag and append to div created in step 3 ; 

*/