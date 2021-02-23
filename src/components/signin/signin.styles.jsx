import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: #f9fafb;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
`;

export const SignInTitle = styled.h2`
  text-align: center;
  margin: 0 0 20px;
`;

export const FormItem = styled.div`
  margin-bottom: 10px;
  padding-bottom: 20px;
  position: relative;
`;

export const FormLabel = styled.label`
  color: #777;
  display: block;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  border: 2px solid aliceblue;
  border-radius: 4px;
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #777;
  }
`;

export const FormButton = styled.button`
  width: 100%;
  margin-top: 15px;
  background-color: #3498db;
  border: 2px solid #3498db;
  border-radius: 4px;
  display: block;
  font-size: 16px;
  padding: 6px 10px;
  color: white;
  cursor: pointer;
`;
