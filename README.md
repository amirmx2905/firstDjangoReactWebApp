# Django React Web Application

A full-stack web application built with Django REST Framework and React. This project implements a secure note-taking application with user authentication, allowing users to create, view, and delete personal notes.

## Features

- JWT authentication system
- User registration and login
- Protected routes
- PostgreSQL database integration
- Create, read, and delete notes
- Modern UI with Tailwind CSS
- Responsive design
- Environment variables configuration

## Project Structure

```
firstDjangoReactWebApp/
├── backend/              # Django REST API
│   ├── api/              # Django app
│   └── backend/          # Django project settings
├── frontend/             # React application
│   ├── src/              # Source code
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   └── ...           # Other files
│   └── ...               # Config files
├── env/                  # Virtual environment
├── .env                  # Environment variables
├── .env.example          # Example environment variables
├── requirements.txt      # Python dependencies
└── .gitignore            # Git ignore file
```

## Prerequisites

- Python 3.10+
- Node.js 18+
- npm or yarn
- PostgreSQL (optional, can use SQLite)

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <repository-url>
cd firstDjangoReactWebApp
```

### 2. Set Up Environment Variables

```sh
cp .env.example .env
```

Edit the `.env` file with your database credentials and other configuration:

```
# Frontend configuration
VITE_API_URL="http://127.0.0.1:8000"

# Database configuration (PostgreSQL)
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="your_db_name"
DB_USER="your_db_user"
DB_PASSWORD="your_db_password"

# Django configuration
ALLOWED_HOSTS="localhost,127.0.0.1"
CORS_ALLOWED_ORIGINS="http://localhost:5173,http://127.0.0.1:5173"
```

### 3. Set Up Backend

Create and activate a virtual environment:

```sh
# Create virtual environment
python -m venv env

# Activate virtual environment
# On macOS/Linux:
source env/bin/activate
# On Windows:
env\Scripts\activate
```

Install the required Python packages:

```sh
pip install -r requirements.txt
```

Apply the database migrations:

```sh
cd backend
python manage.py migrate
```

Create a superuser (for admin access):

```sh
python manage.py createsuperuser
```

Start the Django server:

```sh
python manage.py runserver
```

The Django API will now be running at `http://127.0.0.1:8000/`.

### 4. Set Up Frontend

Open a new terminal and navigate to the frontend directory:

```sh
cd ../frontend
```

Install the required Node.js packages:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

The React application will now be running at `http://localhost:5173/`.

## Using the Application

- Register a new user account at `http://localhost:5173/register`
- Log in with your credentials at `http://localhost:5173/login`
- Create, view, and delete notes on the home page
- Log out when finished at `http://localhost:5173/logout`

## API Endpoints

- **POST** `/api/user/register/`: Register a new user
- **POST** `/api/token/`: Obtain JWT tokens
- **POST** `/api/token/refresh/`: Refresh JWT token
- **GET** `/api/notes/`: List user's notes
- **POST** `/api/notes/`: Create a new note
- **DELETE** `/api/notes/delete/{id}/`: Delete a specific note

## Admin Interface

Access the Django admin interface at `http://127.0.0.1:8000/admin/` using the superuser credentials you created earlier. Here, you can manage users, notes, and other application data.

## Troubleshooting

- **CORS errors**: Make sure the Django server is running and CORS is correctly configured in the settings.
- **Authentication issues**: Check that your JWT tokens are being correctly stored and sent with requests.
- **Database connection errors**: Verify your PostgreSQL connection details in the `.env` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Django REST Framework](https://www.django-rest-framework.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Simple JWT](https://github.com/davesque/django-rest-framework-simplejwt)
- [Vite](https://vitejs.dev/)