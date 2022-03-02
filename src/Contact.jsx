import React  ,{ useState }  from "react";

const Contact = () => {
    const [data,setData]=useState({
        fullname:"",
         mobile:"",
         email:"",
         msg:""
       });

       const InputEvent =(event) =>{
           const {name,value} =event.target;

           setData((preVal)=>{
               return{
                   ...preVal,
                   [name]:value,
               };
           });
        };
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`${data.fullname}`)
    }
    


    
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us</h1>
            </div>
            <div className="container contact_div"></div>
            <div className="row">
                <div className="col-md-6  col-10 max-auto">
                   
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormInputName">Full name</label>
                                <input type="text" class="form-control" id="exampleFormInput" aria-describedby="emailHelp" 
                                name="full name"
                                value={data.Fullname}
                                onChange={InputEvent}  placeholder="Enter your name" />
                                <small  class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormInputMobile">Mobile/Phone Number</label>
                                <input type="int" class="form-control" id="exampleFormInput" aria-describedby="emailHelp"
                                name="mobile number"
                                value={data.mobilenumber} 
                                onChange={InputEvent}
                                placeholder="Enter Mobile number" />
                                <small  class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormInputEmail1">Email Address </label>
                                <input type="email" class="form-control" id="exampleFormInputEmail1" aria-describedby="emailHelp" 
                                name="email address"
                                value={data.emailaddress} 
                                onChange={InputEvent}
                                placeholder="Enter email address" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormInputPassword1">Message</label>
                                <input type="password" class="form-control" id="exampleFormInputPassword1"
                                name="Message"
                                value={data.msg} 
                                onChange={InputEvent}  />
                            </div>

                            {/* <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" class="btn btn-outline-primary">Submit</button>
                        </form>

                    {/* </form> */}
                </div>
            </div>
        </>
       
    );
}
 
export default Contact;