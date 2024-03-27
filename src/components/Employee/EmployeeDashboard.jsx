import React, { useEffect, useState } from 'react';
import './EmployeeDashboard.css';
import { Avatar, IconButton } from '@mui/material';
import { GridViewOutlined as GridViewOutlinedIcon, ThreePOutlined as ThreePOutlinedIcon, HomeOutlined as HomeOutlinedIcon, ForwardToInboxOutlined as ForwardToInboxOutlinedIcon, MedicalInformationOutlined as MedicalInformationOutlinedIcon, AccountCircleOutlined as AccountCircleOutlinedIcon, QuizOutlined as QuizOutlinedIcon, ExitToAppOutlined as ExitToAppOutlinedIcon, Message as MessageIcon, Notifications as NotificationsIcon, ChatOutlined as ChatOutlinedIcon } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom';
import { getUser } from '../../apiCalls';
import ReceivedTask from './ReceivedTask';
import RequestLeave from './RequestLeave';
import LeaveRequestStatus from './LeaveRequestStatus';
import EmployeeRequests from '../Manager/EmployeeRequests';
import CompletedTask from '../Manager/CompletedTask';
import ChatBody from '../Chatt/ChatBody';

function EmployeeDashboard() {
  const [user, setUser] = useState(null);
  const [showReceivedTaskPanel, setShowReceivedTaskPanel] = useState(false);
  const [showRequestLeave, setShowRequestLeave] = useState(false);
  const [showEmployeeRequests, setShowEmployeeRequests] = useState(false);
  const [showCompletedTask, setShowCompletedTask] = useState(false);
  const [showLeaveRequestStatus, setShowLeaveRequestStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await getUser();
        setUser(res.user);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    fetchUserDetails();
  }, []);

  const togglePanel = (panelName) => {
    setShowReceivedTaskPanel(panelName === 'receivedTask');
    setShowRequestLeave(panelName === 'requestLeave');
    setShowEmployeeRequests(panelName === 'employeeRequests');
    setShowCompletedTask(panelName === 'completedTask');
    setShowLeaveRequestStatus(panelName === 'leaveRequestStatus');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log('Uploaded file:', file);
  };

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="employee-dashboard-container">
      <div className="left-panel">
        <div className="logo">
          <label htmlFor="avatar-upload">
            <Avatar sx={{ width: 100, height: 80 }}><img height="100%" width="100%" src={user?.profile_image} alt="" /></Avatar>
            <span style={{ fontWeight: 'bold', color: 'white', marginLeft: '0.5rem' }}>{user?.name}</span>
            <input
              type="file"
              id="avatar-upload"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <div className="menu">
          <div className="menu-item" onClick={() => togglePanel('dashboard')}>
            <GridViewOutlinedIcon />
            <span>Dashboard</span>
          </div>
          <div className="menu-item" onClick={() => togglePanel('receivedTask')}>
            <ThreePOutlinedIcon />
            <span>Received Tasks</span>
          </div>
          <div className="menu-item" onClick={() => togglePanel('requestLeave')}>
            <HomeOutlinedIcon />
            <span>Request Leave</span>
          </div>
          <div className="menu-item" onClick={() => togglePanel('leaveRequestStatus')}>
            <ForwardToInboxOutlinedIcon />
            <span>Status</span>
          </div>
          <div className="menu-item">
            <MedicalInformationOutlinedIcon />
            <span>Health</span>
          </div>
          <div className="menu-item">
            <Link to="/chat" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ChatOutlinedIcon />
              <span>Chat</span>
            </Link>
          </div>
          <div className="menu-item">
            <AccountCircleOutlinedIcon />
            Profile
          </div>
          <div className="menu-item">
            <QuizOutlinedIcon />
            <span>F.A.Q</span>
          </div>
          <div className="menu-item" onClick={logout}>
            <ExitToAppOutlinedIcon />
            Log Out
          </div>
        </div>
      </div>
      <div className="content">
        <div className="navbar">
          <div className="icons">
            <IconButton>
              <MessageIcon />
            </IconButton>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
          </div>
        </div>
        <div className="right-panel">
          {showReceivedTaskPanel && <ReceivedTask />}
          {showRequestLeave && <RequestLeave />}
          {showEmployeeRequests && <EmployeeRequests />}
          {showCompletedTask && <CompletedTask />}
          {showLeaveRequestStatus && <LeaveRequestStatus />}
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
