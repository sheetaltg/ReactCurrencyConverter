import { Flex, Select, Avatar } from "@chakra-ui/react";
import { useFlags } from "../../../common/hooks/useFlags";

const ConverterOption = ({
    symbol, 
    currencyList, 
    onCurrencyChange,
    currency       
}) => {
    const { flagUrl } = useFlags(currency);
   

    return (
        <Flex gap='1rem' shadow="lg" padding="0.5rem" borderRadius='lg'width={{base: "205px", sm: "300px", md: "300px", lg: "350px"}}>
            <Avatar src={flagUrl} size="xs"/>
            <Select size='md' value={currency} onChange={(e) => onCurrencyChange(e.target.value)}>
                {currencyList.map((currency) => (
                    <option key={currency} value={currency}> {currency} - {symbol[currency]}
                    </option>
                    
                ))}
                {/* {console.log("ConverterOption currency", currency)} */}
            </Select>
        </Flex>
    )
}
export default ConverterOption;