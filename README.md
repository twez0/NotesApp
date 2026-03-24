# ToDay — Note Management Application

A simple and functional application for creating notes with category filtering and search. The project was created as part of an in-depth study of React Core and Hooks.

[Live demo](https://notes-app-opal-phi.vercel.app/)

![Main Screen](images/MainScreen.png)

## Key Features

- **CRUD operations**: Adding and deleting notes.
- **Persistence**: All data is saved to `localStorage` via a custom hook.
- **Smart search**:  Live search by title and text using Debounce (optimization of re-renders and performance).
- **Filtering**: Sorting notes by categories (Work, Personal, Study).
- **Modal windows**: Intuitive interface for adding tasks.

## Technologies

- **React 18** (Functional components)
- **TypeScript** (Strict typing of props and data)
- **Vite** (Fast project build)
- **SCSS** (Style architecture)
- **Custom Hooks** (Storage logic)

## How to run the project

1. Clone the repository:
    ```bash
    git clone https://github.com/twez0/NotesApp.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the project in development mode:
    ```bash
    npm run dev
    ```
