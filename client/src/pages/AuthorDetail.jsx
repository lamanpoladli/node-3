
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAuthorByID , deleteAuthorByID} from '../api/requests';
import authorstyle from "./AuthorDetail.module.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DrawIcon from '@mui/icons-material/Draw';
import Swal from "sweetalert2";
import { Col, Row } from 'antd';
import { Link } from "react-router-dom";
const AuthorDetail = () => {
  const{id} = useParams();
  const[author,setAuthor] = useState({});
  useEffect(()=>{
    getAuthorByID(id).then(res=>{
      setAuthor(res);
    })
  },[id]);
  return (
    <>
    
    <div  className={authorstyle.container3}>
      <Row className={authorstyle.row3} gutter={16}>
      
          <Col key={author._id} className="gutter-row" span={6} >
            <div className={authorstyle.imgcol}>
              <div className={authorstyle.photoDiv}>
              <img className={authorstyle.imgcol2} src={author.imageUrl} alt="" />
              </div>
              <div className={authorstyle.centerDiv}>
                <h1>{author.name}</h1>
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

                        }
                      });
                    }}
                    variant="outlined"
                    color="warning"


                    className={authorstyle.deletebtn}><DeleteForeverIcon />Delete</button>
                  <button className={authorstyle.editbtn}><DrawIcon />Edit</button>
                  <button className={authorstyle.backbtn}><Link to={`/authors`} style={{color:"white"}}>Back author page</Link></button>
                </div>
              </div>
            </div>
          </Col>



      </Row>
    </div>
    </>
  )
}

export default AuthorDetail