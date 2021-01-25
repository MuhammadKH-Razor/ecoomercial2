import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import {Button} from 'reactstrap';
import { database } from '../../config/firebase/fire';
import ReactToExcel from 'react-html-table-to-excel';
 
class ComponentToPrint extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        const { data } = this.state;

        const getData = database.ref('/adds0FyTmIG1R7b5U7nJO2x0y6setEl2');
        return new Promise((resolve, reject) => {
            getData.on('value', snapshot => {
                Object.keys(snapshot.val()).map(key => {
                    data.push({
                        id: key,
                        data: snapshot.val()[key]
                    })
                })
            }, (err) => {
                if(err) {
                    reject(console.log('failed get data'))
                } else {
                    resolve(console.log('sukses get data'))
                }
            })
        })
    }

  render() {
    const { data } = this.state;

    return (
      <div>
        <div className="container">
          <table className="table table-bordered table-hovered text-center">
            <thead>
              <th>Title</th>
              <th>Price</th>
              <th>Content</th>
            </thead>
            {
                data.length ? (
                    data.map(dt => {
                        return (
                          <tbody>
                          <tr>
                              <td>{dt.data.title}</td>
                              <td>{dt.data.price}</td>
                              <td>{dt.data.content}</td>
                          </tr>
                          </tbody>
                        )
                    })
                ) : null
            }
          </table>
        {/* <ReactToExcel 
            className="excel"
            table="table-to-xls"
            filename="excelFile"
            sheet="sheet 1"
            buttonText="export to Excel file"
          /> */}
        </div>
      </div>
    );
  }
}
 
const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
 
  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <Button onClick={handlePrint}>Print this out!</Button>
    </div>
  );
};

export default Example;