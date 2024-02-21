// import React, { useState , useEffect } from 'react';
// import styled from 'styled-components';
// import { BrowserRouter as Router, Switch, Route, Link, Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState(localStorage.getItem('email') || '');
//   const [password, setPassword] = useState(localStorage.getItem('password') || '');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleRememberMeChange = (event) => {
//     setRememberMe(event.target.checked);
//     if (event.target.checked) {
//       localStorage.setItem('email', email);
//       localStorage.setItem('password', password);
//     } else {
//       localStorage.removeItem('email');
//       localStorage.removeItem('password');
//     }
//   };
//   const navigate = useNavigate();
//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     const response = await fetch('https://609f7428c512c20017dcd388.mockapi.io/quanliailap/login');
    
//     if (response.ok) {
//       const data = await response.json();
//       const user = data.find((item) => item.email === email && item.password === password);
//       if (user) {
//         // Redirect to home page or user dashboard
//         alert('đăng nhập thành công')
//         event.target.reset(); // Reset the form fields
        
//         navigate('/admin' , { state: { email: user.email } });
//       } else {
//         setErrorMessage('Invalid email or password. Please try again.');
        
//       }
//     } else {
//       setErrorMessage('Login failed. Please try again.');
//       console.log(await response.text()); // Log the error to the console for debugging
      
//     }
//   };
//   useEffect(() => {
//     if (localStorage.getItem('email') && localStorage.getItem('password')) {
//       setEmail(localStorage.getItem('email'));
//       setPassword(localStorage.getItem('password'));
//       setRememberMe(true);
//     }
//   }, []);
//   return (
//     <Log>

// <div className='login'> 


   
//     <form   onSubmit={handleSubmit}>

//        <div>
//             <h1 style={{marginBottom:'50px', color:' #f05123', fontWeight:'bold', fontSize:'50px'}}> Đăng nhập </h1>
//           </div>
//       <div className='formLogin'>
         
              
      
//       <div className='inputFormLogin'>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={handleEmailChange}
//           required
//         />
//       </div>
//       <div className='inputFormLogin'>
//         <label htmlFor="password">Mật khẩu:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={handlePasswordChange}
//           required
//         />
//       </div>
//       <div className='checkboxInput' >
//         <label htmlFor="rememberMe">Nhớ mật khẩu:</label>
        
//         <input 
     
//           type="checkbox"
//           id="rememberMe"
//           checked={rememberMe}
//           onChange={handleRememberMeChange}
//         />
//       </div>
      
//       </div>
//       {errorMessage && (
//         <div style={{ color: 'red' }}>{errorMessage}</div>
//       )}
//       <button className='ButtonLogin' type="submit">Đăng nhập</button>
      
//     </form>
// </div>
// </Log>
//   );
// };

// export default Login;

// const Log = styled.div`
//     width: 100vw;   
//     z-index:999999999;
//     background-color: #fff;
//     position: fixed;
//     .inputFormLogin input{
//             height: 2.5rem;
//             padding: 12px;
//             font-size: 16px;
//             width: 76%;
//             border-radius: 2px;
//             border: 1px solid rgba(0,0,0,.14);
//             padding-left: 10px;
//             cursor: text;
//             margin-bottom: 20px;      
            
            
//     }
//     label{
//       margin-right: 30px;
//       font-size: 26px;
//     }

//     form{
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       flex-direction: column;
//     }
//     .inputFormLogin{
//       display: flex;
//       justify-content: space-between;
//     }
//     .login{
//         padding: 24px 36px;
        
//         z-index: 9;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         flex-direction: column;
//         position: fixed;
//         top: 50%;
//         left: 50%;
//         transform: translate(-50%, -50%);
//         background-color: #fff;
//         border-radius: 10px;
//         border: 2px solid #ccc;  
//     }
//     .formLogin{
//       width: 40vw;
     
//     }

//     .checkboxInput{
//       display: flex;
//       flex-direction: row-reverse;
//       justify-content: center;
//       margin-left: -6rem;

//       label{
//       margin-left: 0.5rem;
//       font-size: 18px; 
//       }
//     }
        
//     .ButtonLogin{
//           font-size: 20px;
//           font-weight: bold;
//           padding: 10px 50px;
//           background-color: #f05123;
//           color: #fff;
//           border-radius: 10px;
//           cursor: pointer;
//           text-align: center;         
//           margin-top: 20px;
//           &:hover{
//           background-color: #f06123;
//           text-align: center;
//           }
//     }
// `
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login() {
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            The best offer <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>for your business</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;