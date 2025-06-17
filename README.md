# Travel Agency Application

This project contains a full-stack travel agency application with a React frontend and a Node.js/Express backend.

## Project Structure

- `frontend/` - React app (Vite)
- `backend/` - Node.js/Express API

## Development (Locally or Codespaces)

### Frontend
```powershell
cd frontend
npm install
npm run dev
```

### Backend
```powershell
cd backend
npm install
npm run dev
```

## Docker

Build and run frontend:
```powershell
docker build -t travel-agency-frontend ./frontend
docker run -p 3000:80 travel-agency-frontend
```

Build and run backend:
```powershell
docker build -t travel-agency-backend ./backend
docker run -p 5000:5000 travel-agency-backend
```

## GitHub Actions CI/CD
- On every push or PR to `main`, the workflow in `.github/workflows/ci-cd.yml` will build and test both frontend and backend, and build Docker images.

## Codespaces
- Open in Codespaces for a ready-to-code environment. Ports 3000 (frontend) and 5000 (backend) are forwarded.
