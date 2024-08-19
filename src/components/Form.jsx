import React from "react";
import { useForm } from "react-hook-form";
import checkedIcon from "../images/icon-success-check.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const queryName = watch("queryType");

  const onSubmit = (data) => {
    reset();
    toast(
      <div className="toast">
        <div className="success">
          <img src={checkedIcon} alt="successful form submittion" />
          <h2>Message Sent!</h2>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </div>,
      {
        position: "top-center",
        className: "success-message",
        hideProgressBar: "true",
      }
    );
  };

  return (
    <form className="form-hero" onSubmit={handleSubmit(onSubmit)}>
      <h1>Contact Us</h1>

      <div className="name-container">
        <div className="first-name">
          <label>
            First Name <span>*</span>
          </label>
          <input
            className={`${"firstName" in errors && "inputError"} `}
            type="text"
            {...register("firstName", { required: "This field is required" })}
          ></input>
          {errors.firstName && (
            <p className="errorMessage">{errors.firstName.message}</p>
          )}
        </div>
        <div className="last-name">
          <label>
            Last Name <span>*</span>
          </label>
          <input
            className={`${"lastName" in errors && "inputError"} `}
            type="text"
            name="lastName"
            {...register("lastName", { required: "This field is required" })}
          ></input>
          {errors.lastName && (
            <p className="errorMessage">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <label>
        Email Address <span>*</span>
      </label>
      <input
        className={`${"emailAddress" in errors && "inputError"} `}
        type="text"
        name="emailAddress"
        {...register("emailAddress", {
          required: "Email Address is required",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Email is not valid",
          },
        })}
      ></input>
      {errors.emailAddress && (
        <p className="errorMessage">{errors.emailAddress.message}</p>
      )}
      <label className="query-label">
        Query Type <span>*</span>
      </label>
      <div className="query-type-container">
        <label
          htmlFor="general-enquiry"
          className={`radio-button ${
            queryName === "General Enquiry" && "radio-checked"
          }`}
        >
          <input
            type="radio"
            id="general-enquiry"
            value={"General Enquiry"}
            {...register("queryType", {
              required: "Please select a query type",
            })}
          ></input>
          <p>General Enquiry</p>
        </label>
        <label
          htmlFor="support-request"
          className={`radio-button ${
            queryName === "Support Request" && "radio-checked"
          }`}
        >
          <input
            type="radio"
            id="support-request"
            value={"Support Request"}
            {...register("queryType")}
          ></input>
          <p>Support Request</p>
        </label>
      </div>
      {errors.queryType && (
        <p className="errorMessage">{errors.queryType.message}</p>
      )}

      <label>
        Message <span>*</span>
      </label>
      <textarea
        className={`${"messageArea" in errors && "inputError"} `}
        rows={5}
        name="messageArea"
        {...register("messageArea", {
          required: "This field is required",
        })}
      ></textarea>
      {errors.messageArea && (
        <p className="errorMessage">{errors.messageArea.message}</p>
      )}

      <label className="consent-message">
        <input
          type="checkbox"
          name="checkbox"
          {...register("checkbox", {
            required: "To submit this form, please consent to being contacted",
          })}
        ></input>
        <p>
          I consent to being contacted by the team <span>*</span>
        </p>
      </label>
      {errors.checkbox && (
        <p className="errorMessage">{errors.checkbox.message}</p>
      )}

      <button className="submit-btn">Submit</button>
    </form>
  );
};

export default Form;
