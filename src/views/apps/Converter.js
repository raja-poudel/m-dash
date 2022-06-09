import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// material-ui
// import { useTheme } from '@mui/material/styles';
import {
    Grid,
    Button,
    Box,
    TextareaAutosize,
    FormControl,
    FormLabel,
    RadioGroup,
    Radio,
    FormControlLabel,
    IconButton,
    Tooltip
} from '@mui/material';
import { RestartAlt, ContentCopy, ContentPaste } from '@mui/icons-material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// thirdparty imports
import toast from 'react-hot-toast';

const Converter = () => {
    // const theme = useTheme();
    // const customization = useSelector((state) => state.customization);
    // const { navType } = customization;
    const [state, setState] = useState({
        csv: '',
        json: [],
        from: 'csv',
        to: 'json'
    });
    // const orangeDark = theme.palette.secondary[800];

    useEffect(() => {}, []);

    const handleCSVChange = (data) => {
        setState((prev) => ({ ...prev, csv: data }));
    };
    const handleJSONChange = (data) => {
        setState((prev) => ({ ...prev, json: data }));
    };
    const CSVToJSON = (csv) => {
        const lines = csv.split('\n');
        const keys = lines[0].split(',');
        const data = lines.slice(1);
        const jsonArray = [];
        for (let i = 0; i < data.length; i += 1) {
            const afterSplit = data[i].split(',');
            const obj = {};
            for (let j = 0; j < afterSplit.length; j += 1) {
                obj[keys[j]] = afterSplit[j];
            }
            jsonArray.push(obj);
        }
        return jsonArray;
    };
    const handleConvert = () => {
        const jsonData = CSVToJSON(state.csv);
        setState((prev) => ({ ...prev, json: jsonData }));
    };
    const handleReset = () => {
        setState((prev) => ({ ...prev, csv: '', json: [] }));
    };
    const handleChange = () => {};
    const handlePast = async (ele) => {
        const value = await navigator.clipboard.readText();
        setState((prev) => ({ ...prev, [ele]: value }));
    };
    const handleCopyAll = (ele) => {
        if (ele === 'json') {
            navigator.clipboard.writeText(JSON.stringify(state.json, undefined, 4));
        } else {
            navigator.clipboard.writeText(state.csv);
        }
        toast('Copied to clipboard.');
    };
    return (
        <MainCard
            title="Converter"
            secondary={
                <Tooltip title="Reset Converter">
                    <IconButton onClick={handleReset}>
                        <RestartAlt sx={{ size: 40, cursor: 'pointer', color: 'inherit' }} />
                    </IconButton>
                </Tooltip>
            }
        >
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <FormControl xs={12} md={6}>
                        <FormLabel id="from">From</FormLabel>
                        <RadioGroup row aria-labelledby="from" name="from" value={state.from} onChange={handleChange}>
                            <FormControlLabel value="csv" control={<Radio />} label="CSV" />
                            <FormControlLabel value="json" disabled control={<Radio />} label="JSON" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl xs={12} md={6}>
                        <FormLabel id="to">To</FormLabel>
                        <RadioGroup row aria-labelledby="to" name="to" value={state.to} onChange={handleChange}>
                            <FormControlLabel value="csv" disabled control={<Radio />} label="CSV" />
                            <FormControlLabel value="json" control={<Radio />} label="JSON" />
                        </RadioGroup>
                    </FormControl>
                    <Box xs={12}>
                        <Button disableElevation variant="contained" size="small" sx={{ color: 'inherit' }} onClick={handleConvert}>
                            Convert
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard
                        title="CSV"
                        secondary={
                            <Box>
                                <Tooltip title="Past">
                                    <IconButton onClick={() => handlePast('csv')}>
                                        <ContentPaste />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Copy All">
                                    <IconButton onClick={() => handleCopyAll('csv')}>
                                        <ContentCopy />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        }
                    >
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <TextareaAutosize
                                    value={state.csv}
                                    onChange={(e) => handleCSVChange(e.target.value.trimStart())}
                                    style={{
                                        width: '100%',
                                        height: 350,
                                        resize: 'vertical',
                                        overflow: 'auto'
                                    }}
                                    placeholder="Enter csv here..."
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard
                        title="JSON"
                        secondary={
                            <Box>
                                <Tooltip title="Past" onClick={() => handlePast('json')}>
                                    <IconButton>
                                        <ContentPaste />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Copy All">
                                    <IconButton onClick={() => handleCopyAll('json')}>
                                        <ContentCopy />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        }
                    >
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <TextareaAutosize
                                    value={JSON.stringify(state.json, undefined, 4)}
                                    onChange={(e) => handleJSONChange(e.target.value)}
                                    style={{
                                        width: '100%',
                                        height: 350,
                                        resize: 'vertical',
                                        overflow: 'auto'
                                    }}
                                    placeholder="Enter json here..."
                                />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Converter;
