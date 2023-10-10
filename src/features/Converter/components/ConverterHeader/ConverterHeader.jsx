import { Box, Text } from "@chakra-ui/react"

const ConverterHeader= () => {
    return (
        <Box 
        textAlign="center"
        color="white"
        marginTop="20"
        marginBottom="10"
        >
            <Text fontWeight="semibold" fontSize={{ base: "15px", sm: "22px", md: "28px", lg: "30px", xl: "32px" }}>Currency Converter & Exchange Rates</Text>  
            <Text fontWeight="light" fontSize={{ base: "12px", sm: "14px", md: "20px", lg: "26px", xl: "28px" }}>Up to date FX Rates</Text>  
        </Box>
    );
}

export default ConverterHeader;