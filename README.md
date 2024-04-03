

## Installation

1. Clone the repository:

git clone https://github.com/yourusername/your-repository.git

2. Navigate to the project directory:

cd your-repository


3. Install server dependencies:

cd server
npm install


4. Install client dependencies:

cd client
npm install



## Configuration

1. Create a `.env` file in the server directory:

cd ../server
touch .env


2. Add environment variables to the `.env` file:


DB=your-mongodb-connection-string
JWTPRIVATEKEY=your-jwt-secret

 
3. Replace `your-mongodb-connection-string` with your MongoDB connection string, and `your-jwt-secret` with your JWT secret.

## Usage

1. Start the server:

cd ../server
nodemon index.js
 

2. Start the client:

cd ../client
npm run dev


3. Open your web browser and visit http://localhost:3000 to view the application.


Thankyou :)
```
