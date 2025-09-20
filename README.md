# Project Management Application

<img src="src/assets/note.png" alt="Project Icon" width="100" height="100">

A modern React-based project management application built with Vite and styled using Tailwind CSS. This application allows users to manage projects and associated tasks efficiently with a clean, intuitive interface.

## Features

- ✨ Create and manage multiple projects
- 📝 Add tasks to specific projects
- 🗑️ Delete projects and tasks
- 📅 Set project due dates
- 💫 Smooth transitions and modern UI
- 📱 Responsive design for various screen sizes

## Tech Stack

- **React** - Frontend library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Context** - State management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/EsmailKhaleel/project-management.git
```

2. Navigate to the project directory
```bash
cd project-management
```

3. Install dependencies
```bash
npm install
```

4. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default.

## Project Structure

```
project-management/
├── src/
│   ├── assets/         # Static assets
│   ├── Components/     # React components
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Application entry point
│   └── index.css      # Global styles
├── public/            # Public assets
└── package.json       # Project dependencies
```

## Features in Detail

### Project Management
- Create new projects with title, description, and due date
- View list of all projects in the sidebar
- Select and switch between different projects
- Delete existing projects

### Task Management
- Add tasks to specific projects
- View tasks associated with each project
- Delete completed tasks
- Clear task indication when no tasks exist

### UI/UX Features
- Responsive sidebar for project navigation
- Modal notifications for validation
- Clean and intuitive user interface
- Consistent styling with Tailwind CSS

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

[EsmailKhaleel](https://github.com/EsmailKhaleel)
