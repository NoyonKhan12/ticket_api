
# Ticket API

This project is a simple Support Ticket API built using Node.js, Express, TypeScript, and MongoDB (MongoDB Atlas). It allows users to create support tickets, ensuring that users can only submit one ticket within a 30-minute window.


## Features

- Create Support Ticket: Users can submit a support ticket with information such as userID, deviceID, and a description of their issue.
- Rate Limiting: If a user tries to submit another ticket within 30 minutes of their last request, an error message is returned.
- MongoDB Atlas: The application uses MongoDB Atlas for cloud-based database storage.


## Tech Stack

- **Node.js** - JavaScript runtime.
- **Express** - Web framework for Node.js.
- **TypeScript** - Strongly typed programming language that builds on JavaScript.
- **Mongoose** - Object Data Modeling (ODM) library for MongoDB.
- **MongoDB Atlas** - Cloud-hosted MongoDB.


## Prerequisites
Before you begin, make sure you have the following installed on your machine:

- **Node.js:** Install Node.js
- **MongoDB Atlas:** Create an account and set up a cluster: MongoDB Atlas
## Setup

- Clone the Repository

```bash
    git clone https://github.com/NoyonKhan12/ticket_api.git
    cd ticket_api
```


- Install Dependencies

```bash
    npm install
```

- Set Up Environment Variables
```bash
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
    PORT=3000
```

Make sure to replace the following:
- <username>: Your MongoDB Atlas username.
- <password>: Your MongoDB Atlas password.
- <dbname>: Your database name in MongoDB Atlas.


## Build and Run



```bash
    npm run build
    npm start
```

The server will start and listen on the port defined in the .env file (default is 3000).


## Endpoints
 Create Ticket

- URL: /support/create_ticket
- Method: POST
- Content-Type: application/json
- Payload:

Request
```bash
{
    "userID": "string",
    "date": "DateTime",
    "deviceID": "string",
    "queryText": "string"
}
```

Response

- Case 1:
    - Code: 200
    - Response
        ```bash
        {
            "data": {
                "_id": "<mongodb_document_id>"
            }
        }
        ```

- Case 2:
    - Code: 409
    - Response
        ```bash
       {
            "message": "You have already placed a support ticket. Please wait at least one hour before sending another request"
        }
        ```