import React, { useState } from "react";

const Registration = () => {
  const [step, setStep] = useState(1);
  const Increment = () => {
    setStep((prev) => prev + 1);
    console.log(step);
  };
  const Decrement = () => {
    setStep((prev) => prev - 1);
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [Brithdate, setBrithdate] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [ageChecked, setAgeChecked] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [cookieChecked, setCookieChecked] = useState(false);

  const [displayNone, setDisplayNone] = useState("hidden");
  return (
    <div className="shadow p-12 rounded mt-5 bg-slate-300 ">
      {step === 1 && (
        <div className="step1">
          <h1 className="font-bold mb-5">User Registration Wizard - Step 1</h1>
          <form className="flex flex-col gap-4">
            <label name="login">
              <p>Login:</p>
              <input
                className="rounded w-full h-8 mt-2 p-2"
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </label>
            <label name="password">
              <p>Password:</p>
              <input
                className="rounded w-full h-8 mt-2 p-2 "
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label name="ConfirmPassword">
              <p>Confirm Password:</p>
              <input
                className="rounded w-full h-8 mt-2 p-2"
                id="ConfirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="bg-blue-800 w-16 pt-1 pb-1 rounded text-white hover:text-blue-800 hover:bg-white"
              onClick={() => {
                if (
                  login != "" &&
                  password != "" &&
                  confirmPassword === password
                ) {
                  Increment();
                } else {
                  alert("Please fill all fields");
                }
              }}
            >
              Next
            </button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="step2">
          <h1 className="font-bold mb-5">User Registration Wizard - Step 2</h1>
          <p>Subcription Type:</p>
          <select
            className="rounded w-full h-8 mt-2"
            onChange={(e) => setSelectOption(e.target.value)}
            value={selectOption}
          >
            <option value="">Choose an option</option>
            <option value="free">free</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <div className="flex gap-2 mt-4">
            <button
              className="bg-blue-800 w-16 pt-1 pb-1 rounded text-white hover:text-blue-800 hover:bg-white"
              onClick={Decrement}
            >
              Previous
            </button>
            <button
              className="bg-blue-800 w-16 pt-1 pb-1 rounded text-white hover:text-blue-800 hover:bg-white"
              onClick={() => {
                if (selectOption !== "") {
                  Increment();
                } else {
                  alert("Please choose an option");
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="step3">
          <h1 className="font-bold mb-5">User Registration Wizard - Step 3</h1>
          <div className="flex flex-col gap-4">
            <label name="FirstName">
              <p>First Name:</p>
              <input
                id="FirstName"
                className="rounded w-full h-8 mt-2 p-2"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label name="LastName">
              <p>Last Name:</p>
              <input
                id="LastName"
                className="rounded w-full h-8 mt-2 p-2"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label name="MiddleName">
              <p>Middle Name:</p>
              <input
                id="MiddleName"
                className="rounded w-full h-8 mt-2 p-2"
                type="text"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </label>
            <label name="Brithdate">
              <p>Brithdate:</p>
              <input
                id="Brithdate"
                className="rounded w-full h-8 mt-2 p-2"
                type="date"
                value={Brithdate}
                onChange={(e) => setBrithdate(e.target.value)}
              />
            </label>
            <label name="Email">
              <p>Email:</p>
              <input
                id="Email"
                className="rounded w-full h-8 mt-2 p-2"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label name="Gender">
              <p>Gender:</p>
              <select
                className="rounded w-full h-8 mt-2"
                id="Gender"
                onChange={(e) => setGender(e.target.value)}
                value={gender}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Famale">Famale</option>
                <option value="Other-hahaha">Other----hahaha</option>
              </select>
            </label>
            <div className="flex gap-1">
              <p>Are you older than 18?</p>
              <input
                type="checkbox"
                checked={ageChecked}
                onChange={(e) => setAgeChecked(e.target.checked)}
              />
              <p>Yes</p>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                className="bg-blue-800 w-16 pt-1 pb-1 rounded text-white hover:text-blue-800 hover:bg-white"
                onClick={Decrement}
              >
                Previous
              </button>
              <button
                className="bg-blue-800 w-16 pt-1 pb-1 rounded text-white hover:text-blue-800 hover:bg-white"
                onClick={() => {
                  if (
                    firstName !== "" &&
                    lastName !== "" &&
                    middleName !== "" &&
                    Brithdate !== "" &&
                    email != "" &&
                    gender !== ""
                  ) {
                    Increment();
                  } else {
                    alert("Please fill all fields");
                  }
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {step === 4 && (
        <div className="step4">
          <h1 className="font-bold mb-5">User Registration Wizard - Step 4</h1>
          <label name="Card">
            <p>Card Number:</p>
            <input
              id="Card"
              className="rounded w-full h-8 mt-2 p-2"
              type="password"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </label>
          <div className="flex gap-2 mt-4">
            <button
              className="bg-blue-800 w-16 pt-1 pb-1 rounded text-white hover:text-blue-800 hover:bg-white"
              onClick={Decrement}
            >
              Previous
            </button>
            <button
              className="bg-blue-800 w-16 pt-1 pb-1 rounded text-white hover:text-blue-800 hover:bg-white"
              onClick={() => {
                if (cardNumber !== "") {
                  Increment();
                } else {
                  alert("Please fill all fields");
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {step === 5 && (
        <div className="step5">
          <h1 className="font-bold mb-5">User Registration Wizard - Step 5</h1>
          <p>Step5-Consent to Personal Date Processing</p>
          <form>
            <label name="login">
              <p>Login:</p>
              <input
                className="rounded w-full h-8 mt-2 p-2"
                type="text"
                value={login}
              />
            </label>
            <label name="">
              <p>Password:</p>
              <input
                className="rounded w-full h-8 mt-2 p-2"
                type="password"
                value={password}
              />
            </label>
            <div className="flex gap-1 mt-2">
              <p>Consent to Personal Data Processing:</p>
              <input
                type="checkbox"
                value={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
              />
              <p>
                I consent to personal data data processing Site Uses Coookie
                Agreement:
              </p>
              <input
                type="checkbox"
                value={cookieChecked}
                onChange={(e) => setCookieChecked(e.target.checked)}
              />
              <p>I agree to the site's use of cookies</p>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                className="bg-blue-800 w-16 pt-1 pb-1 rounded text-white hover:text-blue-800 hover:bg-white"
                onClick={Decrement}
              >
                Previous
              </button>
              <button
                className="bg-blue-800 w-16 pt-1 pb-1 rounded text-white hover:text-blue-800 hover:bg-white"
                onClick={() => {
                  if (login !== "" && password !== "") {
                    Increment();
                  } else {
                    alert("Please fill all fields");
                  }
                }}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      )}
      {step === 6 && (
        <div className="step6">
          <div>
            <h1 className="font-bold mb-5">
              User Registration Wizard - Step 6
            </h1>
            <h1 className="font-bold mb-5">Review your information</h1>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">Login:</p>
                <p>{login}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">Password:</p>
                <p>{password}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">
                  Confirm Password
                </p>
                <p>{confirmPassword}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">
                  Subscription Type:
                </p>
                <p>{selectOption}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">Frist Name:</p>
                <p>{firstName}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">Last Name:</p>
                <p>{lastName}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">Middle Name:</p>
                <p>{middleName}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">Brithdate:</p>
                <p>{Brithdate}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">Email:</p>
                <p>{email}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">Gender:</p>
                <p>{gender}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">
                  Are you older than 18?
                </p>
                <p>{ageChecked ? "Yes" : "No"}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">Card Number:</p>
                <p>{cardNumber}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">
                  Consent to persona data processing:
                </p>
                <p>{consentChecked ? "Yes" : "No"}</p>
              </div>
              <div className="flex gap-1 items-center">
                <p className=" text-black text-xs font-bold">
                  Site uses cookie agreement:
                </p>
                <p>{cookieChecked ? "Yes" : "No"}</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                className="bg-blue-800 w-16 pt-1 pb-1 rounded text-white hover:text-blue-800 hover:bg-white"
                onClick={Decrement}
              >
                Previous
              </button>
              <button
                className="bg-blue-800 w-16 pt-1 pb-1 rounded text-white hover:text-blue-800 hover:bg-white"
                onClick={() => {
                  setDisplayNone("dHiden");
                }}
              >
                Submit
              </button>
            </div>
          </div>
          <div className={displayNone}>
            <div className="flex flex-col justify-center items-center bg-rose-400 pt-8 pb-8 w-96 rounded">
              <h1 className="mb-8 font-bold text-4xl">Congratulations!</h1>
              <p>Your data has been saved successfully.</p>
              <div className="flex gap-2 mt-8">
                <button
                  className="bg-blue-800 w-16 pt-1 pb-1 rounded text-white hover:text-blue-800 hover:bg-white"
                  onClick={() => {
                    setDisplayNone("hidden");
                  }}
                >
                  Back
                </button>
                <button
                  className="bg-blue-800 w-16 pt-1 pb-1 rounded text-white hover:text-blue-800 hover:bg-white"
                  onClick={() => {
                    setDisplayNone("hidden");
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
