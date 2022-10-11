import React from 'react';
import {Formik,Form,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function CreatePost() {
  const initalValues = {
    title :"",
    postText : "",
    username : "",
  }
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("IT WORKED");
    });
  }
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a Title!"),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  return (
    <div className='createPostPage'>
      <Formik initialValues={initalValues} onSubmit = {onSubmit} validationSchema = {validationSchema}>
        <Form className='formContainer'>
          <label>Title:</label>
          <ErrorMessage name="title" component="span" />
          <Field  id="inputCretePost" name="title" placeholder = "(EX. Title...)"/>
          <label>Post Text:</label>
          <ErrorMessage name="postText" component="span" />
          <Field  id="inputCretePost" name="postText" placeholder = "(EX. Post the text...)"/>
          <label>username:</label>
          <ErrorMessage name="username" component="span" />
          <Field  id="inputCretePost" name="username" placeholder = "(EX. John123...)"/>
          <button type='submit'>Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;  
