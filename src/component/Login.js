import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
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
      console.log("logindata",data)
    }else{
      console.log("RegisterData",data)
    }
    reset({ userId: "", Password: "", userName: "" });
  };

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
