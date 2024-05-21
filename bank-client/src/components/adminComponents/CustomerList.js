import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Box, Typography } from '@mui/material';

const CustomerList = ({ customer }) => {
  const [open, setOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [accountDetails, setAccountDetails] = useState(null);

  const handleOpen = (customer) => {
    setSelectedCustomer(customer);
    setOpen(true);
    // Simulate fetching account details for the selected customer
    fetchAccountDetails(customer.CustomerID);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCustomer(null);
    setAccountDetails(null);
  };

  const fetchAccountDetails = (customerId) => {
    // Simulated API call to fetch account details
    // Replace this with your actual API call
    const fetchedAccountDetails = [{
      "account_no": "120000",
      "branch_code": "130000",
      "balance": "0.00",
      "account_type": "savings"
    }, {
      "account_no": "120001",
      "branch_code": "130000",
      "balance": "100000.00",
      "account_type": "Loan"
    }]

    if (customerId === "110008")
      setAccountDetails(fetchedAccountDetails[0]);
    else
      setAccountDetails(fetchedAccountDetails[1]);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>CustomerID</TableCell>
              <TableCell>CustomerName</TableCell>
              <TableCell>MobileNo</TableCell>
              <TableCell>EmailID</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>AadharNo</TableCell>
              <TableCell>PanNo</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer.map((customer, index) => (
              <TableRow key={index}>
                <TableCell>{customer.CustomerID}</TableCell>
                <TableCell>{customer.CustomerName}</TableCell>
                <TableCell>{customer.MobileNo}</TableCell>
                <TableCell>{customer.EmailID}</TableCell>
                <TableCell>{customer.Address}</TableCell>
                <TableCell>{customer.AadharNo}</TableCell>
                <TableCell>{customer.PanNo}</TableCell>
                <TableCell>
                  <Button variant="contained" onClick={() => handleOpen(customer)}>
                    View Account Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedCustomer && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="account-details-modal"
          aria-describedby="account-details-modal-description"
        >
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <Typography id="account-details-modal" variant="h6" component="h2">
              Account Details
            </Typography>
            {accountDetails && (
              <Typography id="account-details-modal-description" sx={{ mt: 2 }}>
                Account Number: {accountDetails.account_no}
                <br />
                Branch Code: {accountDetails.branch_code}
                <br />
                Balance: {accountDetails.balance}
                <br />
                Account Type: {accountDetails.account_type}
              </Typography>
            )}
          </Box>
        </Modal>
      )}
    </>
  );
};

export default CustomerList;
