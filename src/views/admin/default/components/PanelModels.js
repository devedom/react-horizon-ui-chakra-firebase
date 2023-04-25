import {
    Box,
    Flex,
    Text,
    Icon,
    Image,
    Radio,
    RadioGroup,
    useRadio,
    chakra,
    Label
  } from "@chakra-ui/react";
  
// Assets
import React from "react";

  
export default function RadioCard(props) {
  const { image, ...radioProps } = props
  const { state, getInputProps, getRadioProps, htmlProps, getLabelProps } =
    useRadio(radioProps)

  return (
    
        <chakra.label {...htmlProps} cursor='pointer'>
          <input {...getInputProps({})} hidden />
          <Box
            {...getRadioProps}
            bg={state.isChecked ? 'blue.200' : 'transparent'}
            w={100}
            p={1}
            rounded='no'
          >
          <Image src={image} rounded='no' {...getLabelProps} />
          </Box>
        </chakra.label>
      
  );
}
