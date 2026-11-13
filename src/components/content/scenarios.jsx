import { useEffect, useState, useCallback } from 'react';
import { 
    Flex, 
    Text,
    Table,
    Spinner,
    Button,
} from '@chakra-ui/react';
import {scenarioLayers, scenarioUrls } from '../../config/config';
import { useDispatch } from 'react-redux';
import { 
    selectScenario as selectScenarioAction,
    selectContent as selectContentAction 
} from '../../redux/slice';

const Scenarios = () => {
    const dispatch = useDispatch();
    const selectContent = (content) => { dispatch(selectContentAction(content)) }
    const selectScenario = (scenario) => { dispatch(selectScenarioAction(scenario)) }

    const [scenarioData, setScenarioData] = useState([]);

    const requestScenarios = useCallback(async () => {
        const url = "https://worldview.earthdata.nasa.gov/eic/all-scenarios"
        try {
            const response = await fetch(url);
            const data = await response.json();
            setScenarioData(data.items)
        }
        catch (error) {
            console.log(error);
        }
    }, []);

    const handleEicSelection = (scenarioId) => {
        selectScenario(scenarioId);
        selectContent('eic');
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        requestScenarios();
    }, [requestScenarios]);

    const renderTable = () => {
        if (scenarioData.length) {
            const organizeScenarios = () => {
                const scenarios = [];
            
                const scenarioMap = scenarioData.reduce((acc, scenario) => {
                    acc[scenario.item_id] = scenario.resolution_date;
                    return acc;
                }, {});
            
                Object.keys(scenarioLayers).forEach(item_id => {
                    const resolutionDate = scenarioMap[item_id] || 'No valid date found';
                    const layers = scenarioLayers[item_id];
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
                <Table.Root className="dark" variant="simple" size="md">
                    <Table.Caption fontSize="md" py="4" px="6">
                        Resolution date represents the most recent date that each layer in a scenario shares available imagery
                    </Table.Caption>
                    <Table.Header textTransform="uppercase" borderBottomWidth="1px" borderColor="white">
                        <Table.Row>
                            <Table.ColumnHeader fontSize="lg" textAlign="center">Scenario</Table.ColumnHeader>
                            <Table.ColumnHeader fontSize="lg" textAlign="center">Layers</Table.ColumnHeader>
                            <Table.ColumnHeader fontSize="lg" textAlign="center">Resolution Date</Table.ColumnHeader>
                            <Table.ColumnHeader fontSize="lg" textAlign="center">EIC</Table.ColumnHeader>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body divideY="1px" divideColor="white" borderBottomWidth="1px" borderColor="white">
                        {scenarios.map(scenario => {
                            return (
                                <Table.Row key={scenario.id}>
                                    <Table.Cell textAlign="center">{scenario.id}</Table.Cell>
                                    <Table.Cell>
                                        {scenario.layers.map((layer, index) => (
                                            <Text as="div" key={index} textAlign="center">
                                                {layer}
                                            </Text>
                                        ))}
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">
                                        {scenario.date}
                                    </Table.Cell>
                                    <Table.Cell textAlign="center">
                                        {scenarioUrls[scenario.id] &&
                                            <Button colorPalette="blue" variant="solid" onClick={() => handleEicSelection(scenario.id)}>
                                                See EIC
                                            </Button>
                                        }
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table.Root>
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
                <Button colorPalette="blue" variant="solid" ml="4" onClick={() => requestScenarios()}>
                    Refresh Scenarios
                </Button>
            </Flex>
            {renderTable()}
        </Flex>
    );
}

export default Scenarios;