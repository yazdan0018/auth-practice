import React, { useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/moudule/user";
import { tokenRemove } from "../../redux/moudule/token";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center
`;

const Profile = () => {

    const dispatch = useDispatch();
    const history = useNavigate();

    function handleSubmit() {
        dispatch(tokenRemove(false));
    }

    return (
        <Layout>
            <ProfileWrapper>
                Profile
                <button className='w-25 m-1' onClick={() => history({ pathname: '/' })}>Home</button>
                <button className='bg-danger w-25 m-1' onClick={handleSubmit}>
                    Log out
                </button>
            </ProfileWrapper>
        </Layout>
    );
};

export default Profile;