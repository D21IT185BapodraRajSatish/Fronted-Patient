import axios from "axios";
import { React, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
export default function ViewPatient() {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    getPatient();
  }, []);

  let getPatient = () => {
    axios
      .get("http://localhost:8080/patient")
      .then((response) => setPatients(response.data))
      .catch((error) => alert(error));
  };

  const deleteRecord = (patientId, event) => {
    event.preventDefault();
    axios
      .delete("http://localhost:8080/patient/ " + patientId)
      .then((response) => {
        if (response.data !== null) {
          alert(response.data);
          setPatients(
            patients.filter((patients) => patients.patientId !== patientId)
          );
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {patients.length === 0 ? (
            <tr>
              <td colSpan={5}>{patients.length} Studnets Available!!!</td>
            </tr>
          ) : (
            patients.map((patient) => (
              <tr key={patient.patientId}>
                <td>{patient.patientId}</td>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.address}</td>
                <td>
                  <Link to = {"/updatePatient/" + patient.patientId}><Button >Edit</Button>{" "}</Link>
                  <Button
                    variant="danger"
                    onClick={deleteRecord.bind(this, patient.patientId)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}
