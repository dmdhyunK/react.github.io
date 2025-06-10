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
    width: 100,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

const getImageById = (id) => {
    const images = {
      1: "https://cdn-icons-png.flaticon.com/512/2481/2481732.png", 
      2: "https://thumbnail10.coupangcdn.com/thumbnails/remote/492x492ex/image/vendor_inventory/3fea/75ee061f6b0e4805421946a517b90f00505c798bd3f798bdc3a4183f9e52.jpg",
      3: "https://cdn.pixabay.com/photo/2013/07/13/13/16/traffic-sign-160708_960_720.png",  
    };
    return images[id];
  };

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, message } = this.props;
    const imageUrl = getImageById(id);

    return (
      <div style={styles.wrapper}>
        <div style={styles.imageContainer}>
          <img alt="" src={imageUrl} style={styles.image} />
        </div>
        <span style={styles.messageText}>
          {this.props.message}
        </span>
      </div>
    );
  }
}
export default Notification;
