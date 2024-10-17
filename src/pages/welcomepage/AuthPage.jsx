import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import "/Users/andreivince/Desktop/TrackTion/TrackTion Code/src/App.css";
import React from "react";
import { createPortal } from "react-dom";
import Modal from "react-modal";
import ModalLogin from "../../components/ModalSignUp";
import { useState } from "react";
import ModalSignUp from "../../components/ModalSignUp";
import ModalSignIn from "../../components/ModalSignIn";

function AuthPage() {
  const [showModalSignIn, setShowModalSignIn] = React.useState(false);
  const [showModalSignUp, setShowModalSignUp] = React.useState(false);

  

    return (
      <div className="App">
        <div className="App-Background">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to&nbsp;
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-text drop-shadow-lg">
              Tracktion
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Your complete financial picture, in one place.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              className="glow-on-hover"
              onClick={() => setShowModalSignIn(true)}
            >
              Sign In
            </button>
            <button
              className="glow-on-hover"
              onClick={() => setShowModalSignUp(true)}
            >
              Sign Up
            </button>
          </div>
          {showModalSignUp &&
            createPortal(
              <ModalSignUp onClose={() => setShowModalSignUp(false)} />,
              document.body
            )}
          {showModalSignIn &&
            createPortal(
              <ModalSignIn onClose={() => setShowModalSignIn(false)} />,
              document.body
            )}
        </div>
      </div>
    );
}

export default AuthPage;
