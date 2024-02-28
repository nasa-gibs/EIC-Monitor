import { 
    Flex, 
    Select,
} from '@chakra-ui/react';
import { scenarioUrls, scenarioUrlsProd, scenarioNicknames } from '../../config/config';
import { useSelector, useDispatch } from 'react-redux';
import { selectScenario as selectScenarioAction } from '../../redux/slice';

const EIC = () => {
    const dispatch = useDispatch();
    const selectScenario = (scenario) => { dispatch(selectScenarioAction(scenario)) }

    const selectedScenario = useSelector((state) => state.main.selectedScenario)

    const embedDimensions = {
        height: '800px',
        width: '100%',
    };

    const handleChange = (event) => {
        const scenarioId = event.target.value;
        selectScenario(scenarioId);
    };

    return (
        <>
            <Flex direction="column" align="center" justify="center" p={4} width="100%">
                <Select placeholder="Select scenario" onChange={handleChange} value={selectedScenario} mb={4}>
                    {Object.keys(scenarioUrlsProd).map((id) => (
                        <option value={id} key={id}>Scenario {id}: {scenarioNicknames[id]}</option>
                    ))}
                </Select>
                
                <div className="embed-container" style={embedDimensions}>
                    <iframe 
                        src={scenarioUrlsProd[selectedScenario]} 
                        role="application" 
                        sandbox="allow-modals allow-scripts allow-same-origin allow-forms allow-popups" 
                        width="100%" 
                        height="100%" 
                        allow="fullscreen; autoplay;" 
                        loading="lazy">
                    </iframe>
                </div>
            </Flex>
        </>
    );
}

export default EIC;
