## Phone Book Listing App

This is a repo that is to serve as the answer for the code challenge from CoderByte which dealt with building
a simple phone book app. I tried to make the naming of the components similar to what was listed in the CoderByte challenge.
However, there was some limmitations with the CoderByte, and thought that it might be more instructive of my knowledge
and ability of React to build a similar app using a more modern implementation of React.

#### Things to Note

You will notice that the CoderByte challenge was not setup to use classes in React limiting the availability of state.
This particular challenge lent itself well to the use of state given the form data that a user would input. Maintaining
state by the use of classes allows the application to manage user input data in a central location (App.js) and pass
it down to subsequent child compoenents that may need that data in order to render the appropriate properties of
the person object.

#### Refactoring

There is a lot of opportunity here to improve. I won't mention the glaringly obvious things around styling.
The things to refactor:

- Clearing the input field after the form is submitted
- Using HTLM 5 validation for the phone number field to make sure it is a number and limited to a certain number of characters
- Using HTLM 5 attributes to require data in input fields before submition
- Add a focus attribute to highlight the input field
- Add attributes to html elements for accessibilty
- And of course, add tests to ensure functionality and edge cases are accounted for
