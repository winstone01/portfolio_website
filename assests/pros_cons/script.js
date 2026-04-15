'use strict';

function submitTopic ()
{ 
   const topicInput = document.getElementById( 'topicInput' );
   const topic = topicInput.value.trim();
   if ( topic === '' )
   {
      alert( `Please enter a topic before proceeding...` );
      return;
   }

   document.getElementById( 'topicSection' ).style.display = 'none';
   document.getElementById( 'appContent' ).style.display = 'block';
   document.getElementById( 'topicTitle' ).textContent = topic;

};

function addItem ( type )
{ 
   const input = document.getElementById( 'itemInput' );
   const text = input.value.trim();
   if ( text === '' ) return;

   renderItem( text, type );
   input.value = '';
   updateScore();
};

function renderItem ( text, type )
{ 
   const li = document.createElement( 'li' );
   li.textContent = text;
   const deleteBtn = document.createElement( 'button' );
   deleteBtn.textContent = 'Delete';
   deleteBtn.classList.add( 'delete_btn' );
   deleteBtn.onclick = () =>
   { 
      li.remove();
      updateScore;
   };
   li.appendChild( deleteBtn );
   document.getElementById( type + 'List' ).appendChild( li );
};

function updateScore ()
{ 
   const prosCount = document.getElementById( 'prosList' ).children.length;
   const consCount = document.getElementById( 'consList' ).children.length;
   const scoreboard = document.getElementById( 'scoreBoard' );

   let verdict = `Let's Decide`;
   if ( prosCount > consCount ) verdict = `Pro's Win !`;
   else if ( consCount > prosCount ) verdict = `Cons's Win ! `;
   else if ( prosCount === consCount ) verdict = `It's a tie`;
   scoreboard.innerHTML = `Pro's ${prosCount} | Con's ${consCount} <br> ${verdict} `;
};