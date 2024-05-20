"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export type ContactErrorType = {
  name?: string;
  email?: string;
  message?: string;
};

const useContact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [inputError, setInputError] = useState<ContactErrorType | null>(null);

  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TAMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
      reset: () => void;
    };

    let hasErrors = false;
    const newErrors: ContactErrorType = {};

    // Name validation
    if (!target.name.value.trim()) {
      newErrors.name = "Please enter your name.";
      hasErrors = true;
    } else {
      setInputError({ name: "" });
    }

    // Email validation
    if (!target.email.value.trim()) {
      hasErrors = true;
      newErrors.email = "Please enter your email address.";
    } else if (!validateEmail(target.email.value.trim())) {
      hasErrors = true;
      newErrors.email = "Please enter a valid email address.";
    }

    // Message validation (optional)
    if (!target.message.value.trim()) {
      hasErrors = true;
      newErrors.message = "Please enter your message.";
    }

    if (hasErrors) {
      setInputError(newErrors);
    } else {
      emailjs
        .sendForm(SERVICE_ID || "", TAMPLATE_ID || "", formRef.current || "", {
          publicKey: PUBLIC_KEY || "",
        })
        .then(
          (res) => {
            console.log("SUCCESS!", res.text);
            console.log(res);

            setInputError(null);
            target.reset();

            if (res?.status === 200 && res.text === "OK") {
              toast.success("Message sent!");
            } else {
              toast?.error("Something went wrong!");
            }
            // Clear form and display success message (optional)
          },
          (error) => {
            console.log("FAILED TO SEND MESSAGE...", error);
            toast.error("Failed to send message!!");
          }
        );
    }
  };

  return {
    onSubmit,
    formRef,
    inputError,
  };
};

export default useContact;
