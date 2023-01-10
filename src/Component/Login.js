import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, userRegister} from "../Redux/siteReducer";
import { toast } from 'react-toastify';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loginData, isLoading ,registerData} = useSelector((state)=>state);
  console.log(123,registerData)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data , e) => {
    console.log(123456, e.target.innerText);
    if(e.target.innerText === 'लॉगिन करें'){
      dispatch(loginUser(data));
    }else{
      dispatch(userRegister(data))
    }
    reset({ userId: "", Password: "", userName: "" });
  };

  useEffect(()=>{
    if(loginData?.status === 200){
      localStorage.setItem("token",loginData?.token)
      toast.success(`${loginData?.message}`,{
        toastId: "loginsuccess"
      })
      // navigate("/dashboard")
      window.location.href = "/dashboard";
    }else if(loginData.status === 404){
      toast.error(`${loginData?.message}`,{
        toastId: "loginerror"
      })
    }
  },[loginData])

  useEffect(()=>{
    if(registerData?.status === 200){
      toast.success(`${registerData?.message}`,{
        toastId: "loginsuccess"
      })
      setIsLogin(true)
    }else if(registerData.status === 404){
      toast.error(`${registerData?.message}`,{
        toastId: "loginerror"
      })
    }
  },[registerData])
  return (
    <>
      <Container>
        <div style={{ marginTop: "100px" }}>
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              {isLogin ? (
                <>
                  <Row>
                    <Form.Group className="mb-3">
                      <input
                        type="text"
                        placeholder="उपयोगकर्ता की आईडी"
                        {...register("userId", {
                          required: true,
                        })}
                        className={
                          errors?.userId?.type === "required"
                            ? "input-field-error"
                            : "input-field"
                        }
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3">
                      <input
                        type="text"
                        placeholder="उपयोगकर्ता का पासवर्ड"
                        {...register("Password", {
                          required: true,
                        })}
                        className={
                          errors?.Password?.type === "required"
                            ? "input-field-error"
                            : "input-field"
                        }
                      />
                    </Form.Group>
                  </Row>
                </>
              ) : (
                <>
                  <Row>
                    <Form.Group className="mb-3">
                      <input
                        type="text"
                        placeholder="उपयोगकर्ता का नाम"
                        {...register("userName", {
                          required: true,
                        })}
                        className={
                          errors?.userName?.type === "required"
                            ? "input-field-error"
                            : "input-field"
                        }
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3">
                      <input
                        type="text"
                        placeholder="उपयोगकर्ता की आईडी"
                        {...register("userId", {
                          required: true,
                        })}
                        className={
                          errors?.userId?.type === "required"
                            ? "input-field-error"
                            : "input-field"
                        }
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className="mb-3">
                      <input
                        type="text"
                        placeholder="उपयोगकर्ता का पासवर्ड"
                        {...register("Password", {
                          required: true,
                        })}
                        className={
                          errors?.Password?.type === "required"
                            ? "input-field-error"
                            : "input-field"
                        }
                      />
                    </Form.Group>
                  </Row>
                </>
              )}
              <Row>
                <Form.Group className="mb-3">
                  <Button type="submit" className="login-btn">
                    {isLogin ? "लॉगिन करें" : "रजिस्टर करें"}
                  </Button>
                </Form.Group>
              </Row>
            </form>
            <p>
              यदि आपके पास खाता नहीं है तो कृपया पहले{" "}
              <span className="ref-link" onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? "पंजीकरण" : "लॉगिन"}
              </span>{" "}
              करें
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
