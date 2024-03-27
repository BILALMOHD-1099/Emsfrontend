import React, { useEffect, useState } from "react";
import "./LeaveRequestStatus.css";
import { getleaveStatus } from "../../apiCalls";

const LeaveRequestStatus = () => {
  const [allRequests, setAllRequests] = useState([]);

  useEffect(() => {
    const fetchLeaveStatus = async () => {
      try {
        const res = await getleaveStatus();
        setAllRequests(res.leaves);
      } catch (error) {
        console.error("Error fetching leave status:", error);
      }
    };
    fetchLeaveStatus();
  }, []);

  return (
    <div className="leave-request-status">
      <h1>Leave Request Status</h1>
      <div className="status-task-container">
        {allRequests.map((leave, index) => (
          <div key={index} className="leave-request-item">
            <p>
              Your leave for {leave.type} has been {leave.status}
            </p>
          </div>
        ))}
        {allRequests.length === 0 && (
          <div className="no-requests-message">
            <p>No leave requests found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaveRequestStatus;
