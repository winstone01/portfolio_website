'use strict';

// DOM ELEMENTS
const loanAmount = document.getElementById('loan_amount');
const interestRate = document.getElementById( 'interest_rate' );
const months = document.getElementById( 'months_to_pay' );

function calculateLoan() {
    let interest = 0;
    let monthlyPayment = 0;
    interest = ( loanAmount.value * interestRate.value * 0.01 ) / months.value;
    // console.log( interest );
    monthlyPayment = ( loanAmount.value / months.value ) + interest;
    // console.log( monthlyPayment );
    document.getElementById('payment').innerHTML = ` Monthly Payments will be : £${monthlyPayment.toFixed(2)}`;
    
    
}