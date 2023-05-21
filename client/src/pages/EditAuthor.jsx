import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editAuthor, getAuthorByID } from "../api/requests";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";



const EditAuthor = () => {
  const[authors,setAuthors] = useState();
  console.log('authors context: ',authors);
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState({});
  useEffect(() => {
    getAuthorByID(id).then((res) => {
      setAuthor(res);
      formik.values.name = res.name;
      formik.values.surname = res.surname;
      formik.values.birhdate = res.birhdate;
      formik.values.genre = res.genre;
      formik.values.isDead = res.isDead;
      formik.values.isMale = res.isMale;
      formik.values.imageUrl = res.imageUrl;
    });
  }, [id]);
  const handleEdit = async(values, actions) => {
    // AUTHORS.find((x)=>x._id===id)
    setAuthors(values);
    await editAuthor(id,values);
    navigate('/authors');
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      name: author.name,
      surname: author.surname,
      birhdate: author.birhdate,
      genre: author.genre,
      isDead: author.isDead,
      isMale: author.isMale,
      imageUrl: author.imageUrl,
    },
    onSubmit: handleEdit,
  });
  return (
    <>
    <Typography
        style={{ textAlign: "center", marginTop: "40px", fontSize: "30px" }}
      >
        {author.name} Edit
      </Typography>
      { <form style={{width:'60%',margin:'0 auto'}} onSubmit={formik.handleSubmit}>
        <div style={{display:'flex',justifyContent:'center'}}>
        <TextField
          type="text"
          placeholder="author name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         <TextField
          type="text"
          placeholder="author surname"
          name="surname"
          value={formik.values.surname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
         <TextField
          type="text"
          placeholder="author birhdate"
          name="birhdate"
          value={formik.values.birhdate}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          type="text"
          placeholder="author genre"
          name="genre"
          value={formik.values.genre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          type="text"
          placeholder="author isDead"
          name="isDead"
          value={formik.values.isDead}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          type="text"
          placeholder="author isMale"
          name="isMale"
          value={formik.values.isMale}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          type="text"
          placeholder="author image"
          name="imageUrl"
          value={formik.values.imageUrl}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        </div>
        <Button style={{margin:'0 auto',display:'block',marginTop:'20px'}} variant="contained" color="primary" type="submit">Edit</Button>
      </form> }
      </>
  )
}

export default EditAuthor