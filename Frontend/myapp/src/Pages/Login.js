import { useState } from "react";

export default function LoginForm(){
    const[form,setForm] = useState({mobno:"",password:""});

    function handleChange(e){
        let {name,value} = e.target;
        setForm(
            {...form,[name]:value}
        )
    }
    function handleSubmit(event){
        event.preventDefault();
        alert(form.mobno+form.password);

    }

    return(
        
        <section class="bg-light py-3 py-md-5">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                <div class="card border border-light-subtle rounded-3 shadow-sm">
                  <div class="card-body p-3 p-md-4 p-xl-5">
                    <div class="text-center mb-3">
                      <a href="#!">
                        <img src="./assets/img/bsb-logo.svg" alt="BootstrapBrain Logo" width="175" height="57"/>
                      </a>
                    </div>
                    <h2 class="fs-6 fw-normal text-center text-secondary mb-4">Sign in to your account</h2>
                    <form action="#!">
                      <div class="row gy-2 overflow-hidden">
                        <div class="col-12">
                          <div class="form-floating mb-3">
                            <input type="text" class="form-control" onChange={handleChange} name="mobno" id="mobno" placeholder="name@example.com" required/>
                            <label for="mobno" class="form-label">Mobile No</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-floating mb-3">
                            <input type="password" class="form-control" onChange={handleChange} name="password" id="password" placeholder="Password" required/>
                            <label for="password" class="form-label">Password</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="d-flex gap-2 justify-content-between">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" name="rememberMe" id="rememberMe"/>
                              <label class="form-check-label text-secondary" for="rememberMe">
                                Keep me logged in
                              </label>
                            </div>
                            <a href="#!" class="link-primary text-decoration-none">Forgot password?</a>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="d-grid my-3">
                            <button class="btn btn-primary btn-lg" onClick={handleSubmit}type="submit">Log in</button>
                          </div>
                        </div>
                        <div class="col-12">
                          <p class="m-0 text-secondary text-center">Don't have an account? <a href="#!" class="link-primary text-decoration-none">Sign up</a></p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}