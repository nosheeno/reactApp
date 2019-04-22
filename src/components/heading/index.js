import React from 'react';
import HeadingStyle from './styles';

export const Heading2 = (props) => {
    return(
        <HeadingStyle>
            <h2>{props.title}<span className="foo"> {props.span}</span></h2>
        </HeadingStyle>
    )
}
export const Heading3 = (props) => {
    return(
        <HeadingStyle>
            <h3 className="about">{props.title}<span className="aboutSpan"> {props.span}</span></h3>
        </HeadingStyle>
    )
}

export const Para = (props) => {
    return(
        <HeadingStyle>
            <p className="para">{props.para}</p>
        </HeadingStyle>
    )
}

export const Content = (props) => {
    return(
        <p className="processNum">{props.para}<span className="processDesign"> {props.span}</span></p>        
    )
}

export default (Heading2, Heading3, Para, Content);