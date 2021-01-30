import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100%;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: rgba(var(--b3f, 250, 250, 250), 1);
    max-height: 75%;
    justify-content: center;
`;

const MainContent = styled.div`
    margin-top: 75px;
    flex-grow: 1;
    padding-bottom: 32px;
    width: 935px;
    align-items: stretch;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`;

const MainLeft = styled.div`
    background-image: url(https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png);
    background-size: 454px 618px;
    flex-basis: 454px;
    height: 618px;
    margin-left: -35px;
    margin-right: -15px;
    margin-top: 1px;
    align-self: center;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
`;

const MainLeftImgBox = styled.div`
    margin-top: 99px;
    margin-left: 151px;
    position: relative;
`;

const MainLeftImg = styled.img`
    height: 427px;
    width: 240px;
    position: absolute;
    transition: all 1s ease-in-out;
    opacity: 1;
`;

const MainRight = styled.div`
    flex-grow: 1;
    margin-top: 12px;
    max-width: 350px;
    align-items: stretch;
    border: 0 solid #000;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    position: relative;
`;

const MainRightLoginBox = styled.div`
    align-items: center;
    background-color: white;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
    flex-direction: column;
    display: flex;
    position: relative;
    color: rgba(var(--i1d, 38, 38, 38), 1);
    height: 380px;
`;

const LogoBox = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: 440px 411px;
    background-position: 0 -129px;
    background-image: url(https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png);
    height: 51px;
    width: 175px;
    margin-block-start: 22px;
    margin-block-end: 12px;
    overflow-x: hidden;
    overflow-y: hidden;
`;

const LoginBox = styled.div`
    margin-bottom: 10px;
    padding-top: 24px;
    max-width: 350px;
    width: 100%;
    border: 0 solid #000;
    display: flex;
    flex-direction: column;
    margin: 0;
    position: relative;
    height: 263px;
`;

const AccountBox = styled.div`
    margin: 0 40px 6px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    align-items: center;
    border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
    border-radius: 3px;
    height: 38px;
    width: 268px;
`;

const InputAccount = styled.input`
    font-size: 12px;
    background: rgba(var(--b3f, 250, 250, 250), 1);
    border: 0;
    flex: 1 0 auto;
    padding: 9px 0 7px 8px;
    text-overflow: ellipsis;
    height: 36px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
`;

const PasswordBox = styled.div`
    margin: 0 40px 6px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
    border-radius: 3px;
    height: 38px;
    width: 268px;
`;

const InputPassword = styled.input`
    font-size: 12px;
    background: rgba(var(--b3f, 250, 250, 250), 1);
    border: 0;
    flex: 1 0 auto;
    padding: 9px 0 7px 8px;
    text-overflow: ellipsis;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
`;

const LoginBtnBox = styled.div`
    margin-bottom: 8px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 8px;
    justify-content: center;
    align-content: stretch;
    display: flex;
    position: relative;
    justify-content: center;
    width: 270px;
    height: 30px;
    border: 1px solid transparent;
`;

const LoginBtn = styled.button`
    background-color: rgba(var(--d69, 0, 149, 246), 0.3);
    border: 1px solid transparent;
    border-radius: 4px;
    position: relative;
    text-align: center;
    width: 270px;
    height: 30px;
    font-size: 14px;
    line-height: 18px;
    text-rendering: auto;
    font: 400 13.3333px Arial;
    color: rgba(var(--eca, 255, 255, 255), 1);
`;
const OrBox = styled.div`
    margin: 10px 40px 18px;
    position: relative;
    align-items: stretch;
    box-sizing: border-box;
    flex-direction: row;
    display: flex;
`;

const OrLeftLine = styled.div`
    height: 1px;
    max-width: 42%;
    position: relative;
    top: 0.45em;
    background-color: rgba(var(--b38, 219, 219, 219), 1);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
    flex-shrink: 1;
`;

const OrText = styled.div`
    font-size: 13px;
    font-weight: 600;
    line-height: 15px;
    margin: 0 18px;
    color: rgba(var(--f52, 142, 142, 142), 1);
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const OrRightLine = styled.div`
    height: 1px;
    max-width: 42%;
    position: relative;
    top: 0.45em;
    background-color: rgba(var(--b38, 219, 219, 219), 1);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
    flex-shrink: 1;
`;

const FacebookBox = styled.div`
    margin: 8px 40px 8px 40px;
    display: flex;
    position: relative;
    justify-content: center;
`;

const FacebookBtn = styled.button`
    color: rgba(var(--d69, 0, 149, 246), 1);
    display: block;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 18px;
    background-color: rgba(0, 0, 0, 0);
    border-color: rgba(0, 0, 0, 0);
`;

const FacebookLogo = styled.span`
    display: inline-block;
    margin-right: 8px;
    position: relative;
    top: 3px;
    background-image: url(https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png);
    background-position: -347px -329px;
    background-size: 440px 411px;
    height: 16px;
    width: 16px;
`;

const FacebookText = styled.span`
    color: rgb(56, 81, 133);
    font-weight: 600;
    font-size: 14px;
`;

const FindPassword = styled.a`
    margin-top: 12px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: rgb(0, 55, 107);
`;

const MainRightSignup = styled.div`
    align-items: center;
    background-color: white;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
    flex-direction: column;
    display: flex;
    position: relative;
    color: rgba(var(--i1d, 38, 38, 38), 1);
    height: 63px;
`;

const SignupBox = styled.div`
    align-items: stretch;
    box-sizing: border-box;
    margin: -3px 0px -4px 0px;
    position: relative;
`;

const SignupText = styled.p`
    display: block;
    margin: 15px 15px 15px 15px;
    font-size: 14px;
    font-stretch: 100%;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
`;

const SignupAtagText = styled.span`
    font-weight: 600;
    color: rgb(0, 149, 246);
`;

const MainRightDownload = styled.div`
    height: 102px;
`;

const DownloadText = styled.p`
    margin: 10px 20px 10px 20px;
    font-size: 14px;
    font-stretch: 100%;
    font-weight: 400;
    text-align: center;
    line-height: 18px;
`;

const Platfrom = styled.div`
    align-items: stretch;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 10px;
    position: relative;
`;

const ApplePlatform = styled.a`
    margin-right: 8px;
`;

const GooglePlatform = styled.a``;

const AppleImg = styled.img`
    height: 40px;
`;

const GoogleImg = styled.img`
    height: 40px;
`;

const SignIn = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const onChangeAccount = e => {
        setAccount(e.target.value);
    };

    const onChangePassword = e => {
        setPassword(e.target.value);
    };

    const history = useHistory();

    const clickLogin = () => {
        if (account.length > 3 && password.length > 8) {
            alert('로그인 성공!');
            history.push({ pathname: '/' });
        } else {
            alert('로그인 실패!');
        }
    };

    return (
        <MainContainer>
            <MainContent>
                <MainLeft>
                    <MainLeftImgBox>
                        <MainLeftImg src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg" />
                        <MainLeftImg src="https://www.instagram.com/static/images/homepage/screenshot2-2x.jpg/177140221987.jpg" />
                        <MainLeftImg src="https://www.instagram.com/static/images/homepage/screenshot3-2x.jpg/ff2c097a681e.jpg" />
                        <MainLeftImg src="https://www.instagram.com/static/images/homepage/screenshot4-2x.jpg/b27a108592d8.jpg" />
                        <MainLeftImg src="https://www.instagram.com/static/images/homepage/screenshot5-2x.jpg/5e04169b9308.jpg" />
                    </MainLeftImgBox>
                </MainLeft>
                <MainRight>
                    <MainRightLoginBox>
                        <LogoBox />
                        <LoginBox>
                            <AccountBox>
                                <InputAccount value={account} onChange={onChangeAccount} placeholder="전화번호, 사용자 이름 또는 이메일" />
                            </AccountBox>
                            <PasswordBox>
                                <InputPassword value={password} onChange={onChangePassword} placeholder="비밀번호" />
                            </PasswordBox>
                            <LoginBtnBox>
                                <LoginBtn onClick={() => clickLogin()}>로그인</LoginBtn>
                            </LoginBtnBox>
                            <OrBox>
                                <OrLeftLine />
                                <OrText>또는</OrText>
                                <OrRightLine />
                            </OrBox>
                            <FacebookBox>
                                <FacebookBtn>
                                    <FacebookLogo></FacebookLogo>
                                    <FacebookText>Facebook으로 로그인</FacebookText>
                                </FacebookBtn>
                            </FacebookBox>
                            <FindPassword>비밀번호를 잊으셨나요?</FindPassword>
                        </LoginBox>
                    </MainRightLoginBox>
                    <MainRightSignup>
                        <SignupBox>
                            <SignupText>
                                계정이 없으신가요?
                                <SignupAtagText>가입하기</SignupAtagText>
                            </SignupText>
                        </SignupBox>
                    </MainRightSignup>
                    <MainRightDownload>
                        <DownloadText>앱을 다운로드하세요.</DownloadText>
                        <Platfrom>
                            <ApplePlatform>
                                <AppleImg
                                    alt="App Store에서 이용 가능"
                                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
                                />
                            </ApplePlatform>
                            <GooglePlatform>
                                <GoogleImg
                                    alt="Google Play에서 이용 가능"
                                    src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png%22"
                                />
                            </GooglePlatform>
                        </Platfrom>
                    </MainRightDownload>
                </MainRight>
            </MainContent>
        </MainContainer>
    );
};

export default SignIn;
