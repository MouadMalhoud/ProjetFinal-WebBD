Full stack Internship website 

This project was made with the MERN stack (MongoDB, ExpressJS, ReactJS, Node.js). It allows users to sign in and to register (students / employer). If the user is an employee he can create internships.

Implementation Results:
• Navigation Bar: All features have been added. I've created a dynamic navigation bar that checks whether a student or an employer is logged in.

• Footer: I've added the last modification date and teacher information.

• Static Pages: All static pages have been implemented, and all information from text files has been added to the static pages.

• Add Internship: All features have been added, and only employers can see this page in the navigation bar.

• Available Internships: Everything has been added except the ability to edit the internship as an employer.

• Add a Student: Not necessary.

• Registration: Everything has been added.

• Login: Everything has been added.



Libraries Used:

Backend:

• BcryptJS: Used to hash passwords for secure storage in the database.

• Cors: Allows efficient communication between the frontend and backend.

• Validator: Validates whether an email is real or fake for the registration process.



Frontend:

• React-Redux: Used for global state sharing in React, which allowed knowing if a user is logged in and accessing their information since it was stored in the global state.

• React-persist: Stores react-redux states in local storage so that the state persists after a refresh.

• React-Routes: Used for multi-page navigation, avoiding a single-page application (SPA) approach.

Hosting:
Backend: Backend hosting was done using a service called Render, where I simply linked it to my GitHub repository and added my environment variables to the hosting.
Frontend: Frontend hosting was done using a service called Vercel, which made it easy by linking my GitHub repository and selecting my repository.





