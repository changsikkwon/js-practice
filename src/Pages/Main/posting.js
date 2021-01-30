import React from 'react';
import styled from 'styled-components';

const PostContainer = styled.div`
    height: 915px;
    width: 614px;
    align-itmes: stretch;
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    position: relative;
    border: 1px solid;
    border-radius: 3px;
    border-color: rgb(219, 219, 219);
`;

const PostTopBox = styled.div`
    height: 60px;
    padding: 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const PostImgBox = styled.div`
    height: 614px;
    background-color: blue;
`;

const PostIconBox = styled.div`
    height: 41px;
    background-color: green;
`;

const PostCommentBox = styled.div`
    height: 203px;
    background-color: yellow;
`;

const TopProfileImgBox = styled.div`
    height: 42px;
    width: 42px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TopProfileNameBox = styled.div`
    width: 496px;
    height: 26px;
    margin-left: 14px;
    display: flex;
    align-items: center;
`;

const TopMenuBox = styled.div`
    width: 40px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TopProfileIsStory = styled.canvas`
    height: 42px;
    width: 42px;
    position: absolute;
`;

const TopProfileImg = styled.img`
    height: 32px;
    width: 32px;
    border-radius: 75px;
`;

const TopProfileName = styled.a`
    font-weight: 600;
`;

const TopMenuBtn = styled.button`
    height: 15px;
    width: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
`;

const TopMenuDot = styled.div`
    width: 1px;
    heigh: 1px;
    border: 1.5px solid;
    border-radius: 50%;
    background-color: black;
`;

const PostImg = styled.img`
    width: 100%;
    height: 100%;
`;

const Post = () => {
    return (
        <PostContainer>
            <PostTopBox>
                <TopProfileImgBox>
                    <TopProfileIsStory />
                    <TopProfileImg
                        alt="itzy"
                        src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-19/s150x150/141896809_115055060493573_8315567442045868976_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_ohc=p6tGGvj7ENgAX8FAJKY&tp=1&oh=0dfda62cb7c2f6e72d3fd97b068fa0f6&oe=603FE14B"
                    />
                </TopProfileImgBox>
                <TopProfileNameBox>
                    <TopProfileName>itzy.all.in.us</TopProfileName>
                </TopProfileNameBox>
                <TopMenuBox>
                    <TopMenuBtn>
                        <TopMenuDot />
                        <TopMenuDot />
                        <TopMenuDot />
                    </TopMenuBtn>
                </TopMenuBox>
            </PostTopBox>
            <PostImgBox>
                <PostImg
                    alt="itzy"
                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/143027834_707275799962950_2466218605470631109_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=ktH51U_CP-IAX-r9iEw&tp=1&oh=bd1728baebf70641b94d6e89327f5c99&oe=603DC34F"
                />
            </PostImgBox>
            <PostIconBox></PostIconBox>
            <PostCommentBox></PostCommentBox>
        </PostContainer>
    );
};

export default Post;
