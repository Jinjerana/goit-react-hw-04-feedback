import React from "react"

import { Button } from "./Counter.styled"

const Counter = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(option => {
                return (
                    
                        <Button
                        key={option}
                        type="button"
                        onClick={() => onLeaveFeedback(option)}>
                            {option}
                        </Button>
            
                )
            })}
        </div>
    )
}

export default Counter