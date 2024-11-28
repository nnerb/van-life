import React from 'react';

interface OfflineErrorProps {
  onRetry: () => void;
}

const OfflineError: React.FC<OfflineErrorProps> = ({ onRetry }) => {
  return (
    <div>
      <p>No network connection. Please check your internet connection.</p>
      <button onClick={onRetry} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Retry
      </button>
    </div>
  );
};

export default OfflineError;
