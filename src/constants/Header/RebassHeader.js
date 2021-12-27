import React from 'react';
import { Heading } from "rebass";
export const Header1 = ({
    name,
    fontFamily,
    fontSize,
    color,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    alignItems
}) => {
    return (
        <Heading //wrapper compnnt
            fontFamily={fontFamily}
            color={color}
            fontSize={fontSize}
            mb={marginBottom}
            mt={marginTop}
            alignItems={alignItems}
        >
            {name}

        </Heading>
    )
}
export default Heading;