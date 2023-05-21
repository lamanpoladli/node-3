import React, { useState } from 'react'
import { useEffect } from "react";
import { deleteAuthorByID, getAllAuthors } from "../api/requests";
import authorstyle from "./Authors.module.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DrawIcon from '@mui/icons-material/Draw';
import Swal from "sweetalert2";
import { Col, Row } from 'antd';
import { Link } from "react-router-dom";
// import { useAuthorContext } from "../context/AuthorContext";
const Authors = () => {
  const [authors, setAuthors] = useState();
  useEffect(() => {
    getAllAuthors().then((res) => {
      setAuthors(res);
    });
  }, [])
  return (
    <div className={authorstyle.container3}>
      <Row className={authorstyle.row3} gutter={16}>
        {authors && authors.map((author) => {
          return <Col key={author._id} className="gutter-row" span={6} >
            <div className={authorstyle.imgcol}>
              <div className={authorstyle.photoDiv}>
              <img className={authorstyle.imgcol2} src={author.imageUrl} alt="" />
              </div>
              <div className={authorstyle.centerDiv}>
                <h1><Link to={`/authors/${author._id}`}>{author.name}</Link></h1>
                <p>{author.surname}</p>
              </div>
              <div className={authorstyle.aboutDiv}>
                <p>{author.genre}</p><hr></hr>
                <div className={authorstyle.btnDiv}>
                  <button

                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteAuthorByID(author._id).then((res) => {
                            Swal.fire(
                              `${res.name} Deleted!`,
                              "Your author has been deleted.",
                              "success"
                            );
                          });
                          setAuthors(
                            authors.filter((x) => x._id !== author._id)
                          );
                        }
                      });
                    }}
                    variant="outlined"
                    color="warning"


                    className={authorstyle.deletebtn}><Link style={{color:"black"}}><DeleteForeverIcon />Delete</Link></button>
                  <button className={authorstyle.editbtn}><Link style={{color:"black"}} to={`/authors/edit/${author._id}`}><DrawIcon />Edit</Link></button>
                </div>
              </div>
            </div>
          </Col>
        })}


      </Row>
    </div>

  )
}

export default Authors