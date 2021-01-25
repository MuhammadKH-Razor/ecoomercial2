import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Button, Progress } from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';

const Example = (props) => {

  const user = [
    { nama: 'muhammad', id: 1, alamat: 'jl. cideng jaya' },
    { nama: 'khoirul', id: 2, alamat: 'jl. cideng raya' },
    { nama: 'huda', id: 3, alamat: 'jl. ampera' },
    { nama: 'huda', id: 4, alamat: 'jl. ampera' },
    { nama: 'huda', id: 5, alamat: 'jl. ampera' },
    { nama: 'huda', id: 6, alamat: 'jl. ampera' },
    { nama: 'huda', id: 7, alamat: 'jl. ampera' },
    { nama: 'huda', id: 8, alamat: 'jl. ampera' },
    { nama: 'huda', id: 9, alamat: 'jl. ampera' },
    { nama: 'huda', id: 10, alamat: 'jl. ampera' },
    { nama: 'huda', id: 11, alamat: 'jl. ampera' },
    { nama: 'huda', id: 12, alamat: 'jl. ampera' },
    { nama: 'huda', id: 13, alamat: 'jl. ampera' },
    { nama: 'huda', id: 14, alamat: 'jl. ampera' },
    { nama: 'huda', id: 15, alamat: 'jl. ampera' },
  ]

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const columns = [{
    dataField: 'id',
    text: 'ID',
    headerStyle: () => {
      return { width: "5%" }
    },
    sort: true
  }, {
    dataField: 'nama',
    text: 'Nama',
    sort: true
  }, {
    dataField: 'alamat',
    text: 'Alamat',
    sort: true
  }, {
    dataField: 'link',
    text: 'Opsi',
    formatter: (rowContent, row) => {
      return (
        <div>
          <Button color="info">
            <FontAwesomeIcon icon={faInfo} /> Info
          </Button>
          <Button color="warning">
            <FontAwesomeIcon icon={faEdit} /> Update
          </Button>
          <Button color="danger">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>

        </div>
      )
    }
  }
  ];


  const defaultSorted = () => [{
    dataField: "nama",
    order: "asc"
  }]

  const option = {
    sizePerPageList: [
      { text: '5', value: 5 }, 
      { text: '10', value: 10 },
      { text: '20', value: 20 },
      { text: 'All', value: user.length }
    ] 
  }

  const { SearchBar } = Search;

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div>
        <Container>
          <ToolkitProvider
            bootstrap4 keyField='id' data={user} columns={columns} defaultSorted={defaultSorted} search
          >
            {
              (props) => (
                <div>
                  <div className="float-right">
                  <SearchBar {...props.searchProps} />
                  </div>
                  <hr />
                  <BootstrapTable {...props.baseProps} pagination={ paginationFactory(option) } />
                </div>
              )
            }
          </ToolkitProvider>

        </Container>
      </div>

      <Progress value={44} color="success" bar> 45% </Progress>
      <div style={{ marginTop: 10 }}>
        <Progress multi>
          <Progress animated color="danger" bar value={50}> 50% </Progress>
          <Progress animated color="info" bar value={50}> 50% </Progress>
        </Progress>
      </div>

    </div>
  );
}

export default Example;