import React from "react";
import { useSelector } from "react-redux";
import styles from "./post.module.scss";
const Post = () => {
  const { data } = useSelector((state) => state.reducer);
  const { searchData } = useSelector((state) => state.searchReducer);
  console.log("dataaaa", data, searchData);
  return (
    <div className={`${styles.post} jumbotron jumbotron-fluid`}>
      <div className="container">
        {data
          .filter((val) => {
            if (searchData === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchData.toLowerCase()) ||
              val.desc.toLowerCase().includes(searchData.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, index) => {
            return (
              <div
                key={index}
                className={`border border-primary ps-3 pt-3 mb-2 ${styles.custom_scroll}`}
              >
                <h5 className="text-white">
                  <u>{val.title}</u>
                </h5>
                <p className="lead text-white">{val.desc}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Post;
