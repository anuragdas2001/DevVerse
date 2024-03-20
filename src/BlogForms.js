import "./index.css";
import { useState, useEffect, useRef } from "react";
import { db } from "./firebaseInit";
import {
  collection,
  addDoc,
  doc,
  // setDoc,
  // query,
  onSnapshot,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

export default function BlogForms() {
  const [formsData, setFormsData] = useState({ title: "", content: "" });
  const [blogs, setBlogs] = useState([]);
  const titleRef = useRef(null);

  useEffect(() => {
    // async function fetchData() {
    //   const querySnapshot = await getDocs(collection(db, "blogs"));
    //   // console.log(querySnapshot);
    //   const blogs =  querySnapshot.docs.map((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     // console.log(doc.id, " => ", doc.data());
    //     return {
    //       id:doc.id,
    //       ...doc.data()
    //     }
    //   });
    //   console.log(blogs);
    //   // console.log("doc.data()",doc.data());
    //   setBlogs(blogs);
    // }
    // fetchData();

    //retrieving the data stored in the firebase on mounting phase
    //listener realtime update
    const unsub = onSnapshot(collection(db, "blogs"), (snapShot) => {
      // console.log("Current data: ", doc.data());
      const blogs = snapShot.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      // console.log(blogs);
      setBlogs(blogs);
    });
  }, []);
  async function handlePost(e) {
    e.preventDefault();
    console.log(blogs);

    if (formsData.title) {
      // const docRef = doc(collection(db, "blogs"));
      // await setDoc(docRef,{
      //     title: formsData.title,
      //     content: formsData.content,
      //     createdOn: new Date()
      //   })

      // setBlogs([
      //   { title: formsData.title, content: formsData.content },
      //   ...blogs,
      // ]);
      // Add a new document with a generated id.

      //on submitting the form data is sent to the firebase
      const docRef = await addDoc(collection(db, "blogs"), {
        title: formsData.title,
        content: formsData.content,
        createdOn: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    }

    setFormsData({ title: "", content: "" });
  }
  async function handleDelete(id) {
    // setBlogs(blogs.filter((blog, i) => i !== index));
    await deleteDoc(doc(db, "blogs", id));
  }
  return (
    <>
      <div className="mt-5">
        <h2 className="blog-heading">Blogs</h2>
        <ul className="blogs">
          {blogs.map((blog, index) => {
            return (
              <li key={index} className="blog-list">
                <button
                  className="deleteIcon"
                  onClick={() => handleDelete(blog.id)}
                >
                  X
                </button>
                <h2>{blog.title}</h2>
                <p>{blog.content}</p>
              </li>
            );
          })}
          <br></br>
        </ul>
      </div>
      <div className="section">
        <form onSubmit={(e) => handlePost(e)}>
          <div className="blog-area">
            <input
              className="title"
              placeholder="Title"
              ref={titleRef}
              value={formsData.title}
              onChange={(e) =>
                setFormsData({
                  title: e.target.value,
                  content: formsData.content,
                })
              }
            />
            <br></br>
            <input
              className="content"
              placeholder="Content"
              value={formsData.content}
              onChange={(e) =>
                setFormsData({
                  title: formsData.title,
                  content: e.target.value,
                })
              }
            />
            <br></br>
            <br></br>
            <button className="Postbtn">Post</button>
          </div>
        </form>
      </div>
    </>
  );
}
