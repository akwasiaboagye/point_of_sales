import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolKitProvider, { Search, CSVExport} from 'react-bootstrap-table2-toolkit';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Table = (props) => {

    

    const tableData = (props.data === undefined) ? [] : props.data;
    const { ExportCSVButton } = CSVExport;
    const { SearchBar } = Search;
    const MySearch = (props) => {
        let input;
        const handleClick = () => { props.onSearch(input.value); };
        return (
            <input 
              className='form-control form-control-sm float-right'
              style={ { maxWidth: '250px' } } placeholder='Search'
              ref={ n => input = n } type="search" onChange={handleClick} />
        );
    };

    const paginationOption = {
        
        totalSize: tableData.length,
        sizePerPageList: [ {text: '20', value:20  }, {text:'40', value:40}, {text: 'All', value: tableData.length} ],
        
    };

    const selectRow = props.select;

    return(<div>
        <ToolKitProvider bootstrap5 keyField={props.keys} data={ tableData } columns={props.columns} exportCSV search >
            {props => (
                <div>
                    <div className='row'>
                        <div className='col'><ExportCSVButton { ...props.csvProps }><button className='btn btn-sm btn-outline-default'><FontAwesomeIcon icon={faFileCsv} style={{color:"red",fontSize:"30px"}} /></button></ExportCSVButton> </div>
                        <div className='col text-right mt-2 mr-2'><MySearch { ...props.searchProps} /></div>
                    </div>
                    <hr style={{margin:"0"}} />
                    <BootstrapTable wrapperClasses='table-responsive' striped hover condensed printable selectRow={selectRow} {...props.baseProps} pagination={paginationFactory(paginationOption)} />
                </div>
            )}
        </ToolKitProvider>
    </div>);
};

const SolomonLib = () => {

};

SolomonLib.Table = Table;


export default SolomonLib;
export {
    SolomonLib, Table
}