'use strict';

const chart = document.querySelector( '#chart' ).getContext( '2d' );


//  a new instance 
new Chart( chart, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'BTC',
        data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
        borderColor: 'red',
        borderWidth: 2
      },
      {
        label: 'ETH',
        data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
        borderColor: 'blue',
        borderWidth: 2
      },
    ]
  },
  options: {
    responsive: true
  }
} )

//  show or hide sidebar/menu 
const menuBtn = document.querySelector( '#menu_btn' );
const closeBtn = document.querySelector( '#close_btn' );
const sidebar = document.querySelector( 'aside' );

menuBtn.addEventListener( 'click', () =>
{ 
  sidebar.style.display = 'block';
} );

closeBtn.addEventListener( 'click', () =>
{ 
  sidebar.style.display = 'none';
} );


// change theme 
const themeBtn = document.querySelector( '.theme_btn' );

themeBtn.addEventListener( 'click', () =>
{ 
  document.body.classList.toggle( 'dark_theme' );
  themeBtn.querySelector( 'span:first-child' ).classList.toggle( 'active' );
  themeBtn.querySelector( 'span:last-child' ).classList.toggle( 'active' );
} );