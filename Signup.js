import React, { useState } from "react";
import './Signup.css'
export default function SignUp(){
    return(
<>
<div className="container-fluid1">
<div className='box'>
<form className='signUpForm'>
<div className="row">
<div className="col-md-6">
<div class="mb-3">
<label for="firstName" class="form-label">First name</label>
<input type="text" class="form-control input" id="firstName" placeholder="Enter your first name"/>
</div>
</div>
<div className="col-md-6">
<div class="mb-3">
<label for="lastName" class="form-label">Last name</label>
<input type="text" class="form-control input" id="lastName" placeholder="Enter your last name"/>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Email address</label>
<input type="email" class="form-control input" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div class="mb-3">
<label for="mobileNumber" class="form-label">Mobile number</label>
<input type="text" class="form-control input" id="mobileNumber" placeholder="Enter your mobile number"/>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div class="mb-3">
<label for="address" class="form-label">Address</label>
<input type="text" class="form-control input" id="address" placeholder="Street Address"/>
</div>
</div>
</div>
<div className="row">
<div className="col-md-12">
<div class="mb-3">
<input type="text" class="form-control input" placeholder="Street Address Line 2" />
</div>
</div>
</div>
<div className="row">
<div className="col-md-6">
<div class="mb-3">
<input type="text" class="form-control input" placeholder="City"/>
</div>
</div>
<div className="col-md-6">
<div class="mb-3">
<input type="text" class="form-control input" placeholder="Region"/>
</div>
</div>
</div>
<div className="row">
<div className="col-md-6">
<div class="mb-3">
<input type="text" class="form-control input" placeholder="Zip Code"/>
</div>
</div>
<div className="col-md-6">
<div class="mb-3">
<select class="form-select select" aria-label="Default select example">
<option selected>Country</option>
<option value="1">Australia</option>
<option value="2">India</option>
<option value="3">USA</option>
</select>
</div>
</div>
<div className="row">
<div className="col-md-12">
<input type="submit" class="btn btn-outline-danger"/>
</div>
</div>
</div>
</form>
</div>
</div>
</>
    );
}