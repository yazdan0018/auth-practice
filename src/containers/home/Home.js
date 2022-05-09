import React from 'react';
import Layout from '../../components/layout/Layout';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { tokenRemove } from "../../redux/moudule/token";
import { useDispatch } from "react-redux";

const Home = () => {

    const HomeWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
    `;

    const history = useNavigate();
    const dispatch = useDispatch();

    function handleSubmit() {
        dispatch(tokenRemove(''));
    }

    return (
        <Layout>
            <HomeWrapper>
                home page<br/>
                <button className="btn bg-info w-25 m-1" onClick={() => {
                    history({ pathname: '/login' })
                }}>Login
                </button>
                <button className="btn bg-info w-25 m-1" onClick={() => {
                    history({ pathname: '/profile' })
                }}>Profile
                </button>
                <button className='btn bg-danger w-25 m-1' onClick={handleSubmit}>Log out</button>
            </HomeWrapper>
        </Layout>
    )
}

export default Home;