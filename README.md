# **Full Stack Real-Time Chat Application**
## **Overview**
A feature-rich, real-time chat app built using React and Firebase. It supports instant messaging, file sharing, user management, and more. The app is designed to scale with future features like encryption, blockchain messaging, and AI-based enhancements.

## **Features**
**Firebase Authentication**: Secure user sign-up and login.

**Real-Time Messaging**: Messages sent and received instantly via Firestore.

**Image Sharing**: Share images seamlessly within chats.

**User Blocking**: Block users to prevent unwanted messages.

**Search and Add Users**: Easily find and add users to chat.

## **Setup Instructions**
Prerequisites

**Node.js**: Download here

**npm**: Comes bundled with Node.js

**Installation Steps**
### **Clone the repository:**
```
git clone https://github.com/Destroyerg0d/TEACUPPP
cd TEACUPPP
```
### **Install dependencies:**

RUN THESE COMMANDES ONE BY ONE IN THE TEACUPP DIRECTORY
```
npm install
npm install react react-dom
npm install firebase
npm install react-router-dom
npm install react-toastify
npm install emoji-picker-react
npm install zustand
npm install axios
npm install @mui/material @emotion/react @emotion/styled
npm install dotenv
npm install pm2 -g
```
### **Set up Firebase:**

Create a Firebase project and set up Authentication, Firestore, and Storage.
Create a .env file in the root folder with the following details:
```
REACT_APP_API_KEY=<your-firebase-api-key>
REACT_APP_AUTH_DOMAIN=<your-auth-domain>
REACT_APP_PROJECT_ID=<your-project-id>
REACT_APP_STORAGE_BUCKET=<your-storage-bucket>
REACT_APP_MESSAGING_SENDER_ID=<your-messaging-sender-id>
REACT_APP_APP_ID=<your-app-id>
```
### **Start the development server:**
```
npm start
```
The app will run at http://localhost:3000/.

## **Roadmap**

### **Current Features:**

**North Indian Theme:** Implementing a visually appealing, traditional North Indian UI theme.

**Enhanced File Sharing:** Support for sharing photos and videos.

### **Upcoming Features:**

**End-to-End Encryption:** Secure conversations with message encryption.

**Live Location Sharing:** Share real-time locations securely.

**File Sharing of All Types:** Support for .doc, .pptx, .zip, and more.

**Language Translator:** Real-time translation for every Indian language.

**Offline Messaging:** Messages sent offline will be delivered once reconnected.

**Whiteboard & Video Calls:** Seamless video calls and collaborative whiteboard for online meetings.

### **Future Enhancements:**

**Blockchain Messaging:** Decentralized, ultra-secure messaging using blockchain.

**AI Fact Checking & News:** Real-time fact-checking and curated news.

**AI Chat:** Smart AI chatbots to enhance user experience.

## **Contributing**

Feel free to fork the project, make your changes, and submit a pull request. Contributions are always welcome!

## **License**
This project is licensed under the MIT License - see the LICENSE file for details.
