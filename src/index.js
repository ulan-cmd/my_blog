import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom';
import MainPage from './pages/main';
import ArticlePage from './pages/article';
import TestPage from './pages/test';
import BlogsCreatePage from './pages/admin/blogs/blogsCreatePage/BlogsCreatePage';

const router = createBrowserRouter([
    {
        path:"/", // localhost:3000
        element: <MainPage/> 
    },
    {
        path:"article/:id", // localhost:3000/article/3
        element: <ArticlePage/>
    }, 
    {
        path:'test', // localhost:3000/test
        element: <TestPage/>
    },
    {
        path:'admin/blogs/create',
        element: <BlogsCreatePage/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);
