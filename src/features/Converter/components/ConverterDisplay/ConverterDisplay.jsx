import { Box, Text } from "@chakra-ui/react"

const ConverterDisplay = ({
    amount, 
    currencyOne, 
    currencyTwo, 
    convertedAmount,
    symbol,
    date,
    exchangeRate   
}) => {
    return( 
    <Box textAlign='right'>       
        <Text fontSize={{ base: "18px", sm: "16px", md: "20px", lg: "26px", xl: "32px" }} fontWeight="semibold" color="purple.500">
        {amount} {currencyOne} = {convertedAmount} {currencyTwo}
        </Text>
        <Text fontSize={{ base: "15px", sm: "12px", md: "16px", lg: "18px", xl: "20px" }} color='gray.800'>  1 {symbol[currencyOne]} = {exchangeRate} {symbol[currencyTwo]} </Text>
        <br />
        <Text fontSize={{base: "10px", sm:'10px', md:'12px'}} color='gray.400'> Market rates collected - {date} </Text>
    </Box>
    );
}

export default ConverterDisplay;