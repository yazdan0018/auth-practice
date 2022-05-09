import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { login as loginAction } from '../../redux/moudule/login';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = () => {
        const dispatch = useDispatch();
        const login = useSelector(state => state.login);
        const [email, setEmail] = useState('');
        const [password, setPassWord] = useState('');

        const [displayLoading, setDisplayLoading] = useState(false);
        const [loginstatus, setLoginStatus] = useState(false);

        const token = useSelector(state => state.token.token);
        console.log('token : ', token);
        useEffect(() => {
            if (token) {
                return history({ pathname: '/profile' })
            }
        }, [token]);

        let history = useNavigate();

        function handleSubmit(e) {
            e.preventDefault();
            dispatch(loginAction({ password: password, email: email }))

            // else {
            //     setDisplayLoading(false)
            // }
        }


        return (
            <Layout>
                <LoginWrapper>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address(it is for test enter
                                'eve.holt@reqres.in')</label>
                            <input type="email" className="form-control m-1" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password (it is for test enter 'cityslicka')</label>
                            <input type="password" className="form-control m-1" id="exampleInputPassword1"
                                   placeholder="Password"
                                   onChange={e => setPassWord(e.target.value)}/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input m-1" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary m-1 te" onClick={() => {
                            setDisplayLoading(true)
                            setLoginStatus(false)
                            setTimeout(() => {
                                if (!token) {
                                    setDisplayLoading(false)

                                }
                            }, 1000)
                            setTimeout(() => {
                                if(!displayLoading){
                                    setLoginStatus(true)
                                }
                            }, 2000)

                        }}>Submit
                        </button>
                    </form>
                    <button className='btn btn-info w-25 mt-3' onClick={() => history({ pathname: '/' })}>Home</button>
                    {displayLoading ?
                        <div className="spinner-border mt-3" role="status">

                        </div>
                        : ''}
                    {loginstatus ? <div>Login unsuccessful !</div> : ''}
                </LoginWrapper>
            </Layout>
        );
    }
;

export default Login;