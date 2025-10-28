# Letters Vault

Letters Vault is a minimalist, mobile-friendly Next.js application that provides a secure way to store and access letters. The application features a password gate for authentication, ensuring that only authorized users can access the vault.

## Features

- **Password Authentication**: Users must enter a password to access the vault.
- **Responsive Design**: The app is designed to be mobile-friendly, providing a seamless experience on all devices.
- **Tailwind CSS**: Utilizes Tailwind CSS for styling, allowing for a modern and clean UI.

## Project Structure

```
letters-vault
├── app
│   ├── globals.css          # Global styles including Tailwind CSS
│   ├── layout.tsx           # Main layout for the application
│   ├── page.tsx             # Home page of the application
│   ├── login
│   │   └── page.tsx         # Login page for password authentication
│   └── vault
│       └── page.tsx         # Vault page for displaying letters
├── components
│   ├── PasswordGate.tsx      # Component for handling password authentication
│   ├── Header.tsx            # Header component for navigation
│   └── ui
│       ├── Button.tsx        # Reusable button component
│       └── Input.tsx         # Reusable input component
├── lib
│   ├── auth.ts               # Utility functions for authentication
│   └── utils.ts              # Additional utility functions
├── public
│   └── favicon.ico           # Favicon for the application
├── package.json              # npm configuration file
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
└── README.md                 # Project documentation
```

## Getting Started

To get started with the Letters Vault application, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd letters-vault
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.