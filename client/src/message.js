import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import ListGroup from 'react-bootstrap/ListGroup';


class Message extends React.Component {


  render() {
    const { message, email } = this.props;
    const isOwnMessage = message.author === email;

    return (
        <ListGroup.Item >
            <div style={styles.container(isOwnMessage)}>
                {message.body}
                <div style={styles.author(isOwnMessage)}>{message.author}</div>
                {/* <div style={styles.timestamp}> */}
                {/*     {new Date(message.dateCreated.toISOString()).toLocaleString()} */}
                {/* </div> */}
            </div>
        </ListGroup.Item>
    );
  }
}

const styles = {

  container: (isOwnMessage) => ({
    maxWidth: "100%",
    //width: "100%",
    borderRadius: 12,
    padding: 8,
    color: "white",
    fontSize: 14,
    backgroundColor: isOwnMessage ? "grey" : "blue",
    float: isOwnMessage ? "right" : "left",
  }),
    author: (isOwnMessage) =>({
        flexDirection: "column",
        fontSize: 8,
 //       float: isOwnMessage ? "right" : "left",
        color: "white",
  }),
  timestamp: { fontSize: 8, color: "white", textAlign: "right", paddingTop: 4 },
};

export default Message;
