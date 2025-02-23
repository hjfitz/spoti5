# Spotify Top Listened (The Fifth)

Spoti5 is the fifth in a series of rewrites, which allows users to view top tracks and artists in their Spotify history.

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:hjfitz/spoti5.git
   cd spoti5
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Spotify API credentials:

   \`\`\`
   SPOTIFY_CLIENT_ID=
   SPOTIFY_CLIENT_SECRET=
   SPOTIFY_REDIRECT_URI=
   SPOTIFY_SCOPES=
   \`\`\`

   **Note:** You'll need to create a Spotify Developer account and register your application to get these credentials.

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

