import React from "react";
import { useState } from "react";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();
    const createAccount = {
      firstName,
      lastName,
      email,
      confirmEmail,
      password,
      confirmPassword,
    };

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(createAccount),
    })
      .then((resp) => {
        console.log("Successfully Registered");
      })
      .catch((err) => {
        console.log("Registration Failed");
      });
  };
  return (
    <>
      <div className="sm:block hidden" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="sm:mt-0 mt-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="sm:px-0 px-4  ">
              <h2 className="text-lg font-medium leading-6 text-gray-900">
                Register
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={registerHandler}>
              <div className="sm:rounded-md  overflow-hidden">
                <div className=" sm:p-6 px-4 py-5">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="sm:col-span-3 col-span-6">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        autoComplete="given-name"
                        className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                      />
                    </div>

                    <div className="sm:col-span-3 col-span-6">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        autoComplete="family-name"
                        className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                      />
                    </div>

                    <div className="sm:col-span-4 col-span-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                      />
                    </div>

                    <div className="sm:col-span-4 col-span-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirm Email address
                      </label>
                      <input
                        type="text"
                        name="confirmEmail"
                        id="confirmEmail"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        autoComplete="email"
                        className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                      />
                    </div>

                    <div className="sm:col-span-4 col-span-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="email"
                        className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                      />
                    </div>

                    <div className="sm:col-span-4 col-span-6">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-900 focus:ring-blue-900"
                      />
                    </div>

                    <div className="sm:px-6 bg-gray-50 px-4 py-3 text-right">
                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="sm:block hidden" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="sm:mt-0 mt-10 mb-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          {/* <div className="md:col-span-1">
            <div className="sm:px-0 px-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Password must contain:
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                8 characters
                <br />
                Upper case characters (A, B, C...)
                <br />
                Lower case characters (a, b, c...)
                <br />
                Numbers (1, 2, 3...)
                <br />
                Special characters (@, #, $, &, %...)
                <br />
              </p>
            </div>
          </div> */}
          {/* <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="sm:rounded-md  overflow-hidden">
                <div className="sm:p-6  space-y-6 px-4 py-5">
                  <fieldset>
                    <legend className="sr-only">By Email</legend>
                    <div
                      className="text-base font-medium text-gray-900"
                      aria-hidden="true">
                      By Email
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="newsletter"
                            name="newsletter"
                            type="checkbox"
                            className="h-4 w-4 cursor-pointer rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="newsletter"
                            className="font-medium text-gray-700">
                            Newsletter
                          </label>
                          <p className="text-gray-500">
                            I'd like to know about latest products and offers.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="agreement"
                            name="agreement"
                            type="checkbox"
                            className=" h-4 w-4 cursor-pointer rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="agreement"
                            className="font-medium text-gray-700">
                            Agreement
                          </label>
                          <p className="text-gray-500">
                            By Creating new account i agree to CompuTech Company
                            Terms and conditions
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="sm:px-6 bg-gray-50 px-4 py-3 text-right">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-900 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
};