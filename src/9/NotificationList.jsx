import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  {
    id:1,
    message: "경로 안내를 시작합니다.",
  },
  {
    id:2,
    message: "300m 앞 좌회전입니다.",
  },
  {
    id:3,
    message: "다음 안내까지 직진입니다.",
  },
];

var timer;
class NotificationList extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        notifications: [], //state에 넣어서 초기화
      };
    }
  
    componentDidMount() {
      const { notifications } = this.state;
      timer = setInterval(() => {
        if (notifications.length < reservedNotifications.length) {
          const index = notifications.length;
          notifications.push(reservedNotifications[index]);
          this.setState({
            notifications: notifications,
          });
        } else{
            this.setState({
                notifications:[], //안쓰면 하나씩 안나옴
            });
            clearInterval(timer);
        }
      }, 1000);
    }
    componentWillUnmount(){
        if(timer){
            clearInterval(timer);
        }
    }
    render(){
        return(
            <div>
                {this.state.notifications.map((notification)=>{
                    return <Notification
                     key={notification.id} id={notification.id} message={notification.message}/>
                })}
            </div>
        );
    }
  }
  export default NotificationList;