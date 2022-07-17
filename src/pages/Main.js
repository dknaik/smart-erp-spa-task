import React, { useRef, useState } from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Post from "../components/Posts";
import "../Styles/index.scss";
import styles from "../Styles/Main.module.scss";
import InputField from "../components/InputField";
import { useDispatch } from "react-redux";
import { SEARCH } from "../Redux/types/searchType";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Main = () => {
  const [showPost, setShowPost] = useState(false);
  const [newPost, setNewPost] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const dispatch = useDispatch();

  //setting search data globaly
  const handleSearch = (e) => {
    console.log("search", e.target.value);
    setSearchKey(e.target.value);
    dispatch({ type: SEARCH, payload: e.target.value });
  };
  // clearing search filed
  const clearSearchHandler = () => {
    console.log("ssds", searchKey);
    setSearchKey("");
    dispatch({
      type: SEARCH,
      payload: "",
    });
  };

  return (
    <main>
      <section className={styles.test}>
        <div className={` container `}>
          <div className="col-lg-6 offset-lg-3">
            <div className="d-flex align-items-center">
              <InputField
                onChange={handleSearch}
                value={searchKey}
                fieldType="search"
                placeholder="Search"
              />
              <span>
                <Button
                  className={styles.searchBtn}
                  btnStyle={`btn btn-medium btn-info mt-2 ${styles.searchBtn} `}
                  btntype="button"
                  onClick={clearSearchHandler}
                >
                  <AiOutlineCloseCircle />
                </Button>
              </span>
            </div>
          </div>
          <div className={`${styles.form_display_container} row `}>
            <div className="col-lg-8 offset-lg-2 ">
              <div className=" form-post-btn-container d-flex justify-content-between py-5 ">
                <Button
                  btnName="New Post"
                  btnStyle="btn btn-small btn-info"
                  onClick={() => {
                    setNewPost(true);
                    setShowPost(false);
                  }}
                />
                <Button
                  btnName="Published"
                  btnStyle="btn btn-small btn-info"
                  onClick={() => {
                    setShowPost(true);
                    setNewPost(false);
                  }}
                />
              </div>
              <div className="pb-5">
                {newPost && <Form></Form>}
                {showPost && <Post />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Main;
