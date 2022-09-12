import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


export default function AddPatient() {
  const [patientId,setPatientId]=useState();
  const[name,setName]=useState();
  const[age,setAge]=useState();
  const[address,setAddress]=useState();

  const {patientid} = useParams();
  const naviagate = useNavigate();

  const patient ={
    patientId : patientId,
    name : name,
    age : age,
    address : address
  }

  let textChanged = (event)=>{
      if(event.target.name ==='patientId'){
        setPatientId(event.target.value);
      }else if(event.target.name === 'name'){
        setName(event.target.value)
      }else if(event.target.name === 'age'){
        setAge(event.target.value)
      }else if(event.target.name === 'address'){
        setAddress(event.target.value)
      }
  }
  let addPatient = (event) =>{
    if(patientid===null){
      event.preventDefault();
      axios.post('http://localhost:8080/patient',patient)
      .then(respose =>{alert(respose.data)})
      .catch(error=>alert(error));
    }else{
      axios.put("http://localhost:8080/patient/"+patientid,patient)
      .then(respose=>alert(respose.data))
      .catch(error=>alert(error))
    }
   
    setPatientId("");
    setName("");
    setAddress("");
    setAge("");
    }
    useEffect(()=>{
      if(patientid!==null){
       
        axios.get("http://localhost:8080/patient/"+patientid)
        .then(response=>{
            setPatientId(response.data.patientId)
            setName(response.data.name)
            setAge(response.data.age)
            setAddress(response.data.address)
           
        })
      }
    },[])
  
  return (
   
    <div>
    <Container>
    <Card className="my-3">
        <Card.Header>Patient Form</Card.Header>
      <Form onSubmit={addPatient}>
      <Form.Group className="my-3" controlId="formBasicEmail">
        <Form.Label>Id</Form.Label>
        <Form.Control name="patientId" value={patientId} type="text" placeholder="Enter Id" onChange={textChanged}/>
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" value={name} type="text" placeholder="Enter Name" onChange={textChanged} />
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicPassword">
        <Form.Label>Age</Form.Label>
        <Form.Control name="age" value={age} type="text" placeholder="Enter Age" onChange={textChanged} />
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control name="address" value={address} type="text" placeholder="Enter Address" onChange={textChanged} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
    </Container>
    </div>
    
  )
}
