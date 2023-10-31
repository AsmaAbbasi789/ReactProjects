import React from "react";
import { InputLabel, Input } from "@mui/material";
import { getIn } from "formik";

const InputField = ({ label, type, placeholder, name, id, formik, index }) => {
    const error = getIn(formik.errors, name);
    // user interaction with input field
    const touch = getIn(formik.touched, name);
    const values = getIn(formik.values, name);

    return (
        <React.Fragment>
            {/* write input label component */<InputLabel
                shrink
                htmlFor={name}
                className="text-input"
                sx={{ marginLeft: "1.5rem" }}
            >
                {label}
            </InputLabel>}

            {/* write input component */<Input
                placeholder={placeholder}
                name={name}
                id={id}
                className=""
                type={type}
                fullWidth
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={values}
            ></Input>}

            {/* write error message code here 
            By using both properties, you ensure that the error message is displayed 
            only after the user has interacted with the input field, preventing immediate 
            error messages when the form initially loads. */
             error && touch &&
             <p className="error-text">{error}</p>
            }
        </React.Fragment>
    );
};
export default InputField;