import { useState, useEffect } from "react";

export const useForm = (initialValues, onSubmitHandler, initialErrors) => {
  const [values, setFormValues] = useState(initialValues);
  const [possibleErrors, setPossibleErrors] = useState(initialErrors);

  useEffect(() => {
    setPossibleErrors(possibleErrors);
  }, [values, possibleErrors]);

  const onChangeHandler = (e) => {
    const value = e.target.value;
    if (
      e.target.name === "title" &&
      (value?.length < 3 || value?.length > 50 || /^\s*$/.test(value))
    ) {
      possibleErrors.title = "Title should be at least 3 characters long!";
    }

    if (
      e.target.name === "category" &&
      (value?.length < 3 || value?.length > 20 || /^\s*$/.test(value))
    ) {
      possibleErrors.category =
        "Category should be at least 3 characters long!";
    }

    if (
      e.target.name === "email" &&
      !/^[A-Za-z0-9_.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/.test(value)
    ) {
      possibleErrors.email = "Email is not valid!";
    }

    if (
      (e.target.name === "imageUrl" && value.length < 10) ||
      value?.length > 250 ||
      value.trim() === ""
    ) {
      possibleErrors.imageUrl = "ImageUrl is not valid!";
    }

    if (
      e.target.name === "summary" &&
      (value?.length < 6 || value?.length > 800 || /^\s*$/.test(value))
    ) {
      possibleErrors.summary = value.length < 6 ? "Summary should be at least 6 characters long!" : value?.length > 800 ? "Summary should not be more than 800 characters" : "Please fill in";
    }

    if (
      e.target.name === "password" &&
      (value?.length < 6 || value?.length > 60 || /^\s*$/.test(value))
    ) {
      possibleErrors.password =
        "Password should be at least 6 characters long!";
    }
    if (e.target.name === "confirmPassword" && values.password !== value) {
      possibleErrors.confirmPassword =
        "Password and Confirm password fields do not match!";
    }

    if (
      e.target.name === "firstName" &&
      (value?.length < 2 || value?.length > 20 || /^\s*$/.test(value))
    ) {
      possibleErrors.firstName =
        "First name should be at least 2 characters long!";
    }

    if (
      e.target.name === "lastName" &&
      (value?.length < 5 || value?.length > 20 || /^\s*$/.test(value))
    ) {
      possibleErrors.lastName =
        "Last name should be at least 5 characters long!";
    }

    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));

    if (
      values.title?.length >= 3 &&
      values.title?.length <= 50 &&
      values.title?.trim() !== ""
    ) {
      possibleErrors.title = "";
    }

    if (
      values.category?.length >= 3 &&
      values.category?.length <= 20 &&
      values.category?.trim() !== ""
    ) {
      possibleErrors.category = "";
    }

    if (
      values.summary?.length >= 6 &&
      values.summary?.length <= 800 &&
      values.summary?.trim() !== ""
    ) {
      possibleErrors.summary = "";
    }

    if (
      values.password?.length >= 5 &&
      values.password?.length <= 60 &&
      values.password?.trim() !== ""
    ) {
      possibleErrors.password = "";
    }

    if (values?.password === value) {
      possibleErrors.confirmPassword = "";
    }

    if (/^[A-Za-z0-9_.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/.test(values?.email)) {
      possibleErrors.email = "";
    }

    if (
      values.imageUrl?.length >= 10 &&
      values.imageUrl?.length <= 250 &&
      values.imageUrl?.trim() !== ""
    ) {
      possibleErrors.imageUrl = "";
    }

    if (
      values.firstName?.length >= 2 &&
      values.firstName?.length <= 20 &&
      values.firstName?.trim() !== ""
    ) {
      possibleErrors.firstName = "";
    }

    if (
      values.lastName?.length >= 5 &&
      values.lastName?.length <= 20 &&
      values.lastName?.trim() !== ""
    ) {
      possibleErrors.lastName = "";
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const emptyValues = Object.values(values).some((x) => x === "" || x === undefined);
    const noErrors = Object.values(possibleErrors).every((x) => x === "");
    if (onSubmitHandler && noErrors && !emptyValues) {
      onSubmitHandler(values);
    } else {
      alert("All fields must be set!");
    }
  };

  return {
    values,
    onChangeHandler,
    onSubmit,
    possibleErrors,
  };
};
