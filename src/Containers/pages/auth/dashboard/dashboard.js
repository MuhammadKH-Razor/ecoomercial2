import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { Button } from '../../../components/atoms/button';
import { addDataFirebase, getDataFirebase, updateDataFirebase, deleteDataFirebase } from '../../../config/redux/actions';
import swal  from 'sweetalert';
import { Spinner } from 'reactstrap';

class Dashboard extends Component {
    
    state = {
        title: '',
        content: '',
        date: '',
        textButton: 'SIMPAN',
        noteId: '',
        price: 0,
        isCheckData: true
    }

    componentDidMount = () => {
        setTimeout(() => {
            const { getData } = this.props;
            const userData = JSON.parse(localStorage.getItem('data'));
            this.setState({
                isCheckData: false
            })
            const data = getData(userData.uid);
        }, 2000)
    }

    onChangeState = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    add = () => {
        const { title, content, noteId, textButton, price } = this.state;
        const { addData, updateData } = this.props;
        const Data = JSON.parse(localStorage.getItem('data'));

        const userData = {
            title: title,
            content: content,
            price: price,
            date: new Date().getTime(),
            userId: Data.uid
        }

        this.setState({
            title: '',
            content: '',
            data: '',
            price: ''
        })

        if(textButton === 'SIMPAN') {
            addData(userData)
            swal({
                title: 'Create',
                text: `title: ${userData.title} - price: ${userData.price}`,
                icon: 'success',
                button: true,
                dangerMode: false
            })
        }else{
            // userData.noteId = noteId;
            this.setState({
                title: title,
                content: content,
                date: new Date().getTime(),
                userId: Data.uid,
                noteId: noteId,
                price: price
            })

            const userData = {
                title: title,
                content: content,
                date: new Date().getTime(),
                userId: Data.uid,
                noteId: noteId,
                price: price
            }

            updateData(userData)
            swal({
                title: 'Update',
                text: 'Data sukses diperbarui dengan baik',
                icon: 'success',
                button: true,
                dangerMode: false
            })
            this.setState({
                title: '',
                price: '',
                content: ''
            })
        }

            console.log(userData);
    }

    update = (note) => {
        const { title, content, textButton, noteId, price } = this.state;
        this.setState({
            title: note.data.title,
            content: note.data.content,
            textButton: 'UPDATE',
            price: note.data.price,
            noteId: note.id,
        })
        console.log('note huda: ', note);

    }
    
    cancel = () => {
        const { title, content, date, textButton, price } = this.state;
        
        this.setState({
            title: '',
            content: '',
            textButton: 'SIMPAN',
            price: ''
        })
    }
    
    deleteNow = async (note) => {
        swal({
            title: "hapus data?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                deleteData(userDataDelete);
                swal({
                    icon: "success",
                    text: "data anda telah dihapus dengan baik",
                    button: true,
                    dangerMode: false
                })
            } else {
                swal({
                    icon: "success",
                    text: "data anda tersimpan dengan baik",
                    button: true,
                    dangerMode: false
                })
            }
        });

        
        const { deleteData } = this.props;
        
        const data = JSON.parse(localStorage.getItem('data'));
        
        const userDataDelete = {
            userId: data.uid,
            noteId: note.id
        }
        

    }

    render() {
        const { title, content, date, textButton, price, isCheckData } = this.state;
        const { add, onChangeState, update, getFirebase, cancel, deleteNow } = this;
        const { notes } = this.props;
        console.log('NOTES :', notes);
        return (
            <div>
                <h1 className="text-center text-black"> Selamat datang di halaman Dashboard </h1>
                <div className="container">
                    <input type="text" name="title" value={title} onChange={onChangeState} placeholder="title" />
                    <input type="number" name="price" value={price} onChange={onChangeState} placeholder="price" />
                    <textarea name="content" onChange={onChangeState} value={content}  placeholder="content"/>
                </div>
                <br />
                {
                   textButton === 'UPDATE' ? (
                      <Button onClick={cancel} title="cancel" id="data" />
                    ) : <div/>
                }
                <Button onClick={add} title={textButton} id="data" />
                <Button onClick={getFirebase} title="view data" id="data" />
                <Fragment>
                    {
                        isCheckData === true ? (
                             <Spinner size="md" />
                        ) :
                                    <table className="table" style={{marginTop: 10}}>
                                    <thead>
                                        <tr>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        </tr>
                                    </thead>
                                {
                                notes.map(note => {
                                return (
                                    <div className="wrap" key={note.id}>
                                    <tbody>
                                        <tr>
                                        <th>{note.id}</th>
                                        <td>{note.data.title}</td>
                                        <td>{note.data.content}</td>
                                        <td>{note.data.price}</td>
                                        <td>
                                        <button className="btn btn-primary" onClick={() => update(note)}>update</button>
                                        <button className="btn btn-danger" onClick={() => deleteNow(note)}> delete </button>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </div>
                                );
                            })
                         }
                        </table>
                    }
                    </Fragment>
            </div>
        );
    }
}

const getStateRedux = (state) => {
    return {
        userID: state.user,
        notes: state.notes
    }
}

const getActionRedux = (dispatch) => {
    return {
        getData: (data) =>  dispatch(getDataFirebase(data)),
        addData: (data) => dispatch(addDataFirebase(data)),
        updateData: (data) => dispatch(updateDataFirebase(data)),
        deleteData: (data) => dispatch(deleteDataFirebase(data))
    }
}

export default connect(getStateRedux, getActionRedux)(Dashboard);