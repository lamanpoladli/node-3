
import Home from "../pages/Home";
import MainRoot from "../pages/Mainroot";
import Authors from "../pages/Authors"
import AddAuthor from "../pages/AddAuthor";
import AuthorDetail from "../pages/AuthorDetail";
import EditAuthor from "../pages/EditAuthor"



export const ROUTES = [
    //Main Root - user side
    {
        path:'/',
        element:<MainRoot/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/authors',
                element: <Authors/>
            },
            {
                path:'/add-author',
                element: <AddAuthor/>
            },
            {
                path:'/authors/:id',
                element: <AuthorDetail/>
            },
            {
                path:'/authors/edit/:id',
                element: <EditAuthor/>
            }
        ]
    }
    
]