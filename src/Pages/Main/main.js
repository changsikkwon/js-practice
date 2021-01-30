import React from 'react';
import styled, { keyframes } from 'styled-components';
import Nav from '../../Components/Nav/nav';
import Post from './posting';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Main = () => {
    return (
        <Wrapper>
            <Nav />
            <Post />
        </Wrapper>
    );
};

export default Main;
