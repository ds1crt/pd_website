Before you begin, ensure you have the following installed on your machine:

Node.js and npm: You can download them from nodejs.org. npm is the Node Package Manager and comes with Node.js.
Firebase CLI: You'll need this to run the backend functions locally. You can install it with npm install -g firebase-tools.

1. Frontend Setup
Navigate to the project directory:
Open your terminal and change your directory to the pd-website-react-app folder within the cloned repository.

Bash

cd pd-website-react-app
Install dependencies:
Run the following command to install all the necessary packages for the React application:

Bash

npm install
Configure Firebase:
You'll need to create your own Firebase project and get your own API keys.

Go to the Firebase Console and create a new project.
In your project, go to Project Settings and under the "General" tab, scroll down to "Your apps".
Click on the web icon (</>) to add a new web app.
You'll be given a firebaseConfig object. Copy these values.
In your code editor, open the file src/firebase/firebaseConfig.js.
Replace the placeholder values in the firebaseConfig object with your own keys.
Start the development server:
Once the dependencies are installed and Firebase is configured, you can start the local development server:

Bash

npm run dev
This will start the website, and you can view it in your browser at the address provided in the terminal (usually http://localhost:5173).

2. Backend Setup (Firebase Functions)
The project also includes backend cloud functions. To run these locally, you'll need to set them up as well.

Navigate to the functions directory:
From the pd-website-react-app directory, move into the functions folder:

Bash

cd functions
Install dependencies:
Install the dependencies for the cloud functions:

Bash

npm install
Run the Firebase emulators:
    To run the functions locally, you can use the Firebase Local Emulator Suite. From the functions directory, run:

Bash

firebase emulators:start --only functions
This will start the local emulator for your cloud functions.

By following these steps, you should have both the frontend website and the backend functions running on your local machine.
