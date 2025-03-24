import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Mindfulness from './pages/Mindfulness';
import BreathingExercises from './pages/BreathingExercises';
import Meditation from './pages/Meditation';
import Journaling from './pages/Journaling';

export const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "register",
    element: <Register />
  },
  {
    path: "dashboard",
    element: <Dashboard />
  },
  {
    path: "mindfulness",
    element: <Mindfulness />
  },
  {
    path: "breathing",
    element: <BreathingExercises />
  },
  {
    path: "meditation",
    element: <Meditation />
  },
  {
    path: "journal",
    element: <Journaling />
  }
];