import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
    max-width: 975px;
    height: 54px;
    padding-top: 9px;
    padding-left: 20px;
    padding-right: 20px;
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgb(219, 219, 219);
`;

const NavInnerBox = styled.div`
    display: flex;
    flex-direction: row;
`;

const NavLogoBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 360px;
`;

const NavLogo = styled.div`
    padding-top: 3px;
`;

const NavLogoImg = styled.img``;

const NavSearchBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 215px;
    background-color: rgb(250, 250, 250);
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    box-sizing: border-box;
    border-radius: 4px;
    padding-right: 5px;
    padding-top: 2px;
`;

const NavSearch = styled.div`
    width: 199px;
    display: flex;
    justify-content: center;
    padding-right: 5px;
`;

const SearchLogo = styled.span`
    display: inline-block;
    height: 10px;
    width: 10px;
    margin-right: 6px;
    background-image: url('https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png');
    background-position: -428px -241px;
    background-size: 440px 411px;
    margin-top: 3px;
`;

const SearchText = styled.span`
    color: rgb(142, 142, 142);
    border-color: rgb(142, 142, 142);
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
`;

const NavIconBox = styled.div`
    width: 360px;
    display: flex;
    justify-content: flex-end;
`;

const IconBox = styled.div`
    display: flex;
    padding-left: 24px;
    flex-direction: row;
    justify-content: flex-end;
    width: 222px;
`;

const HomeIconBox = styled.div`
    padding-top: 3px;
`;

const HomeIcon = styled.svg``;

const HomeIconPath = styled.path``;

const MessageIconBox = styled.div`
    padding-top: 3px;
    margin-left: 22px;
`;

const MessageIcon = styled.svg``;

const MessageIconPath = styled.path``;

const CompassIconBox = styled.div`
    padding-top: 3px;
    margin-left: 22px;
`;

const CompassIcon = styled.svg``;

const CompassIconPath = styled.path``;

const LikeIconBox = styled.div`
    padding-top: 3px;
    margin-left: 22px;
`;

const LikeIcon = styled.svg``;

const LikeIconPath = styled.path``;

const ProfileIconBox = styled.div`
    padding-top: 3px;
    margin-left: 22px;
`;

const ProfileIcon = styled.span``;

const ProfileIconImg = styled.img`
    width: 22px;
    height: 22px;
`;

const Nav = () => {
    return (
        <NavContainer>
            <NavInnerBox>
                <NavLogoBox>
                    <NavLogo>
                        <NavLogoImg
                            alt="instagram"
                            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        />
                    </NavLogo>
                </NavLogoBox>
                <NavSearchBox>
                    <NavSearch>
                        <SearchLogo></SearchLogo>
                        <SearchText>검색</SearchText>
                    </NavSearch>
                </NavSearchBox>
                <NavIconBox>
                    <IconBox>
                        <HomeIconBox>
                            <HomeIcon aria-label="홈" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                                <HomeIconPath d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z" />
                            </HomeIcon>
                        </HomeIconBox>
                        <MessageIconBox>
                            <MessageIcon aria-label="Direct" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                                <MessageIconPath d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z" />
                            </MessageIcon>
                        </MessageIconBox>
                        <CompassIconBox>
                            <CompassIcon aria-label="사람 찾기" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                                <CompassIconPath
                                    clip-rule="evenodd"
                                    d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z"
                                    fill-rule="evenodd"
                                />
                            </CompassIcon>
                        </CompassIconBox>
                        <LikeIconBox>
                            <LikeIcon aria-label="활동 피드" fill="#262626" height="22" viewBox="0 0 48 48" width="22">
                                <LikeIconPath d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                            </LikeIcon>
                        </LikeIconBox>
                        <ProfileIconBox>
                            <ProfileIcon role="link" tabindex="0">
                                <ProfileIconImg
                                    alt="cs094님의 프로필 사진"
                                    data-testid="user-avatar"
                                    draggable="false"
                                    src="https://scontent-lht6-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&amp;_nc_ohc=pQ0Fm-UKB3UAX979oby&amp;oh=02d13fbb54125a847cab706c9f2c506a&amp;oe=6038598F&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
                                />
                            </ProfileIcon>
                        </ProfileIconBox>
                    </IconBox>
                </NavIconBox>
            </NavInnerBox>
        </NavContainer>
    );
};

export default Nav;
