# Promptopia

Promptopia is a social platform for sharing and discovering creative prompts. Users can authenticate via Google, create, edit, and delete prompts, and view prompts from all users.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Things to Implement](#things-to-implement)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Authentication:** Users can authenticate using Google via NextAuth.
- **Database:** Prompts are stored in a MongoDB database.
- **Retrieval:** Prompts can be retrieved for all users or just the authenticated user.
- **Editing and Deleting:** Users can edit and delete their own prompts.

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone hhttps://github.com/arshakshan/Prompt-sharing-platform.git
    cd app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root of the project and add your MongoDB connection string and Google OAuth credentials.

    ```plaintext
    MONGODB_URI=your-mongodb-uri
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    NEXTAUTH_URL=http://localhost:3000
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### Authentication

- Click on the "Sign in with Google" button to authenticate.
- Once authenticated, you can create, edit, and delete your own prompts.

### Creating Prompts

- Navigate to the create prompt page.
- Enter your prompt and submit.

### Editing and Deleting Prompts

- Navigate to your profile.
- Click on the edit or delete buttons on your prompts.

## Things to Implement

### Search Functionality

- Implement search functionality to search by prompt, user, or tag.

### Click on Tag

- Implement functionality to click on a tag and view all prompts associated with that tag.

### View Other User Profiles

- Implement functionality to view profiles of other users and see their prompts and information.

## Contributing

Contributions are welcome! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch:

    ```bash
    git checkout -b feature/YourFeature
    ```

3. Make your changes and commit them:

    ```bash
    git commit -m 'Add some feature'
    ```

4. Push to the branch:

    ```bash
    git push origin feature/YourFeature
    ```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
