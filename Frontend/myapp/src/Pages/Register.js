

import { Link } from 'react-router-dom';
import './Register.css';

import { useState } from 'react';




export default function Register(){
  const [form, setForm] = useState({
    username: '',
    mobno: '',
    password: '',
    repassword:'' //again for confirmation
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form.username === '') {
      alert('Please enter your name!');
      return;
    }

    if (form.mobno === '') {
      alert('Please enter your mobile number!');
      return;
    }

    if (form.password === '') {
      alert('Please enter a password!');
      return;
    }

    if (form.repassword === '') {
      alert('Please confirm your password!');
      return;
    }

    if (form.password !== form.repassword) {
      alert('Passwords do not match!');
      return;
    }

    // Submit the form

    alert(`${form.username} + sent to the backend`)
let response = await fetch('http://localhost:5500/auth/register', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    if(!response.ok){
      alert("error in signup. Please try again later");
      return;
    }
    else{alert("Signup Successful")}

    // ...
  };


    return(

    <section class="vh-100" >
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black">
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
      
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
      
                      <form class="mx-1 mx-md-4">
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init class="form-outline flex-fill mb-0">
                            <input type="text" name="username" id="form3Example1c" placeholder='username' class="form-control" onChange={handleChange} />
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init class="form-outline flex-fill mb-0">
                            <input type="text" name="mobno"id="form3Example3c" class="form-control" placeholder='mobileno' onChange={handleChange} />
                          </div>
                        </div>



      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init class="form-outline flex-fill mb-0">
                            <input type="password" name="password" id="form3Example4c" class="form-control" placeholder='Password' onChange={handleChange} />
                          </div>
                        </div>
      
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init class="form-outline flex-fill mb-0">
                            <input type="password" name="repassword" id="form3Example4cd" class="form-control" placeholder='repeat your password' onChange={handleChange}/>
                          </div>
                        </div>
      
                        <div class="form-check d-flex justify-content-center mb-5">
                          <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" onChange={handleChange} />
                          <label class="form-check-label" for="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>
      
                        
                        <div class="d-flex justify-content-around  mx-4 mb-3 mb-lg-4">
                        <button onClick={handleSubmit} type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">Register</button>

  
                        <Link to="/login"><button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">Login</button></Link>
                        </div>
      
                      </form>
      
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
      
                      <img src="/_1328a192-78a1-49aa-bd5f-a319cab98766.jpeg"
                        class="img-fluid" alt="Sample image"/>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}