import React, { useEffect, useState } from "react";
import "./NotificationBell.css";

const NotificationBell = () => {
  const [notifications, setNotifications] = useState({});

  useEffect(() => {
    new EventSource(
      "http://localhost:8080/notifications/posts/count/sse"
    ).onmessage = (e) => {
      setNotifications(JSON.parse(e.data));
    };
  }, []);

  return (
    <span
      className="notification-bell"
      onClick={() => window.location.reload()}
    >
      {notifications?.total > 0 && (
        <span className="badge">{notifications.total}</span>
      )}
    </span>
  );
};

export default NotificationBell;
