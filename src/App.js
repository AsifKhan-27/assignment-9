import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      errorElement:<ErrorPage></ErrorPage>,
      element:<Main></Main>,
      children: [
        {
          path:'/',
          loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path:'/quiz/:id',
          // loader: ()=>fetch(`https://openapi.programming-hero.com/api/quiz/${id}`),
          element:<Quiz></Quiz>
        },
        {
          path:'/statistics',
          loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
