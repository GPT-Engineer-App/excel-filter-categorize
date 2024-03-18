import React, { useState } from "react";
import { Box, Button, Input, Table, Thead, Tbody, Tr, Th, Td, FormControl, FormLabel, VStack, HStack, Text } from "@chakra-ui/react";
import { FaFileExcel, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  const [file, setFile] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [validated, setValidated] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    // Normally, here you would parse the file and process the data
    // For this mock-up, we will assume the data is directly available
    // as an array of objects
  };

  const processData = () => {
    // This function would process the raw data and set the tableData state
    // Since we can't actually parse the Excel file, we'll mock this function
    const mockData = [
      { kunde: "Customer A", gesamtsumme: 1500, anzahlDerModule: 3, durchschnittlicheKostenDc: 500 },
      // ... more data
    ];
    setTableData(mockData);
  };

  const validateData = () => {
    // This function would validate the processed data and update the validated state
    setValidated(true);
  };

  return (
    <Box p={5}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel htmlFor="file">Excel File</FormLabel>
          <Input type="file" id="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        </FormControl>

        <Button leftIcon={<FaFileExcel />} colorScheme="blue" onClick={processData} isDisabled={!file}>
          Process Data
        </Button>

        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Kunde</Th>
              <Th>Gesamtsumme</Th>
              <Th>Anzahl der Module</Th>
              <Th>Durchschnittliche Kosten DC</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((row, index) => (
              <Tr key={index}>
                <Td>{row.kunde}</Td>
                <Td>{row.gesamtsumme}</Td>
                <Td>{row.anzahlDerModule}</Td>
                <Td>{row.durchschnittlicheKostenDc}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        {tableData.length > 0 && (
          <HStack spacing={4}>
            <Button leftIcon={<FaCheckCircle />} colorScheme="green" onClick={validateData}>
              Validate Data
            </Button>
            <Text color={validated ? "green.500" : "gray.500"}>{validated ? "Data Validated" : "Click to Validate Data"}</Text>
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

export default Index;
