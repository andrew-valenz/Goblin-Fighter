##Plan
HTML elements (page load)
• Input for adding new chicks with a button) => form
• Span for tracking hatched chicks
• Span for tracking farmer hp
• Chicks list (div el)

State
• Array of chicks (object with id, name hp)
• Number of hatched chicks
• Farmer hp
• currentID (in order to create new chicks with ids)
Events
• Each chick is clickable
• On click...
◦ Possible decrement the chicks ho
◦ Possibly decrement the farmers hp
◦ Possibly increment the hatch chicks
◦ Update the DOM with new chick and farmer hp and hatched chicks state
• New chick form (on submit)
◦ User supplied name & submit form
◦ Make new chick object
◦ Add object the chicks array
◦ “Update list display”
• Clear out the list DOM
• Loop through the chicks
• Render a new chick element for each item
• Append each el to the container element (going to be using a for loop)
Functions
• displayChicks - clear out the list and render the chick el for each item
• renderChick(chick)- create a chick el for the specific chick object
• chickClickHandler - take care of the game logic when the chicks are clicked

Slices

1. Rendering the chicks list to the page
2. From to create new chicks (render to page)
3. Gamification (resulting impacts to HP on user clicks)
