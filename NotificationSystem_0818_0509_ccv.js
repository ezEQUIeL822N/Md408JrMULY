// 代码生成时间: 2025-08-18 05:09:34
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define the type for the message object
const messageType = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
  dismissAfter: PropTypes.number,
};

// Define the type for the notification system props
const notificationSystemType = {
  messages: PropTypes.arrayOf(messageType).isRequired,
  onDismiss: PropTypes.func.isRequired,
};

const NotificationSystem = ({ messages, onDismiss }) => {
  // State to hold the list of messages to be displayed
  const [displayedMessages, setDisplayedMessages] = useState(messages);

  // Function to dismiss a specific message
  const dismissMessage = (id) => {
    setDisplayedMessages((prevMessages) =>
      prevMessages.filter((msg) => msg.id !== id)
    );
    onDismiss(id);
  };

  // Render the notification system component
  return (
    <div className="notification-system">
      {displayedMessages.map((msg) => (
        <div
          key={msg.id}
          className={`notification ${msg.type}`}
          onClick={() => dismissMessage(msg.id)}
        >
          {msg.message}
        </div>
      ))}
    </div>
  );
};

// PropTypes for the NotificationSystem component
NotificationSystem.propTypes = notificationSystemType;

// TypeScript version of the component with type definitions
// type Message = {
//   id: number;
//   message: string;
//   type: 'info' | 'success' | 'warning' | 'error';
//   dismissAfter?: number;
// };

// type NotificationSystemProps = {
//   messages: Message[];
//   onDismiss: (id: number) => void;
// };

// const NotificationSystem: React.FC<NotificationSystemProps> = ({ messages, onDismiss }) => {
//   // State to hold the list of messages to be displayed
//   const [displayedMessages, setDisplayedMessages] = useState<Message[]>(messages);

//   // Function to dismiss a specific message
//   const dismissMessage = (id: number) => {
//     setDisplayedMessages((prevMessages) =>
//       prevMessages.filter((msg) => msg.id !== id)
//     );
//     onDismiss(id);
//   };

//   // Render the notification system component
//   return (
//     <div className="notification-system">
//       {displayedMessages.map((msg) => (
//         <div
//           key={msg.id}
//           className={`notification ${msg.type}`}
//           onClick={() => dismissMessage(msg.id)}
//         >
//           {msg.message}
//         </div>
//       ))}
//     </div>
//   );
// };

export default NotificationSystem;
