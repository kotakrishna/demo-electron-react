import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import {Container,Box,Paper} from '@material-ui/core'
export default function DataTables() {
    // const [row,setRow] =React.useState([])
    const row=[
        {
            "id":'data1',
            "name":"kota",
            "age":"26",
            "gender":"male",
            "flat":"60fbd46d0307e8242c4480a7"
        },
        {
            "id":'data2',
            "name":"Kumar",
            "age":"49",
            "gender":"Male",
            "flat":"60fbd46d0307e8242c4480a5"
        },
        {
            "id":'data3',
            "name":"David",
            "age":"56",
            "gender":"male",
            "flat":"60fbd46d0307e8242c4480a7"
        },
        {
            "id":'data4',
            "name":"Venkat",
            "age":"15",
            "gender":"female",
            "flat":"60fbd46d0307e8242c4480a9"
        },
        {
            "id":'data5',
            "name":"Someone",
            "age":"2",
            "gender":"male",
            "flat":"60fbd46d0307e8242c4480ae"
        },
        {
            "id":'data6',
            "name":"barbie",
            "age":"18",
            "gender":"female",
            "flat":"60fbd46d0307e8242c4480ab"
        },
        {
            "id":'data7',
            "name":"kota",
            "age":"26",
            "gender":"male",
            "flat":"60fbd46d0307e8242c4480a7"
        },
        {
            "id":'data8',
            "name":"Genius",
            "age":"25",
            "gender":"female",
            "flat":"60fbd46d0307e8242c4480a4"
        },
        {
            "id":'data9',
            "name":"heroine",
            "age":"23",
            "gender":"female",
            "flat":"60fbd46d0307e8242c4480a6"
        },
        {
            "id":'data10',
            "name":"Director",
            "age":"46",
            "gender":"female",
            "flat":"60fbcecbc84dc032d80153dd"
        },
        {
            "id":'data11',
            "name":"kota",
            "age":"26",
            "gender":"male",
            "flat":"60fbd46d0307e8242c4480a7"
        }
    ]
    const columns=[
        {
          field:"name",
          headerName:"Name",
          width:200
        },
        {
          field:"age",
          headerName:"AGE",
          width:200
        },
        {
          field:"flat",
          headerName:"Flat",
          width:200
        },
        {
          field:"gender",
          headerName:"Gender",
          width:200
        },
      ] 
    return (
        <div>
            <Container>

<Paper component={Box} style={{height:400,marginTop:"50px", width:"80%",margin:"auto"}}>
  {
      (row!=undefined&& row.length>0)?
      <DataGrid  pageSize={5} pagination rows={row} columns={columns}/>:
      <>No user</>
    }
</Paper>
    </Container>
        </div>
    )
}
