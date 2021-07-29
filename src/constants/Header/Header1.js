import React from 'react';
import { Heading } from "rebass";
export const Header1 = ({
    name,
    fontFamily,
    fontSize,
    color,
    marginBottom,
    marginLeft,
    marginRight,
  }) =>  {
    return(
        <Heading //wrapper compnnt
                    fontFamily={fontFamily}
                    color={color}
                    fontSize={fontSize}
                    mb={marginBottom}
                >
                    {name}
                    {/* //Ready to take  a Challenge? */}
                </Heading>
    )
}
export default Heading;