import React from 'react'
import images from "./employee.jpg"
import  './EmployeeCard.css';

  const ViewEmployeeCard = (employee, onDelete) => {
  const {image, fullName, age, department} = employee;
   const EmployeeData = [
             
        {
          image: images,
          fullName: "John Doe",
          age: 30,
          department: "Engineer",
        },
        {
          image: images,
          fullName: "Jane Smith",
          age: 25,
          department: "Product",
        },
        {
          image: images,
          fullName: "Andrew Amos",
          age: 20,
          department: "Security",
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
        },
        {
          image: images,
          fullName: "Elvis Comorule",
          age: 22,
          department: "Human Resource",
        },
        {
          image: images,
          fullName: "Bernard Abiodun",
          age: 22,
          department: "IT",
        },

   ];

  return (
    <>
       
       <h1 className='h2 text' >View Employee</h1>
       <div className='container'>
    {EmployeeData.map((employee)=>{
      return(
      <div className='card '>
       <img src={employee.image} alt='' className='employeeimage' />
        <div className="employee-details">
          <h2>{employee.fullName}</h2>
           <p>Age:{employee.age}</p>
           <p>Department: {employee.department}</p>
        </div>
        <button className='btn btn-primary' onClick={() => onDelete(employee)}>Delete</button>
      </div>
  );
    })};
    </div>
   </>
  );
};

export default ViewEmployeeCard
