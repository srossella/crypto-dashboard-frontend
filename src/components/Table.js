import DataTable, { TableColumn } from 'react-data-table-component';

const columns = [
    {
        name: 'Id',
        selector: row => row.id,
        grow:0.5,
        sortable: true,
        style: {
            fontStyle: 'italic',
            backgroundColor:'#216869',
            color:'white'
    }
    },
    {
        name: 'User ID',
        selector: row => row.user.id,
        sortable: true,
        
    },
    {
        name: 'Nature',
        selector: row => row.nature.code,
        sortable:true,
        style: {
            fontWeight: 'bold'
    }
    },
    {
        name: 'Amount' ,
        selector: row => row.amount,
        sortable:true,
        style: {
            color: 'DarkSlateGray',
            fontWeight: '700',
            fontSize: '16px'
    }

    },
    {
        name: 'Asset',
        selector: row => row.asset,
        sortable:true,
        grow:0.8,
        style: {
            fontWeight: 'bold'
    }
    },

    {
        name: 'Date',
        selector: row => row.createdOn,
        sortable: true,
        grow:2
    },

];


const conditionalRowStyles = [
    {
    when: (row) => row.nature.code === 'DEPOSIT',
    style: {
        backgroundColor: 'rgb(241 245 249)'
    }
    },
    {
        when: (row) => row.nature.code === 'REWARDS',
        style: {
        backgroundColor: 'rgb(226 232 240)'
    }
    },
    {
        when: (row) => row.nature.code === 'INTEREST',
        style: {
        backgroundColor: 'rgb(203 213 225)'
    }
    },
];

const customStyles = {
    headCells: {
        style: {
            color: 'white', 
            fontSize: '1.3em',
        backgroundColor:'#49A078'
        },
    },
};

function Table({transactions}) {
    return (
    <DataTable 
        columns={columns} 
        data={transactions} 
        dense
        pagination 
        paginationRowsPerPageOptions={[5,10,20]}
        paginationPerPage={10}
        customStyles={customStyles}
        conditionalRowStyles={conditionalRowStyles}
    />
    ); 
}

export default Table;