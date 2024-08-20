// src/components/RegistrationForm.tsx
const GOOGLE_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxfH2tVkuDM_vuIpCDR90JKLpPO52zkmZi3kr7pzJ9dqR58nWvmZ8F8BtCKPPwjgFWE/exec"; // Replace with your Google Apps Script URL
import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import { useCookies } from "react-cookie";
import RegistarionForm from "./RegistarionForm";

const Registration: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState<string | null>(null);
  const [registered, setRegistered] = useState(false);
  const [cookies, setCookie] = useCookies(["registeredUsers"]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (cookies.registeredUsers) {
      setRegistered(true);
      setQrCodeValue(cookies.registeredUsers.email);
    }
  }, [cookies.registeredUsers, email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the user is already registered before proceeding
    if (registered) {
      console.log("User is already registered.");
      return;
    }

    // Generate a unique QR code value
    const qrCode = email;
    setQrCodeValue(qrCode);

    // Prepare the data for Google Apps Script
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("check", "false");

    // Submit data to Google Apps Script
    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (response.ok) {
        // Calculate expiration date 30 days from now
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);

        // Store the user's name with email as the key in cookies
        setCookie(
          "registeredUsers",
          { name: name, email: email },
          { expires: expirationDate }
        );
        setRegistered(true);
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
    {
      registered?null:
      <div className="flex justify-center w-full">
      <span onClick={e=>setIsModalOpen(true)} className="w-max mt-4 bg-white text-black hover:bg-transparent active:bg-white/20 hover:outline outline-1 outline-white hover:text-white px-12 py-3 rounded-full cursor-pointer text-lg">Register Now!</span>
      </div>
      
    }
    <div className="flex flex-col items-center justify-center">
      {!registered ? (
        <RegistarionForm
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Register Now!"
        >
          <form
            onSubmit={handleSubmit}
            className="rounded text-gray-900 shadow-md bg-transparent flex" style={{flexDirection:"column"}}
          >
            <label htmlFor="Name" className="text-gray-100 font-light text-sm mt-2 mb-1">Enter your name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-2 p-2 bg-transparent border border-gray-300 text-gray-100 placeholder-gray-500 p-2 rounded"
              required
            />
            <label htmlFor="email" className="text-gray-100 font-light text-sm mt-2 mb-1">Enter your email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-2 p-2 bg-transparent border border-gray-300 text-gray-100 placeholder-gray-500 p-2 rounded"
              required
            />
            <label htmlFor="email" className="text-gray-100 font-light text-sm mt-2 mb-1">Enter your department</label>
            <input
              type="text"
              placeholder="Department"
              className="mb-2 p-2 bg-transparent border border-gray-300 text-gray-100 placeholder-gray-500 p-2 rounded"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-gray-500 text-white rounded text-gray-900"
            >
              Register for the Event
            </button>
          </form>
        </RegistarionForm>
      ) : (
        <div className="w-full text-center flex flex-col md:justify-start md:items-start items-center">
          <h1 className="text-2xl font-bold mt-4">Thank you for Registering</h1>
          <h2 className="text-sm font-light mb-4">Use this QR for getting present in the Event.</h2>
          {qrCodeValue && (
            <div className="p-2 bg-white rounded-md" style={{width:"fit-content"}}>
              <QRCode value={qrCodeValue} />
            </div>
          )}
        </div>
      )}
    </div>
    </>

  );
};

export default Registration;
