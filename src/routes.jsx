import { Home, About, Servizi, Progetti } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "chi siamo",
    path: "/about",
    element: <About />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Servizi",
    path: "/servizi",
    element: <Servizi />,
  },
  {
    icon: UserPlusIcon,
    name: "Progetti",
    path: "/progetti",
    element: <Progetti />,
  },

];

export default routes;
