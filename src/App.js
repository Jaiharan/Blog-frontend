import './App.css';
import {Routes, Route} from 'react-router-dom'
// import Header from './components/Header';
// import Post from './components/Post';
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { UserContextProvider } from './components/UserContext';
import CreatePost from './components/CreatePost';
import NotFound from './components/NotFound';
import PostPage from './components/Postpage';
import EditPost from './components/EditPost';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/create' element={<CreatePost/>}/>
          <Route path='/post/:id' element={<PostPage/>}/>
          <Route path='/edit/:id' element={<EditPost/>}/>
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
