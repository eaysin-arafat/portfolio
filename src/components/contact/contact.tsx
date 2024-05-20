"use client";

import React, { useRef, useState } from "react";
import Heading from "../core/heading";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Input from "../core/form-elements/Input";
import Textarea from "../core/form-elements/Textarea";
import useContact from "./useContact";
import Social from "./social";

export default function Contact() {
  const { onSubmit, formRef, inputError } = useContact();

  return (
    <>
      <section
        id="contact"
        className="section-content section-container section-padding pb-20"
      >
        <div className="">
          <Heading title={{ firstText: "drop", lastText: "me a line" }} />

          <form
            ref={formRef}
            onSubmit={onSubmit}
            action="#"
            method="post"
            className="grid gap-3 2xl:mx-40"
          >
            <div className="grid md:grid-cols-2 gap-3">
              <Input
                className=""
                errMsg={inputError?.name}
                type="text"
                id="name"
                placeholder="Your Name"
                name="name"
              />

              <Input
                className="form-control px-2 py-1"
                type="email"
                placeholder="Your Email"
                id="email"
                name="email"
                errMsg={inputError?.email}
              />
            </div>

            <Textarea
              placeholder="Your Message"
              id="message"
              name="message"
              errMsg={inputError?.message}
            />

            <button
              className="form-control whitespace-nowrap text-center text-sm px-2 py-1.5 md:mx-56"
              type="submit"
            >
              SHOOT MESSAGE
            </button>
          </form>
        </div>
      </section>

      <Social />
    </>
  );
}
