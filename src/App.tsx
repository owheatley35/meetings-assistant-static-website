import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import LoginPage from "./pages/loginpage/LoginPage";
import NewMeetingPage from "./pages/newmeetingpage/NewMeetingPage";
import MeetingPage from "./pages/meetingpage/MeetingPage";
import EditMeetingPage from "./pages/editmeetingpage/EditMeetingPage";
import LocalView from "./global/LocalView";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/new-meeting" element={<NewMeetingPage/>} />
                <Route path="/meeting/:meeting_id" element={<MeetingPage/>} />
                <Route path="/update-meeting/:meeting_id" element={<EditMeetingPage/>} />

                <Route path="/local" element={<LocalView/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
