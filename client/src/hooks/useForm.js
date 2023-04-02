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
      (value?.length < 3 || value?.length > 20 || /^\s*$/.test(value))
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

    if (e.target.name === "imageUrl" && !/^https?:\/\/.+/.test(value)) {
      possibleErrors.imageUrl = "ImageUrl is not valid!";
    }

    if (
      e.target.name === "summary" &&
      (value?.length < 6 || value?.length > 200 || /^\s*$/.test(value))
    ) {
      possibleErrors.summary = "Summary should be at least 6 characters long!";
    }

    if (
      e.target.name === "password" &&
      (value?.length < 6 || value?.length > 60 || /^\s*$/.test(value))
    ) {
      possibleErrors.password =
        "Password should be at least 6 characters long!";
    }

    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));

    if (
      values.title?.length >= 3 &&
      values.title?.length <= 20 &&
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
      values.summary?.length <= 200 &&
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

    if (/^[A-Za-z0-9_.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/.test(values?.email)) {
      possibleErrors.email = "";
    }

    if (/^https?:\/\/.+/.test(values?.imageUrl)) {
      possibleErrors.imageUrl = "";
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const emptyValues = Object.values(values).some((x) => x === "");
    const noErrors = Object.values(possibleErrors).every((x) => x === "");
    if (onSubmitHandler && noErrors && !emptyValues) {
      onSubmitHandler(values);
    }else{
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
