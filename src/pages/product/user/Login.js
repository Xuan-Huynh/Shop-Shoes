// import React, { useState } from "react";
// import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
// import { GrFormPreviousLink } from "react-icons/gr";


// export default function Login() {
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const [loginError, setLoginError] = useState(false);
//   const navigate = useNavigate();
//   const [loginMessage, setLoginMessage] = useState("");
//   const [showPass, setShowPass] = useState(false);

//   // Hàm xử lý sự kiện khi checkbox thay đổi
//   function handleShowPasswordChange() {
//     setShowPass((prevState) => !prevState);
//   }

//   const navigatePrev = () => {
//     navigate(`/`)
//   }

//   const handleReg = () => {
//     navigate(`/register`)
//   }

//   function handleFormOnChange(e) {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   }

//   async function onValidation(e) {
//     e.preventDefault();
//     if (formData.username === "" || formData.password === "") {
//       setLoginMessage("Empty Username or Password");
//     } else {
//       try {
//         const response = await fetch(
//           "https://609f7428c512c20017dcd388.mockapi.io/quanliailap/login"
//         );

//         if (response.ok) {
//           const data = await response.json();
//           const matchedUser = data.find(
//             (user) =>
//               (user.phone === formData.username ||
//                 user.email === formData.username) &&
//               user.password === formData.password
//           );

//           if (matchedUser) {
//             // Đăng nhập thành công
//             setLoginMessage("Login successful");
//           } else {
//             // Đăng nhập không thành công
//             setLoginError(true);
//             setLoginMessage("Invalid username or password");
//           }
//         } else {
//           console.log("Error:", response.status);
//         }
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }
//   }

//   return (
//     <LoginUser>
//       <div className="container my-5">
//         <div className="row my-5 justify-content-center">
//           <div className="col-lg-4">
//             <form>
//             <div className="prev"><GrFormPreviousLink className="iconPrev" onClick={navigatePrev}/><h4>Đăng nhập</h4></div>
//               <div className="form-group">
//                 <label htmlFor="username">Tên đăng nhập:</label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   className="form-control"
//                   onChange={handleFormOnChange}
//                   value={formData.username}
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password">Mật khẩu:</label>
//                 <input
//                   type={showPass ? "text" : "password"}
//                   id="password"
//                   name="password"
//                   className="form-control"
//                   onChange={handleFormOnChange}
//                   value={formData.password}
//                 />
//               </div>
//               <div className="showPass">
//                 <input type="checkbox"
//                 checked={showPass}
//                 onChange={handleShowPasswordChange}/>
//                 <p>Hiện mật khẩu</p>
//               </div>
//               <button
//                 type="submit"
//                 name="login"
//                 value="Login"
//                 className="btn btn-primary"
//                 onClick={onValidation}
//               >
//                 Đăng nhập
//               </button>
//               {loginError && <p style={{ color: "red" }}>{loginMessage}</p>}
//               {!loginError && loginMessage && (
//                 <p style={{ color: "green" }}>{loginMessage}</p>
//               )}

//               <div className="navigateReg">
//                 <p>Chưa có tài khoản?
//                   <button onClick={handleReg} >Đăng Ký Ngay</button>
//                 </p>
//               </div>
//               </form>
//           </div>
//         </div>
//       </div>
//     </LoginUser>
//   );
// }

// const LoginUser = styled.div`
//   .container {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;
//   }

//   .prev{
//     display: flex;
//     align-items: center;
//     padding-bottom: 14px;
//     font-size: 30px;
//     margin-left: -14px;

//     .iconPrev:hover{
//       cursor: pointer;
//       opacity: 0.6;
//     }

//     h4{
//       margin-left: 15%;
//     }
//   }

//   form {
//     width: 300px;
//     padding: 20px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//     background-color: #fff;

//     .login{
//       display: flex;
//       justify-content: center;
//       font-size: 30px;
//       margin-bottom: 14px;
//     }
//   }

//   .form-group {
//     margin-bottom: 20px;
//   }

//   label {
//     display: block;
//     margin-bottom: 5px;
//   }

//   .form-control {
//     width: 100%;
//     padding: 10px;
//     border: 1px solid #ddd;
//     border-radius: 4px;
//   }

//   .btn-primary {
//     display: block;
//     width: 100%;
//     padding: 10px;
//     background-color: #007bff;
//     border: none;
//     border-radius: 4px;
//     color: #fff;
//     font-weight: bold;
//     cursor: pointer;
//     margin-bottom: 20px;
//   }

//   .showPass{
//     display: flex;
//     margin-bottom: 12px;

//     p{
//       margin-left: 8px;
//     }
//   }

//   .navigateReg{
//     display: flex;
//     justify-content: center;
    
    
//     button{
//     border: none;
//     background: none;
//     margin-left: 6px;
//     padding: 0;
//     font: inherit;
//     color: inherit;
//     text-decoration: underline;
//     cursor: pointer;
//     &:hover{
//       color: red;
//     }
//   }
//   }
// `;
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
import styled from 'styled-components';

function Login() {
  return (
    <Logincss>

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
    </Logincss>
  );
}

export default Login;
const Logincss = styled.div`
.background-radial-gradient {
  background-color: hsl(218, 41%, 15%);
  background-image: radial-gradient(650px circle at 0% 0%,
      hsl(218, 41%, 35%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%),
    radial-gradient(1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%);
}

#radius-shape-1 {
  height: 220px;
  width: 220px;
  top: -60px;
  left: -130px;
  background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

#radius-shape-2 {
  border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
  bottom: -60px;
  right: -110px;
  width: 300px;
  height: 300px;
  background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

.bg-glass {
  background-color: hsla(0, 0%, 100%, 0.9) !important;
  backdrop-filter: saturate(200%) blur(25px);
}
`