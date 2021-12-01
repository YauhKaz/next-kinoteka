import * as React from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo'; 

const SSection = styled.section`
  height: 100%;
  color: white;
  background: url('https://dmitryvolkov.me/demo/flixtv/main/img/bg.jpg') center center / cover no-repeat;
`

const SDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 40px 0;
`

const SForm = styled.form`
  background-color: #131720;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 500px;
  justify-content: space-around;
  align-items: center;
  border-radius: 16px;
  padding: 30px 20px;
  position: relative;
  width: 100%;
  max-width: 400px;
  border: 1px solid #151f30;
  [type=submit] {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 15px auto;
    width: 100%;
    height: 50px;
    border-radius: 16px;
    background-color: #2f80ed;
    font-size: 14px;
    color: #e0e0e0;
    text-transform: uppercase;
    font-weight: 500;
    transition: all 1s;
  }
  [type=submit]:hover {
    color: #151f30;
    background-color: #fff;
    transition: all 1s;
  }
`

const SInput = styled.input`
  background-color: #151f30;
  border: 1px solid transparent;
  border-radius: 16px;
  height: 44px;
  position: relative;
  color: #fff;
  font-size: 14px;
  width: 100%;
  padding: 0 20px;
`

const Auth = () => {
  return (
    <SSection>
      <SDiv>
        <SForm>
          <Logo />
          <SInput type='text' />
          <SInput type='password' />
          <div style={{width: '100%'}}>
            <input type='checkbox' />
            <label style={{paddingLeft: '40px'}}>Remember Me</label>
          </div>
          <input type='submit' value='Sign in' />
        </SForm>
      </SDiv>
    </SSection>
  )
}

export default Auth;