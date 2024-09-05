import Layout from '../layout/index.jsx';
import HomePage from '../pages/home/index.jsx';
import AboutPage from '../pages/about/index.jsx';
import NotFoundPage from '../pages/not-found/index.jsx';
import ImprintPage from '../pages/imprint/index.jsx';

export const routes = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "about",
				element: <AboutPage />,
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
	{
		path: "imprint",
		element: <ImprintPage />,
	},
];
