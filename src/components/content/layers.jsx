import React, { useEffect, useState } from 'react';
import { 
    Flex, 
    Text,
    Spinner,
    Button,
    Divider,
    Grid,
    Box,
    
} from '@chakra-ui/react';

const Layers = () => {
    const [layerData, setLayerData] = useState([])

    const requestLayers = async () => {
        const url = "https://nsj8g82r8j.execute-api.us-east-1.amazonaws.com/dev/all-layers"
        try {
            const response = await fetch(url);
            const data = await response.json();
            setLayerData(data['Items'])
        }
        catch (error) {
            console.log(error.message);
        }
    }

    const renderLayers = () => {
        if (layerData.length) {
            return layerData.map((layer) => {
                console.log(layer)
                const layerName = layer.item_id;
                const { threshold, period } = layer.config;
                const successfulDates = layer?.successful_dates || [];
                // LAST REQUEST ITEMS
                const lastRequest = layer.last_request;
                const url = layer.last_request.url;
                const blackPixels = layer.last_request.black_pixels;
                const difference = layer.last_request.difference;
                const differenceIndicator = blackPixels > threshold ? 'red' : 'green';
                // LAST SUCCESSFUL REQUEST ITEMS
                const lastSuccessfulRequest = layer.last_successful_request;

                return (
                <Flex key={layerName} direction="column" my="2" p="2" boxShadow="md" width="80%" borderRadius="md">
                    <Divider mb="2" />
                    <Text fontSize="2xl" fontWeight="bold" mb="2">{layerName}</Text>
                    <Grid templateColumns="minmax(150px, auto) 1fr" gap={2}>
                        <Text fontSize="md" fontWeight="semibold">Period:</Text>
                        <Text fontSize="md">{period.toUpperCase()}</Text>

                        <Text fontSize="md" fontWeight="semibold">Threshold:</Text>
                        <Text fontSize="md">{threshold}</Text>
                    </Grid>
                    <Text fontSize="lg" fontWeight="bold" mt="4" mb="2">LAST REQUEST</Text>
                    <Grid templateColumns="minmax(150px, auto) 1fr" gap={2} alignItems="center">
                        <Text fontSize="md" fontWeight="semibold">Time of Search:</Text>
                        <Text fontSize="md">{lastRequest.time_of_search}</Text>

                        <Text fontSize="md" fontWeight="semibold">Imagery Date:</Text>
                        <Text fontSize="md">{lastRequest.date}</Text>

                        <Text fontSize="md" fontWeight="semibold">Status:</Text>
                        <Text fontSize="md">{lastRequest.status.toUpperCase()}</Text>

                        <Text fontSize="md" fontWeight="semibold">Failure Reason:</Text>
                        <Text fontSize="md">{lastRequest.failure_reason.toUpperCase()}</Text>

                        <Text fontSize="md" fontWeight="semibold">Black Pixels:</Text>
                        <Text fontSize="md">{blackPixels}</Text>

                        <Text fontSize="md" fontWeight="semibold">Difference:</Text>
                        <Text fontSize="md" fontWeight="bold" color={differenceIndicator}>{difference}</Text>

                        <Button 
                        colorScheme="blue" 
                        size="sm" 
                        mb="2" 
                        onClick={() => window.open(url, '_blank')}
                        >
                        View Imagery
                        </Button>
                    </Grid>
                    <Text fontSize="lg" fontWeight="bold" mt="4" mb="2">LAST SUCCESSFUL REQUEST</Text>
                    <Grid templateColumns="minmax(150px, auto) 1fr" gap={2} alignItems="center">
                        <Text fontSize="md" fontWeight="semibold">Time of Search:</Text>
                        <Text fontSize="md">{lastSuccessfulRequest.time_of_search}</Text>

                        <Text fontSize="md" fontWeight="semibold">Imagery Date:</Text>
                        <Text fontSize="md">{lastSuccessfulRequest.date}</Text>

                        <Text fontSize="md" fontWeight="semibold">Status:</Text>
                        <Text fontSize="md">{lastSuccessfulRequest.status.toUpperCase()}</Text>

                        <Text fontSize="md" fontWeight="semibold">Failure Reason:</Text>
                        <Text fontSize="md">{lastSuccessfulRequest.failure_reason.toUpperCase()}</Text>

                        <Text fontSize="md" fontWeight="semibold">Black Pixels:</Text>
                        <Text fontSize="md">{lastSuccessfulRequest.black_pixels}</Text>

                        <Text fontSize="md" fontWeight="semibold">Difference:</Text>
                        <Text fontSize="md" fontWeight="bold" color="green">{lastSuccessfulRequest.difference}</Text>

                        <Button 
                        colorScheme="blue" 
                        size="sm" 
                        mb="2" 
                        onClick={() => window.open(lastSuccessfulRequest.url, '_blank')}
                        >
                        View Imagery
                        </Button>
                    </Grid>

                    <Text fontSize="lg" fontWeight="semibold" mt="4">Successful Dates:</Text>
                    <Box pl="150px"> 
                        {successfulDates.map((date, index) => (
                            <Text key={index} fontSize="md">{date}</Text>
                        ))}
                    </Box>
                </Flex>
                );
            });
        } else {
            return (
                <Flex justifyContent="center" alignItems="center">
                    <Spinner size='xl' color='red.500' />
                </Flex>
            );
        }
    };

    useEffect(() => {
        requestLayers();
    }, []);

    return (
        <Flex width="full" justifyContent="start" alignItems="center" flexDirection={"column"}>
            <Flex justifyContent="center" alignItems="center" width="full" mt="4" mb="4">
                <Text as="h1" fontSize="3xl">
                    Layers
                </Text>
                <Button colorScheme="blue" variant="solid" ml="4" onClick={requestLayers}>
                    Refresh Layers
                </Button>
            </Flex>
            {renderLayers()}
        </Flex>
    )
}

export default Layers;