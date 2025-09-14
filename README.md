# AddressBook Application

A guide for building a full-stack application for managing contacts, built with React, Express, and PostgreSQL.

Project Structure:

  * Frontend (React + Vite)
  * Backend (Express.js)
  * Tests (Vitest)
  * PostgreSQL running in Docker

-----

## **Project Overview**

This is an **Address Book App** with a **React frontend** (Vite), an **Express.js backend**, and a **PostgreSQL database** running inside a **Docker container**.

The application will have two pages:

1.  **Form Input Page** – Users can enter **name, email, phone, and address**.
2.  **Data Display Page** – Lists all saved contacts.

## **Project Structure**

```
addressbook/
│── frontend/          # React frontend (Vite)
│ │── public
│ │── src
│ │ │── AddContact.jsx
│ │ │── App.css
│ │ │── ContactList.jsx
│ │ │── index.css
│ │ │── main.jsx
│ │── eslint.config.js
│ │── index.html
│ │── package-lock.json
│ │── package.json
│ │── postcss.config.js
│ │── README.md
│ │── tailwind.config.js
│ │── vite.config.js
│── backend/           # Express.js backend with PostgreSQL
│ │── .env
│ │── docker-compose.yml
│ │── package-lock.json
│ │── package.json
│ │── server.js
│── tests/             # Vitest test scripts
│ │── backend
│ │ │── api.test.js
│ │── frontend
│ │ │── AddContact.test.jsx
│ │ │── ContactList.test.jsx
│ │── integration
│ │ │── app.test.js
│ │── package-lock.json
│ │── package.json
│ │── test.js
│ │── README.md
│── infra/             # Terraform script
│ │── main.tf
│── docker-compose.yml # Docker configuration for PostgreSQL
│── .env               # Environment variables
│── package.json       # Project dependencies
│── Jenkinsfile
│── deploy_blue_green.sh
│── README.md          # Project documentation
```

-----

## **Local Development Setup**

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/Ibrocold/Addressbook.git
    cd Addressbook
    ```

2.  **Ensure Docker is Running**
    You must have the Docker engine installed and running on your machine.

3.  **Run PostgreSQL**
    Start the PostgreSQL database container using Docker Compose.

    ```bash
    cd backend
    docker-compose up -d
    ```

4.  **Run the Backend Server**
    In the same `backend` directory, install dependencies and start the Express server. This will occupy the current terminal.

    ```bash
    npm install
    node server.js
    ```

5.  **Run the React Frontend**
    Open a **new terminal**, navigate to the `frontend` directory, install dependencies, and start the Vite development server.

    ```bash
    cd frontend
    npm install
    npm run dev
    ```

6.  **Run Tests with Vitest (Optional)**
    To run the test suite, open another terminal, navigate to the `tests` directory, and run the test command.

    ```bash
    cd tests
    npm install

    # Run all tests:
    npm test

    # Run specific test groups:
    npm run test:frontend
    npm run test:backend
    npm run test:integration
    ```

7.  **Open the App**
    Navigate to `http://localhost:5173` (or the port specified by Vite) in your web browser to use the application.
