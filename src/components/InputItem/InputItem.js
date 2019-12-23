import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem =()=>{
	return(
		<TextField  label="дело"
		            id="outlined-size-normal"
		            defaultValue="введите таск"
		            variant="outlined"
		            size="small"/>
	)
}
export default InputItem;