import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import AuthCallbackPage from './pages/authCallbackPage/AuthCallbackPage';
import './App.css'
import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import MainLayout from './layout/MainLayout';
import ChatPage from './pages/chatPage/ChatPage';
import AlbumPage from './pages/albumPage/AlbumPage';


function App() {

  return ( 
    <>
      <Routes>
      <Route path='/sso-callback' element={<AuthenticateWithRedirectCallback  signInForceRedirectUrl={"/auth-callback"}/>} />
      <Route path='/auth-callback' element={<AuthCallbackPage />} />

      <Route element={<MainLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='/albums/:albumId' element={<AlbumPage />} />
      </Route>
      </Routes>
     
    </>
  )
}

export default App

