# Ecopulse Backend

Ecopulse is a backend application designed to manage user activities and provide AI functionalities while calculating carbon footprints based on user interactions. This project is built using Node.js and Express.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/ecopulse-backend.git
   ```

2. Navigate to the project directory:
   ```
   cd ecopulse-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables.

## Usage

To start the server, run:
```
node server.js
```
The server will start on the specified port in your `.env` file.

## API Endpoints

### Authentication Routes
- `POST /api/auth/register`: Register a new user.
- `POST /api/auth/login`: Log in an existing user.
- `GET /api/auth/check`: Check if the user is authenticated.

### Activity Routes
- `POST /api/activities`: Create a new activity.
- `GET /api/activities`: Retrieve all activities.
- `PUT /api/activities/:id`: Update an existing activity.
- `DELETE /api/activities/:id`: Delete an activity.

### AI Routes
- `POST /api/ai/process`: Process AI-related requests.

## Environment Variables

The following environment variables are required:
- `PORT`: The port on which the server will run.
- `DB_CONNECTION`: The connection string for the database.
- `API_KEY`: Your API key for external services.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.