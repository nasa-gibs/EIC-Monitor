import React, { useEffect, useState } from 'react';
import { 
    Flex, 
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, 
    Spinner,
    Button,
} from '@chakra-ui/react';
import config, { scenarioUrls } from '../../config/config';
import { useSelector, useDispatch } from 'react-redux';
import { 
    selectScenario as selectScenarioAction,
    selectContent as selectContentAction 
} from '../../redux/slice';

const Scenarios = () => {
    const dispatch = useDispatch();
    const selectContent = (content) => { dispatch(selectContentAction(content)) }
    const selectScenario = (scenario) => { dispatch(selectScenarioAction(scenario)) }

    const [scenarioData, setScenarioData] = useState([]);

    const requestScenarios = async () => {
        const url = "https://worldview.earthdata.nasa.gov/eic/all-scenarios"
        try {
            const response = await fetch(url);
            const data = await response.json();
            setScenarioData(data.items)
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleEicSelection = (scenarioId) => {
        selectScenario(scenarioId);
        selectContent('eic');
    }

    useEffect(() => {
        requestScenarios();
    }, []);

    const renderTable = () => {
        if (scenarioData.length) {
            const organizeScenarios = () => {
                const scenarios = [];
            
                const scenarioMap = scenarioData.reduce((acc, scenario) => {
                    acc[scenario.item_id] = scenario.resolution_date;
                    return acc;
                }, {});
            
                Object.keys(config).forEach(item_id => {
                    const resolutionDate = scenarioMap[item_id] || 'No valid date found';
                    const layers = config[item_id];
                    scenarios.push({
                        id: item_id,
                        layers: layers,
                        date: resolutionDate
                    });
                });
            
                scenarios.sort((a, b) => parseInt(a.id) - parseInt(b.id));
            
                return scenarios;
            };
            const scenarios = organizeScenarios();
            return (
                <TableContainer>
                    <Table>
                        <TableCaption color="whiteAlpha.900" fontSize="md">
                            Resolution date represents the most recent date that each layer in a scenario shares available imagery
                        </TableCaption>
                        <Thead>
                            <Tr>
                                <Th color="whiteAlpha.900" fontSize="lg" textAlign="center">Scenario</Th>
                                <Th color="whiteAlpha.900" fontSize="lg" textAlign="center">Layers</Th>
                                <Th color="whiteAlpha.900" fontSize="lg" textAlign="center">Resolution Date</Th>
                                <Th color="whiteAlpha.900" fontSize="lg" textAlign="center">EIC</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {scenarios.map(scenario => {
                                return (
                                    <Tr key={scenario.id}>
                                        <Td textAlign="center">{scenario.id}</Td>
                                        <Td>
                                            {scenario.layers.map((layer, index) => (
                                                <Text as="div" key={index} textAlign="center">
                                                    {layer}
                                                </Text>
                                            ))}
                                        </Td>
                                        <Td textAlign="center">
                                            {scenario.date}
                                        </Td>
                                            <Td>
                                            { scenarioUrls[scenario.id] &&
                                                <Button colorScheme="blue" variant="solid" onClick={() => handleEicSelection(scenario.id)}>
                                                    See EIC
                                                </Button>
                                            }
                                            </Td>
                                        </Tr>
                                        );
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
            )
        } else {
            return (
            <Flex justifyContent="center" alignItems="center">
                <Spinner size='xl' color='red.500' />
            </Flex>
            )
        }
    }
    
    return (
        <Flex width="full" justifyContent="start" alignItems="center" flexDirection={"column"}>
            <Flex justifyContent="center" alignItems="center" width="full" mt="4" mb="4">
                <Text as="h1" fontSize="3xl">
                    Scenarios
                </Text>
                <Button colorScheme="blue" variant="solid" ml="4" onClick={() => requestScenarios()}>
                    Refresh Scenarios
                </Button>
            </Flex>
            {renderTable()}
        </Flex>
    );
}

export default Scenarios;