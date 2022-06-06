import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Button } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';

// thirdparty imports
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
// project imports
// import chartData from './chart-data/bajaj-area-chart';

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const Converter = () => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const { navType } = customization;
    const [state, setState] = useState({
        csv: '',
        json: ''
    });
    const orangeDark = theme.palette.secondary[800];

    useEffect(() => {}, []);

    const handleCSVChange = (data) => {
        setState((prev) => ({ ...prev, csv: data }));
    };
    const handleJSONChange = (data) => {
        setState((prev) => ({ ...prev, json: data }));
    };
    const handleConvert = () => {
        const csvData = state.csv;
        const array = csvData.toString().split('\n');

        /* Store the converted result into an array */
        const csvToJsonResult = [];

        /* Store the CSV column headers into seprate variable */
        console.log('header start');
        const headers = array[0].split(', ');
        console.log(headers);
        console.log('header end');
        /* Iterate over the remaning data rows */
        for (let i = 1; i < array.length - 1; i += 1) {
            /* Empty object to store result in key value pair */
            const jsonObject = {};
            /* Store the current array element */
            const currentArrayString = array[i];
            let string = '';

            let quoteFlag = 0;
            // for (let character of currentArrayString) {
            //     if (character === '"' && quoteFlag === 0) {
            //         quoteFlag = 1;
            //     } else if (character === '"' && quoteFlag === 1) quoteFlag = 0;
            //     if (character === ', ' && quoteFlag === 0) character = '|';
            //     if (character !== '"') string += character;
            // }
            console.log('array string start');
            console.log(currentArrayString);
            currentArrayString.forEach((character) => {
                if (character === '"' && quoteFlag === 0) {
                    quoteFlag = 1;
                } else if (character === '"' && quoteFlag === 1) quoteFlag = 0;
                if (character === ', ' && quoteFlag === 0) character = '|';
                if (character !== '"') string += character;
            });
            console.log('array string end');
            const jsonProperties = string.split('|');

            // for (const j in headers) {
            //     if (jsonProperties[j].includes(', ')) {
            //         jsonObject[headers[j]] = jsonProperties[j].split(', ').map((item) => item.trim());
            //     } else jsonObject[headers[j]] = jsonProperties[j];
            // }
            headers.forEach((j) => {
                if (jsonProperties[j].includes(', ')) {
                    jsonObject[headers[j]] = jsonProperties[j].split(', ').map((item) => item.trim());
                } else jsonObject[headers[j]] = jsonProperties[j];
            });
            /* Push the genearted JSON object to resultant array */
            csvToJsonResult.push(jsonObject);
        }
        /* Convert the final array to JSON */
        const json = JSON.stringify(csvToJsonResult);
        console.log(json);
    };
    return (
        <MainCard title="Basic Typography" secondary={<SecondaryAction link="https://next.material-ui.com/system/typography/" />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                    <SubCard title="CSV">
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                {/* <ReactQuill
                                    value={state.csv}
                                    onChange={handleCSVChange}
                                    modules={{
                                        toolbar: false
                                    }}
                                /> */}
                                <textarea value={state.csv} onChange={(e) => handleCSVChange(e.target.value)}>
                                    please enter something
                                </textarea>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="JSON">
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <ReactQuill
                                    value={state.json}
                                    onChange={handleJSONChange}
                                    modules={{
                                        toolbar: false
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    mt: 4
                }}
            >
                <Button disableElevation variant="contained" size="small" sx={{ color: 'inherit' }} onClick={handleConvert}>
                    Convert
                </Button>
            </Grid>
        </MainCard>
    );
};

export default Converter;
