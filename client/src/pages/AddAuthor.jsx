import React, { useState } from "react";
import { useFormik } from "formik";
import { postAuthor } from "../api/requests";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import { useAuthorContext } from "../context/AuthorContext";
import * as yup from "yup";


const AddAuthor = () => {

  const AuthorValidation = yup.object().shape({
    name: yup.string().required("name is required"),
    surname: yup.string().required("surname is required"),
    birthdate: yup
      .number()
      .integer("age must be an integer")
      .positive("age cannot be negative number")
      .required("age is required"),
      imageUrl: yup
      .string()
      .required("image is required"),
      genre: yup.string().required("genre is required"),
      isDead: yup.boolean().required("isDead is required"),
      isMale: yup.boolean().required("isMale is required")
  });
  const navigate = useNavigate();
  const[authors,setAuthors] = useState();
  const handleSubmit = async(values, actions) => {
    await postAuthor(values);
    setAuthors([...authors,values])
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${values.name} posted successfully!`,
      showConfirmButton: false,
      timer: 1500
    })
    actions.resetForm();
    navigate('/authors');
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      birthdate: "",
      genre: "",
      isDead: "",
      isMale: "",
      imageUrl: "",
    },
    validationSchema: AuthorValidation,
    onSubmit: handleSubmit,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
        <input style={{width:"300px",height:"50px",display:"block",margin: "0 auto 2% auto",borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="enter name"
          type="text"
          name="name"
        />
        {formik.errors.name && formik.touched.name && (
          <span>{formik.errors.name}</span>
        )}
        <input style={{width:"300px",height:"50px",display:"block",margin: "0 auto 2% auto",borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.surname}
          placeholder="enter surname"
          type="text"
          name="surname"
        />
        {formik.errors.age && formik.touched.age && (
          <span>{formik.errors.surname}</span>
        )}
        <input style={{width:"300px",height:"50px",display:"block",margin: "0 auto 2% auto",borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.birthdate}
          placeholder="enter birthdate"
          type="number"
          name="birthdate"
        />
        {formik.errors.imageURL && formik.touched.imageURL && (
          <span>{formik.errors.birthdate}</span>
        )}
        <input style={{width:"300px",height:"50px",display:"block",margin: "0 auto 2% auto",borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.genre}
          placeholder="enter genre"
          type="text"
          name="genre"
        />
        {formik.errors.imageURL && formik.touched.imageURL && (
          <span>{formik.errors.genre}</span>
        )}
        <input style={{width:"300px",height:"50px",display:"block",margin: "0 auto 2% auto",borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.isDead}
          placeholder="enter isDead"
          type="boolean"
          name="isDead"
        />
        {formik.errors.imageURL && formik.touched.imageURL && (
          <span>{formik.errors.imageURL}</span>
        )}
        <input style={{width:"300px",height:"50px",display:"block",margin: "0 auto 2% auto",borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.isMale}
          placeholder="enter isMale"
          type="boolean"
          name="isMale"
        />
        {formik.errors.imageURL && formik.touched.imageURL && (
          <span>{formik.errors.imageURL}</span>
        )}
        <input style={{width:"300px",height:"50px",display:"block",margin: "0 auto 2% auto",borderRadius:"10px",boxShadow:"5px 10px 18px #888888"}}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.imageUrl}
          placeholder="enter imageUrl"
          type="url"
          name="imageUrl"
        />
        {formik.errors.imageURL && formik.touched.imageURL && (
          <span>{formik.errors.imageURL}</span>
        )}
        <button style={{width:"600px",height:"50px",fontSize:"25px",backgroundColor:"#00BFFF",border:"none",borderRadius:"15px",margin:"0 auto",display:"block",boxShadow:"5px 10px 18px #888888"}}
          disabled={Object.keys(formik.errors).length !== 0 ? true : false}
          type="submit"
        >
          Add New Artist
        </button>
      </form>
  )
}

export default AddAuthor