import { Spinner, Text, Box, Grid, GridItem } from "@chakra-ui/react";
import { useCurrency } from "../common/hooks/useCurrency"
import ConverterHeader from "./components/ConverterHeader";
import ConverterOption from "./components/ConverterOption/ConverterOption";
import ConverterInput from "./components/ConverterInput/ConverterInput";
import ConverterDisplay from "./components/ConverterDisplay/ConverterDisplay";
import { RepeatIcon } from "@chakra-ui/icons";

const Converter = () => {
    const {
        isLoading,
        isError,
        amount,
        setAmount,
        currencyOne,
        setCurrencyOne, 
        currencyTwo, 
        setCurrencyTwo,
        currencyList,
        convertedAmount,
        ratesData, 
        symbolsData, 
        date, 
        exchangeRate
    } = useCurrency();

    if(isError) return (
        <Text fontWeight='bold' fontSize='3xl' color="white" my="10">Something has gone terribly wrong</Text>
    );

    if(isLoading) return (
        <Spinner margin='auto 0' size='xl' thickness="4px" speed="0.65s" color="purple.500" emptyColor="purple.200"/>
    )

    const handleSwitch = () => {
        setCurrencyOne(currencyTwo);
        setCurrencyTwo(currencyOne);        
        }

    const initial = date.split(/\//);
    const date1 = ( [ initial[1], initial[0], initial[2] ].join('/')); 

    

    return (       
        <Box width={{  base: "400px", sm: "450px", md: "500px", lg: "520px", xl:"570px" }} m='1' mt='0'> 
        <ConverterHeader />
        <Grid 
            templateColumns="repeat(5, 1fr)" 
            templateRows="repeat(2, 1fr)" 
            padding={{ base:"6", sm:"10" }} 
            gap="1rem" 
            backgroundColor="white" 
            borderRadius="lg"
        >
            <GridItem colSpan={{base:4, sm:4}} 
            justifySelf="center"
            alignSelf="center"> 
                <ConverterOption 
                symbol={symbolsData.data} 
                currencyList={currencyList} 
                onCurrencyChange={setCurrencyOne}
                currency={currencyOne} 
                />
            </GridItem>

            <GridItem 
            display={{base:1, sm:"block" }}
            colSpan={1} 
            justifySelf="center"
            alignSelf="center"> 
                <RepeatIcon boxSize={{ base: "30px", sm: "32px", md: "34px", lg: "36px", xl: "38px" }} color="purple.300" onClick={handleSwitch} />
            </GridItem>

            <GridItem colSpan={{base:4, sm:4}} 
            justifySelf="center"
            alignSelf="center"> 
                <ConverterOption 
                symbol={symbolsData.data} 
                currencyList={currencyList} 
                onCurrencyChange={setCurrencyTwo}
                currency={currencyTwo} 
                />    
            </GridItem>

            <GridItem colSpan={2}>
                <ConverterInput value={amount} onAmountChange={setAmount} />
            </GridItem>

            <GridItem colSpan={3} justifySelf="right" alignSelf="right">
                <ConverterDisplay 
                amount={amount}            
                currencyOne={currencyOne} 
                currencyTwo={currencyTwo} 
                convertedAmount={convertedAmount} 
                date={date1}                 
                symbol={symbolsData.data}
                exchangeRate={exchangeRate}
                />
            </GridItem>
        </Grid>
        <Text textAlign="center" marginTop="1rem" color="whiteAlpha.600" fontSize={{base:'10px', sm:'12px', md:'14px', lg:'14px'}}> Built with love, by Sheetal Ganeshgudi using React, React Query, Axios, Chakra UI </Text>
        </Box>          
    );
}

export default Converter;