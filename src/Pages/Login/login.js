import React, { useState } from "react";
import styled from "styled-components";

const SignIn = () => {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const onChangeAccount = e => {
        setAccount(e.target.value);
    };

    const onChangePassword = e => {
        setPassword(e.target.value);
    };

    const clickLogin = () => {
        if (account.length >3 && password.length >8) {
            alert("로그인 성공!")
        };
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
                        <LogoBox>
                            <Logo />
                        </LogoBox>
                        <LoginBox>
                            <AccountBox>
                                <InputAccount value={account} onChange={onChangeAccount} />
                            </AccountBox> 
                            <PasswordBox>
                                <InputPassword value={password} onChange={onChangePassword} />
                            </PasswordBox>
                        </LoginBox>
                        <loginBtnBox>
                            <LoginBtn onClick={() => clickLogin()}>로그인</LoginBtn>
                        </loginBtnBox>
                    </MainRightLoginBox>
                </MainRight>
            </MainContent>
        </MainContainer>
    );
};

export default SignIn;

const MainContainer = styled.div`
    width: 100%;
    align-items: stretch;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: rgba(var(--b3f,250,250,250),1);
    flex-grow: 1;
    flex-shrink: 0;
    order: 4;
    margin: 0;
    max-height: 75%;
    padding: 0;
`

const MainContent = styled.div`
    justify-content: center;
    margin: 32px auto 0;
    max-width: 935px;
    padding-bottom: 32px;
    width: 100%;
    align-items: stretch;
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: row;
    max-height: 100%;
`;

const MainLeft = styled.div`
    background-image: url(https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png);
    background-size: 454px 618px;
    flex-basis: 454px;
    height: 618px;
    margin-left: -35px;
    margin-right: -15px;
    align-items: stretch;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative
`

const MainLeftImgBox = styled.div`
    margin-top: 99px;
    margin-left: 151px;
    position: relative;
`

const MainLeftImg = styled.div`
    height: 427px;
    width: 240px;
    position: absolute;
    transition: all 1s ease-in-out;
    opacity:1;
`

const Showing = styled.div`
    z-index: 1;
    opacity: 1;
`

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
    margin: 0;
    padding: 0;
    position: relative;
`

const MainRightLoginBox = styled.div`
    align-items: center;
    background-color: white;
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
    flex-direction: column;
    display: flex;
    position: relative;
    color: rgba(var(--i1d,38,38,38),1);
`

const LogoBox = styled.div`
    display: flex;
    justify-content: center;
`

const Logo = styled.h1`
    margin: 22px auto 12px;
    background-size: 440px 411px;
    background-position: 0 -129px;
    background-image: url(https://www.instagram.com/static/bundles/es6/sprite_core_2x_bcd90c1d4868.png/bcd90c1d4868.png);
    background-repeat: repeat;
    height: 51px;
    width: 175px;
    margin-block-start: 1em;
    margin-block-end: 1em;
`

const LoginBox = styled.div`
    margin-bottom: 10px;
    margin-top: 24px;
    max-width: 350px;
    width: 100%;
    border: 0 solid #000;
    display: flex;
    flex-direction: column;
    margin: 0;
    position: relative;
`

const AccountBox = styled.div`
    margin: 0 40px 6px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    border: 1px solid rgba(var(--ca6,219,219,219),1);
    border-radius: 3px;
    height: 36px;
    width: 270px;
`

const InputAccount = styled.input`
    font-size: 12px;
    background: rgba(var(--b3f,250,250,250),1);
    border: 0;
    flex: 1 0 auto;
    padding: 9px 0 7px 8px;
    text-overflow: ellipsis;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
`

const PasswordBox = styled.div`
    margin: 0 40px 6px;
    box-sizing: border-box;
    display: flex;
    position: relative;
    border: 1px solid rgba(var(--ca6,219,219,219),1);
    border-radius: 3px;
    height: 36px;
    width: 270px;
`

const InputPassword = styled.input`
    font-size: 12px;
    background: rgba(var(--b3f,250,250,250),1);
    border: 0;
    flex: 1 0 auto;
    padding: 9px 0 7px 8px;
    text-overflow: ellipsis;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
`

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
`

const LoginBtn = styled.button`
    background-color: rgba(var(--d69,0,149,246),.3);
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
    color: rgba(var(--eca,255,255,255),1);
`
