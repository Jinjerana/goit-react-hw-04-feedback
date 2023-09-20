import React from "react";

import { Title } from "./Section.styled"

const Section = ({ title, children}) => 
(
<div className="section">
    <Title className="section-title">{title}</Title>
    {children}
</div>
)

export default Section

