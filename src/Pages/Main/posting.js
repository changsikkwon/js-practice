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
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
`;

const PostCommentBox = styled.div`
    height: 203px;
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

const LeftIconBox = styled.div`
    display: flex;
    align-items: center;
`;

const LikeIconBox = styled.span`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
`;

const LikeIcon = styled.svg`
    width: 24px;
    height: 24px;
`;

const CommentIconBox = styled.span`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CommentIcon = styled.svg`
    width: 24px;
    height: 24px;
`;

const ShareIconBox = styled.span`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ShareIcon = styled.svg`
    width: 24px;
    height: 24px;
`;

const RightIconBox = styled.div`
    margin-right: 8px;
`;

const BookMarkIconBox = styled.span`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BookMarkIcon = styled.svg`
    width: 24px;
    height: 24px;
`;

const LikePeopleBox = styled.div`
    margin-left: 16px;
    margin-bottom: 9px;
`;

const PostAccount = styled.a`
    font-weight: 600;
`;

const LikePeopleList = styled.button`
    font-weight: 600;
    margin-right: -5px;
`;

const PostTextBox = styled.div`
    margin-left: 16px;
    margin-bottom: 9px;
`;

const CommentBox = styled.div`
    margin-left: 16px;
    margin-bottom: 9px;
`;

const Comment = styled.span`
    margin-left: 5px;
    margin-bottom: 9px;
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
            <PostIconBox>
                <LeftIconBox>
                    <LikeIconBox>
                        <LikeIcon aria-label="좋아요" fill="#262626" viewBox="0 0 48 48">
                            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                        </LikeIcon>
                    </LikeIconBox>
                    <CommentIconBox>
                        <CommentIcon aria-label="댓글 달기" fill="#262626" viewBox="0 0 48 48">
                            <path d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" />
                        </CommentIcon>
                    </CommentIconBox>
                    <ShareIconBox>
                        <ShareIcon aria-label="게시물 공유" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
                        </ShareIcon>
                    </ShareIconBox>
                </LeftIconBox>
                <RightIconBox>
                    <BookMarkIconBox>
                        <BookMarkIcon aria-label="저장" fill="#262626" height="24" viewBox="0 0 48 48" width="24">
                            <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                        </BookMarkIcon>
                    </BookMarkIconBox>
                </RightIconBox>
            </PostIconBox>
            <PostCommentBox>
                <LikePeopleBox>
                    <PostAccount>cs094</PostAccount>
                    <span>님</span>
                    <LikePeopleList>여러 명</LikePeopleList>
                    <span>이 좋아합니다</span>
                </LikePeopleBox>
                <PostTextBox>
                    <PostAccount>itzy.all.in.us</PostAccount>
                    <Comment>Pink balloons🎈🎀</Comment>
                </PostTextBox>
                <CommentBox>
                    <PostAccount>imalonlybat</PostAccount>
                    <Comment>😭😭😭😭😭</Comment>
                </CommentBox>
                <CommentBox>
                    <PostAccount>yejispony</PostAccount>
                    <Comment>MIDZY LOVE YOU✨</Comment>
                </CommentBox>
            </PostCommentBox>
        </PostContainer>
    );
};

export default Post;
