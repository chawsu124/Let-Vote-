import {notification } from 'antd'

const noti = (type, message) => {
    notification[type]({
      message: type,
      description: message,
    });
};
  

export {noti}