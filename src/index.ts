// Imports
import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from './utils';
import { Permissions, LoyaltyUser } from './enums';
import { Review, Property } from './interfaces';
import MainProperty from './classes';

// Query Selectors
const propertyContainer = document.querySelector('.properties') as HTMLDivElement | null;
const reviewContainer = document.querySelector('.reviews') as HTMLDivElement | null;
const container = document.querySelector('.container') as HTMLDivElement | null;

if (container) {
  // Now you can use 'container' here, like appending elements
  const someElement = document.createElement('div');
someElement.innerHTML = 'This is a new element!';
container?.appendChild(someElement);
}
const button = document.querySelector('button') as HTMLButtonElement | null;
const footer = document.querySelector('.footer') as HTMLDivElement | null;


let isLoggedIn: boolean = true;  
// Reviews
const reviews: Review[] = [
    {
        name: 'Sheila',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
];

// User Object
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};

// Properties List
const properties: Property[] = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 'SW4 5XW',
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/malaysian-hotel.jpeg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact: [ +60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
];

// Display Reviews & User Info
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);

// Add Property Cards to the Page
properties.forEach(property => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = property.title;

    const image = document.createElement('img');
    image.setAttribute('src', property.image);
    card.appendChild(image);

    showDetails(you.permissions, card, property.price);
    
    propertyContainer?.appendChild(card);
});

// Add Reviews to Page
let count = 0;
function addReviews(array: Review[]): void {
    if (count === 0) {
        count++;
        const topTwo = getTopTwoReviews(array);
        
        topTwo.forEach(review => {
            const card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = `${review.stars} stars from ${review.name}`;
            reviewContainer?.appendChild(card);
        });

        button?.parentElement?.removeChild(button);
    }
}

// Attach Event Listener to Button
const viewButton = document.querySelector('#view-properties');

if (viewButton) {
    viewButton.addEventListener('click', () => {
        console.log("Navigating to all-properties.html...");
        window.location.href = 'all-properties.html';
    });
} else {
    console.error("View button not found!");
}
footer?.innerHTML

    console.error("Button not found!");


button?.addEventListener('click', () => addReviews(reviews));

// Update Footer with Location Info
let currentLocation: [string, string, number] = ['London', '11.03', 17];
footer!.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`;

// Display Main Property Image
let yourMainProperty = new MainProperty(
    'images/italian-property.jpg', 
    'Italian House',
    [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }]
);

const mainImageContainer = document.querySelector('.main-image') as HTMLDivElement | null;
const image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer?.appendChild(image);
