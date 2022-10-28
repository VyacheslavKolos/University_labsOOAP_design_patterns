// import * as React from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import Button from '@mui/material/Button';
// import {useForm} from "react-hook-form";
// import {FC} from "react";
//
//
// const Form : FC<{setAnswer:any}>= ({setAnswer}) => {
//
//     const {register, handleSubmit, resetField} =  useForm()
//
//     const onSubmit = (d: any) => {
//         setAnswer(d)
//     }
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <FormControl>
//                 <FormLabel id="demo-row-radio-buttons-group-label">Choose option</FormLabel>
//                 <RadioGroup
//                     row
//                     aria-labelledby="demo-row-radio-buttons-group-label"
//                     name="row-radio-buttons-group"
//                 >
//                     <FormControlLabel {...register("1")} value="1" control={<Radio/>} label="1"/>
//                     <FormControlLabel {...register("2")} value="2" control={<Radio/>} label="2"/>
//                     <FormControlLabel {...register("3")} value="3" control={<Radio/>} label="3"/>
//                     <Button variant="contained" type={'submit'}>Submit</Button>
//                 </RadioGroup>
//             </FormControl>
//         </form>
//     );
// }
//
// export default Form;


import React, {FC} from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { useForm, Controller } from 'react-hook-form';
import {Box} from "@mui/material";

const Form : FC<{setAnswer:any}>= ({setAnswer}) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        defaultValues: {
            answer: '',
        },
    });

    const onSubmit = (data:any) =>
    {
        setAnswer(data.answer)
    }

    return (
        <div style={{ padding: 16, maxWidth: 600 }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box display={"flex"} flexDirection={"column"} sx={{border:'2px solid darkblue', p:2}}>
                    <FormControl component="fieldset">
                    <FormLabel component="legend">Choose option</FormLabel>
                    <Controller
                        rules={{required: true}}
                        control={control}
                        name="answer"
                        render={({field}) => {
                            return (
                                <RadioGroup {...field}>
                                    <FormControlLabel
                                        value="1"
                                        control={<Radio/>}
                                        label="1"
                                    />
                                    <FormControlLabel
                                        value="2"
                                        control={<Radio/>}
                                        label="2"
                                    />
                                    <FormControlLabel
                                        value="3"
                                        control={<Radio/>}
                                        label="3"
                                    />
                                    <FormControlLabel
                                        value="4"
                                        control={<Radio/>}
                                        label="4"
                                    />
                                    <FormControlLabel
                                        value="5"
                                        control={<Radio/>}
                                        label="5"
                                    />
                                    <FormControlLabel
                                        value="6"
                                        control={<Radio/>}
                                        label="6"
                                    />
                                    <FormControlLabel
                                        value="7"
                                        control={<Radio/>}
                                        label="7"
                                    /> <FormControlLabel
                                    value="8"
                                    control={<Radio/>}
                                    label="8"
                                />
                                </RadioGroup>
                            );
                        }}
                    />
                </FormControl>

                    <Box display={"flex"} flexDirection={'column'} gap={'10px'} >
                        <button onClick={() => reset()}>reset</button>
                        <input type="submit" value={'send'}/></Box>
                </Box>
            </form>
        </div>
    );
}

export default Form;
