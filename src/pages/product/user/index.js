import { useContext, useState } from "react";
import styled from "styled-components";
import { GrFormPreviousLink } from "react-icons/gr";
import {useNavigate} from 'react-router-dom';


export default function Register() {

  const navigate  = useNavigate();

  const navigateLogin = () => {
    navigate(`/login`)
  }

  const defaultFormData = {
    fullname: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    repass: "",
  };

  const [formData, setFormData] = useState(defaultFormData);

  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.repass) {
      alert("Password does not match");
    } else {
      fetch("https://609f7428c512c20017dcd388.mockapi.io/quanliailap/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            console.log(response);
            alert("Registration successful");
            setFormData(defaultFormData);
          } else {
            throw new Error("Registration failed");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Registration failed");
        });
    }
  }

  return (
    <RegisterUser>
      <div className="container my-5">
        <div className="prev"><GrFormPreviousLink className="iconPrev" onClick={navigateLogin}/><h4>Đăng ký</h4></div>
        <div className=" my-3">
          <div className="col-lg-4">
            <form onSubmit={handleOnSubmit}>
              <div className="form-group">
                <label htmlFor="fullname">Fullname:</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="form-control"
                  required
                  onChange={handleOnChange}
                  value={formData.fullname}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={handleOnChange}
                  value={formData.email}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  className="form-control"
                  required
                  onChange={handleOnChange}
                  value={formData.phone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea
                  id="address"
                  name="address"
                  className="form-control"
                  placeholder="Enter address"
                  onChange={handleOnChange}
                  value={formData.address}
                  required
                  rows="1"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  required
                  onChange={handleOnChange}
                  value={formData.password}
                />
              </div>
              <div className="form-group">
                <label htmlFor="repass">Confirm Password:</label>
                <input
                  type="password"
                  id="repass"
                  name="repass"
                  className="form-control"
                  required
                  onChange={handleOnChange}
                  value={formData.repass}
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  name="submit"
                  value="Submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </RegisterUser>
  );
}

const RegisterUser = styled.div`

  display: flex;
  justify-content: center;

  .prev{
    display: flex;
    align-items: center;
    padding-bottom: 14px;
    font-size: 30px;
    margin-left: -14px;

    .iconPrev:hover{
      cursor: pointer;
      opacity: 0.6;
    }

    h4{
      margin-left: 33%;
    }
  }

  .container {
    width: 500px;
    padding: 40px;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding-top: 14px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"],
  input[type="password"],
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 14px;
  }

  .btn-primary {
    width: 100%;
    background-color: #4caf50; /* Màu sắc của button */
    color:trắng; /* Màu chữ trên button */
    padding: 12px 20px; /* Kích thước padding của button */
    font-size: 16px; /* Kích thước chữ trên button */
    border: none; /* Loại bỏ đường viền */
    border-radius: 5px; /* Bo góc của button */
    cursor: pointer; /* Hiển thị con trỏ khi di chuột vào button */
  }

  .btn-primary:hover {
    background-color: #45a049; /* Màu sắc của button khi hover */
  }
`;