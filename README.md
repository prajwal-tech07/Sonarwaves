# Sonic Scan Healthcare

Sonic Scan Healthcare is a React-based web application designed to provide early health alerts by scanning specific body organs. The application uses a clean and responsive UI built with **React**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Organ Scanning**: Users can select an organ (e.g., Kidney, Lungs, Neck, Abdomen, Heart) and perform a simulated scan.
- **Detailed Information**: Each organ has a dedicated page with:
  - Description of the organ.
  - Common symptoms of issues related to the organ.
  - Preventive measures to maintain organ health.
- **Responsive Design**: Fully responsive UI for desktop and mobile devices.
- **Smooth Navigation**: Built with React Router for seamless navigation between pages.
- **Modern UI**: Styled with Tailwind CSS for a clean and modern look.

## Technologies Used

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Build Tool**: Vite

## Folder Structure

```
nmit_project/
├── .bolt/                 # Configuration for the project template
├── src/                   # Source code
│   ├── assets/            # Images for organs and scans
│   ├── components/        # React components
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Entry point for the React app
│   ├── index.css          # Tailwind CSS styles
│   └── vite-env.d.ts      # Vite environment types
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation (this file)
```

## How to Run the Project

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:5173
   ```

### Build for Production

To build the project for production, run:

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## Future Enhancements

- Add real-time scanning functionality using external APIs.
- Include more organs and detailed health insights.
- Integrate user authentication for personalized health tracking.

---
