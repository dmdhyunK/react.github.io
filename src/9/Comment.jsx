import React from "react";
const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  commentText: {
    color: "black",
    fontSize: 16,
  },
};

function Comment(props) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.imageContainer}>
          <img
            alt=""
            src="https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?semt=ais_hybrid"
            style={styles.image}
          />
        </div>
  
        <div style={styles.contentContainer}>
          <span style={styles.nameText}>{props.name}</span>
          <span style={styles.commentText}>{props.comment}</span>
        </div>
      </div>
    );
  }  
export default Comment;