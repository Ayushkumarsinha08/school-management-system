# School Management Application

A Node.js-based web application for managing school data with functionality to add schools, list schools, and fetch schools based on geographic coordinates (latitude and longitude).

## Features
- Add new school information
- List all schools stored in the database
- Fetch nearby schools based on latitude and longitude
- Uses MySQL as the database
- Deployed on **Vercel**

---

## Technologies Used
- **Node.js** - Backend framework
- **Express.js** - Web framework
- **EJS** - Templating engine
- **MySQL** - Database
- **dotenv** - Environment variable management

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system
- [MySQL](https://www.mysql.com/) installed and running
- Vercel CLI (optional, for deployment)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Ayushkumarsinha08/school-management-system.git
   cd school-management



Routes
Home Page
GET /
Displays the home page with options to add schools or list schools.

Add School
GET /addSchool
Displays a form to add new school data.

POST /addSchool
Submits the form data to the backend and stores it in the MySQL database.

List Schools
GET /listSchool
Fetches and displays all schools from the database.

Fetch Schools by Location
POST /listSchool
Fetches schools near a specified longitude and latitude sent via POST request.



school-management/
├── views/
│   ├── home.ejs         # Homepage template
│   ├── add.ejs          # Add school form template
│   ├── list.ejs         # List schools or fetch by location
├── routes/
│   ├── schoolRoutes.js  # All app routes
├── public/
│   ├── css/             # Static CSS files
│   ├── js/              # Static JavaScript files
├── app.js               # Main server file
├── .env                 # Environment variables
├── package.json         # Project metadata and dependencies
├── README.md            # Documentation


Database Schema
The database contains the following schema:

Table: schools
Column	Type	Description
id	INT (Primary Key)         	Unique ID for each school
name	VARCHAR(255)            	Name of the school
address	TEXT	                  Address of the school
latitude	FLOAT	                Geographic latitude of the school
longitude	FLOAT	                Geographic longitude of the school


Usage Instructions
Add School
Navigate to "/addSchool".
Fill in the school details in the form (name, address, latitude, longitude).
Submit the form to save the school data.
List Schools
Navigate to /listSchool to view all schools stored in the database.
Fetch Schools by Location
On the "/listSchool" page, input latitude and longitude coordinates.
Click the button to fetch nearby schools.


Future Improvements
Add user authentication for better security.
Implement pagination for the school listing page.
Add the ability to edit or delete school data.
Integrate with Google Maps API for location-based services.


For questions or suggestions, feel free to reach out:
Email: ayush.kr.sinha.0.8@gmail.com
GitHub: Ayushkumarsinha08


