import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/pages/homepage/HomePage";
import LoginPage from "./components/pages/loginpage/LoginPage";
import NewMeetingPage from "./components/pages/newmeetingpage/NewMeetingPage";
import MeetingPage from "./components/pages/meetingpage/MeetingPage";
import EditMeetingPage from "./components/pages/editmeetingpage/EditMeetingPage";
import LocalView from "./global/LocalView";
import FloatingNotificationView from "./global/components/FloatingNotificationView";
import FloatingNotificationViewController from "./global/components/FloatingNotificationViewController";

export const notificationController = new FloatingNotificationViewController();

function App() {
    return (
        <div>
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
            <FloatingNotificationView  controller={notificationController}/>
        </div>
    )
}

export default App;
