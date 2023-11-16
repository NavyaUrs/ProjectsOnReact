import * as React from 'react';
import PropTypes from 'prop-types';
import { Box,Paper,Table, TableBody,TableCell,TableContainer,TableHead,TableRow,TableSortLabel,Toolbar,Typography, TextField,
} from '@mui/material';

function createData(id, name, maths, science, social, english) {
  return { id, name, maths, science, social, english };
}

const rows = [
  createData(1, 'jhon', 45, 34, 98, 89),
  createData(2, 'miller', 90, 80, 50, 60),
  createData(3, 'ram', 78, 94, 90, 91),
  createData(4, 'rahul', 40, 32, 87, 65),
  createData(5, 'mohan', 73, 90, 37, 43),
  createData(6, 'raj', 75, 40, 94, 60),
  createData(7, 'aman', 51, 26, 65, 79),
  createData(8, 'barath', 92, 82, 98, 70),
  createData(9, 'chandru', 81, 50, 81, 60),
  createData(10, 'githa', 60, 67, 99, 78),
  createData(11, 'radha', 30, 37, 27, 43),
  createData(12, 'nidhi', 45, 25, 51, 49),
  
];

function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [rowsData, setRowsData] = React.useState(rows);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);

    const sortedRows = [...rowsData].sort((a, b) => {
      if (property === 'name') {
        return isAsc
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
     
      return 0;
    });

    setRowsData(sortedRows);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const filteredRows = rows.filter((row) =>
      row.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRowsData(filteredRows);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Student Details search based on names
          </Typography>
          <TextField
            label="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </Toolbar>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'name'}
                    direction={orderBy === 'name' ? order : 'asc'}
                    onClick={() => handleRequestSort('name')}
                  >
                   StudentName
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === 'maths'}
                    direction={orderBy === 'maths' ? order : 'asc'}
                    onClick={() => handleRequestSort('maths')}
                  >
                    maths
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === 'science'}
                    direction={orderBy === 'science' ? order : 'asc'}
                    onClick={() => handleRequestSort('science')}
                  >
                    science
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === 'social'}
                    direction={orderBy === 'social' ? order : 'asc'}
                    onClick={() => handleRequestSort('social')}
                  >
                    social 
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === 'english'}
                    direction={orderBy === 'english' ? order : 'asc'}
                    onClick={() => handleRequestSort('english')}
                  >
                    english 
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">{row.maths}</TableCell>
                  <TableCell align="right">{row.science}</TableCell>
                  <TableCell align="right">{row.social}</TableCell>
                  <TableCell align="right">{row.english}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

EnhancedTable.propTypes = {
  numSelected: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default EnhancedTable;
