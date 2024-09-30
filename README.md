Full Stack Real-Time Chat Application
Overview
A feature-rich, real-time chat app built using React and Firebase. It supports instant messaging, file sharing, user management, and more. The app is designed to scale with future features like encryption, blockchain messaging, and AI-based enhancements.

Features
Firebase Authentication: Secure user sign-up and login.
Real-Time Messaging: Messages sent and received instantly via Firestore.
Image Sharing: Share images seamlessly within chats.
User Blocking: Block users to prevent unwanted messages.
Search and Add Users: Easily find and add users to chat.
Setup Instructions
Prerequisites
Node.js: Download here
npm: Comes bundled with Node.js
Installation Steps
Clone the repository:

bash
Copy code
git clone https://github.com/Destroyerg0d/TEACUPPP
cd TEACUPPP
Install dependencies:

bash
Copy code
npm install
Set up Firebase:

Create a Firebase project and set up Authentication, Firestore, and Storage.
Create a .env file in the root folder with the following:
bash
Copy code
REACT_APP_API_KEY=<your-firebase-api-key>
REACT_APP_AUTH_DOMAIN=<your-auth-domain>
REACT_APP_PROJECT_ID=<your-project-id>
REACT_APP_STORAGE_BUCKET=<your-storage-bucket>
REACT_APP_MESSAGING_SENDER_ID=<your-messaging-sender-id>
REACT_APP_APP_ID=<your-app-id>
Start the development server:

bash
Copy code
npm start
The app will run at http://localhost:3000/.

Roadmap
Current Features
North Indian Theme: Implementing a visually appealing, traditional North Indian UI theme.
Enhanced File Sharing: Support for sharing photos and videos.
Upcoming Features
End-to-End Encryption: Ensuring secure conversations with message encryption.
Live Location Sharing: Allow users to share real-time locations securely.
File Sharing of All Types: Including .doc, .pptx, .zip, and more.
Language Translator: Real-time translation for every Indian language.
Offline Messaging: Send messages offline and automatically deliver them once reconnected.
Whiteboard and Video Calls: Seamless video calls and collaborative whiteboard for online meetings.
Future Enhancements
Blockchain Messaging: Decentralized, ultra-secure messaging using blockchain.
AI Fact Checking & News: Integrated AI to fact-check and curate real-time news.
AI Chat: Smart AI chatbots to enhance user experience.
Contributing
Feel free to fork the project, make your changes, and submit a pull request. Contributions are always welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.
