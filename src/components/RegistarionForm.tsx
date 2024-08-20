import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const RegistarionForm: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 min-w-lg mx-4 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm opacity-50"></div>
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-6 rounded-lg shadow-lg z-10 p-10">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold">{title}</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
              onClick={onClose}
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
            </svg>
        </div>
        <p className="text-sm font-light mb-6 max-w-md">Register now to connect with industry leaders, access exclusive resources, and stay at the forefront of innovation in your field!</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default RegistarionForm;
