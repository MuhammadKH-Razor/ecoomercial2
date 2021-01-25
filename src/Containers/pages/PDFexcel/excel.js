import React, { Component } from 'react';
import ReactToExcel from 'react-html-table-to-excel';
 
class Excel extends Component {

  render() {

    return (
      <div>
        <div className="container">
          <table className="table table-bordered table-hovered text-center" id="table-xls">
            <thead>
              <th>Title</th>
              <th>Price</th>
              <th>Content</th>
            </thead>
            <tbody>
            <tr>
                <td>Huda</td>
                <td>3000</td>
                <td>nickame special</td>
            </tr>
            </tbody>
          </table>
        <ReactToExcel 
            className="table-xls"
            table="table-xls"
            filename="excelFile"
            sheet="sheet 1"
            buttonText="export to Excel file"
          />
        </div>
      </div>
    );
  }
}
 
export default Excel;