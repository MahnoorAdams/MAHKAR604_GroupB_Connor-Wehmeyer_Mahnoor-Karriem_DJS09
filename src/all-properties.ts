import { showReviewTotal, showDetails, getTopTwoReviews } from './utils';
import { Review, Property } from './interfaces';
import { LoyaltyUser, Permissions } from './enums';

// Select Containers
const propertyContainer = document.querySelector('.properties');
const reviewContainer = document.querySelector('.reviews');

// Reviews Data
const reviews: Review[] = [
    { name: 'Sheila', stars: 5, loyaltyUser: LoyaltyUser.GOLD_USER, date: '01-04-2021' },
    { name: 'Andrzej', stars: 3, loyaltyUser: LoyaltyUser.BRONZE_USER, date: '28-03-2021' },
    { name: 'Omar', stars: 4, loyaltyUser: LoyaltyUser.SILVER_USER, date: '27-03-2021' },
];

// Properties Data
const properties: Property[] = [
    { image: 'images/colombia-property.jpg', title: 'Colombian Shack', price: 45, location: { firstLine: 'shack 37', city: 'Bogota', code: 45632, country: 'Colombia' }, contact: [+112343823978921, 'marywinkle@gmail.com'], isAvailable: true },
    { image: 'images/poland-property.jpg', title: 'Polish Cottage', price: 30, location: { firstLine: 'no 23', city: 'Gdansk', code: 343903, country: 'Poland' }, contact: [+1298239028490830, 'garydavis@hotmail.com'], isAvailable: false },
    { image: 'images/london-property.jpg', title: 'London Flat', price: 25, location: { firstLine: 'flat 15', city: 'London', code: 'SW4 5XW', country: 'United Kingdom' }, contact: [+34829374892553, 'andyluger@aol.com'], isAvailable: true },
    { image: 'images/malaysian-hotel.jpeg', title: 'Malia Hotel', price: 35, location: { firstLine: 'Room 4', city: 'Malia', code: 45334, country: 'Malaysia' }, contact: [+60349822083, 'lee34@gmail.com'], isAvailable: false },
];

// Show All Properties
properties.forEach((property) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h4>${property.title}</h4>`;

    const image = document.createElement('img');
    image.setAttribute('src', property.image);
    card.appendChild(image);

    showDetails(true, card, property.price);
    
    propertyContainer?.appendChild(card);
});

// Show Top Reviews
const topReviews = getTopTwoReviews(reviews);
topReviews.forEach((review) => {
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('review-card');
    reviewCard.innerHTML = `${review.stars}⭐ from ${review.name}`;
    reviewContainer?.appendChild(reviewCard);
});

import { properties } from './index';

const propertiesGrid = document.querySelector('.properties-grid');

if (propertiesGrid) {
    properties.forEach(property => {
        const card = document.createElement('div');
        card.classList.add('property-card');
        card.innerHTML = `
            <img src="${property.image}" alt="${property.title}">
            <h3>${property.title}</h3>
            <p>${property.price} per night</p>
        `;
        propertiesGrid.appendChild(card);
    });
} else {
    console.error("Properties grid not found!");
}
