# Zurich Portal

The Zurich Portal is a web application built with **Next.js**. It allows users to log in via Google OAuth2, view filtered user lists, and manage their sessions securely. The application leverages **NextAuth.js** for authentication, **Redux Toolkit** for state management, and **Axios** for API interactions.

---

## Features

- Google OAuth2 authentication
- Protected routes for authorized access
- Paginated user data fetching and filtering
- Email masking with toggle visibility
- Modular structure with reusable components
- Fully tested with Jest and React Testing Library

---

## Prerequisites

Before running the project, ensure the following are installed:

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)

---

## Installation

### Clone the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/your-repo/zurich-portal.git
cd zurich-portal
```

### Install Dependencies

After cloning the repository, install the required dependencies:

```bash
npm install
```

### Configure Environment Variables

Create a `.env.local` file in the root directory and add the following environment variables:

```env
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
NEXTAUTH_SECRET=<your-nextauth-secret>
```

- Replace `<your-google-client-id>` and `<your-google-client-secret>` with your Google OAuth2 credentials.
- Generate a random value for `NEXTAUTH_SECRET` using a command like `openssl rand -base64 32`.

---

## Running the Application

### Start the Development Server

To start the development server, run:

```bash
npm run dev
```

- The application will be available at `http://localhost:3000`.

### Access the Application

- Open your browser and navigate to `http://localhost:3000`.
- Log in using your Google account.

---

## Project Structure

The project is organized as follows:

```plaintext
zurich-portal/
├── pages/
│   ├── index.js          # Login page (landing page)
│   ├── users.js          # Protected user list page
│   ├── auth-error.js     # Error page for unauthorized access
│   ├── api/
│   │   └── auth/
│   │       └── [...nextauth].js  # NextAuth.js configuration
├── components/
│   ├── Header.js         # Reusable header component
│   ├── Footer.js         # Reusable footer component
│   ├── UsersList.js      # Component for displaying users
├── redux/
│   ├── store.js          # Redux store configuration
│   └── userSlice.js      # User slice for state management
├── services/
│   └── userService.js    # Axios service for fetching and filtering users
├── styles/
│   └── globals.css       # Global CSS styles
├── __tests__/
│   ├── userService.test.js  # Unit tests for user service
│   ├── usersList.test.js    # Unit tests for UsersList component
├── jest.config.js        # Jest configuration
├── README.md             # Project documentation
└── .env.local            # Environment variables (not committed)
```

---

## Testing

### Run Tests

To execute the tests, run:

```bash
npm test
```

### Testing Tools

- **Jest**: Used for unit testing.
- **React Testing Library**: Used for testing React components.

---

## Deployment

### Build the Project

To prepare the project for production, run:

```bash
npm run build
```

### Start the Production Server

Start the production server with:

```bash
npm start
```

---

## Troubleshooting

### Common Issues

1. **404 Error on `/users`**

   - Verify that the `users.js` file is in the `pages` directory.
   - Restart the development server after adding or updating routes.

2. **Environment Variable Errors**
   - Check your `.env.local` file for correct variable names and values.
