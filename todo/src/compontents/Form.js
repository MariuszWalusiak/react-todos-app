import React from "react";
import styled from 'styled-components';




const StyledH1 = styled.h1`
    font-size: 100px;
    font-weight: 400;
    color: rgba(175, 47, 47, 0.15);
    text-align: center;
`

const StyledButton = styled.button`
    border: 0px;
`

const StyledInput = styled.input`
    border: 0px;
    padding: 16px 16px 16px 60px;
    box-shadow:inset 0 -2px 1px rgb(0 0 0 / 3%);
    width: 550px;
    height: 66px;
    font-size: 24px;
    line-height: 1.4em;
    color: #4d4d4d;
    &::placeholder {
        font-style: italic;
        color: lightgray;
    }
    &:focus {
        outline: 0;
    }
`

export const Form = () => {
    return ( 
        <>
            <form>
                <label htmlFor="add-task">
                    <StyledH1>todos</StyledH1>
                    <StyledButton>></StyledButton>
                    <StyledInput type="text" name="add-task" placeholder="What needs to be done?"></StyledInput>
                </label>
            </form>
        </>
     );
}
 
