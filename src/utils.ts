// Query Selectors
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLDivElement | null;
const returningUserDisplay = document.querySelector('#returning-user') as HTMLDivElement | null;
const userNameDisplay = document.querySelector('#user') as HTMLDivElement | null;

// Imports
import { LoyaltyUser, Permissions } from './enums';
import { Review } from './interfaces';

// Show review total
export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = isLoyalty === LoyaltyUser.GOLD_USER ? '⭐' : '';
    if (reviewTotalDisplay) {
        reviewTotalDisplay.innerHTML = `${value} review${makeMultiple(value)} | last reviewed by ${reviewer} ${iconDisplay}`;
    }
}

// Populate user data
export function populateUser(isReturning: boolean, userName: string) {
    if (returningUserDisplay) {
        returningUserDisplay.innerHTML = isReturning ? 'back' : '';
    }
    if (userNameDisplay) {
        userNameDisplay.innerHTML = userName;
    }
}

// Show details (price display)
export function showDetails(value: boolean | Permissions, element: HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = `${price}/night`;
        element.appendChild(priceDisplay);
    }
}

// Handle pluralization
export function makeMultiple(value: number): string {
    return value !== 1 ? 's' : '';
}

// Get top two reviews
export function getTopTwoReviews(reviews: Review[]): Review[] {
    return [...reviews].sort((a, b) => b.stars - a.stars).slice(0, 2);
}
