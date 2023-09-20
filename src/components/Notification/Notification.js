import React from "react";

import { Msg } from "./Notification.styled"

const Notification = ({ msg }) => {
    return <Msg>{msg}</Msg>;
  };

export default Notification