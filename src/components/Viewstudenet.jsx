import React, { useEffect, useState } from 'react'
import { TableBody,TableContainer,TableHead,TableRow,TableCell ,Table} from '@mui/material'
import axios from 'axios'


const Viewstudenet = () => {
    var[data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4000/students")
        .then((response)=>{
            setData(response.data);
    })
    .catch((error)=> console.log(error));
},[]);
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'purple',fontFamily:'cursive',fontSize:'20pt'}}>Name</TableCell>
                        <TableCell style={{color:'purple',fontFamily:'cursive',fontSize:'20pt'}}>Age</TableCell>
                        <TableCell style={{color:'purple',fontFamily:'cursive',fontSize:'20pt'}}>Department</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {data.map((value,index)=>{
                            return(
                                <TableRow>
                                    <TableCell>{value.name}</TableCell>
                                    <TableCell>{value.age}</TableCell>
                                    <TableCell>{value.department}</TableCell>
                                </TableRow>
                            )
                        })}
                     </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Viewstudenet