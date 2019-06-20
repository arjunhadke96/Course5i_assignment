# Course5i_assignment
This file is an assignment for Course5i implementing a survey form facing the user. The front end is built with Angular, MaterializeCSS and the backend used is Firebase with the Firebase's Auth Module (under progress) and Database Module (under progress).


## Pages or Components
The pages containing the questions are implemented as Components under Angular framework and the navigation between those pages is handled with Business Logic written in Typescript in conjunction with Components.

The navigation state between the survey form's question is handled with a navState variable.

### Buttons

#### Next & Skip button
The Next button is visible on the page only if there is component available after the current visible component.

#### Back button
The Back button is visible on the page only if there is component available before the current visible component.

#### Save button
Save button functionality is to yet to be implemented and the functionality for the Save button will only work if the user is logged in and the user will be able to save the current progress of the questions he/she has answered.

#### Submit button
Submit button saves the responses for the current user to the Firebase's Database and navigates the user to a page where he/she can review his/her submitted responses and print them or save them as a PDF with the "Save as PDF" Button.


### Pending functionality
1. Login/Signup. 
2. Top bar Pagination on user facing screen.
3. Firebase (Backend) Connectivity.
4. Inline Form Validation (To make sure that the user enters a description with characters more than 20).
