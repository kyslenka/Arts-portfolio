import styled from 'styled-components';

export const FormWrapper = styled.div`
  max-width: auto;
  height: 325px;
  padding: 30px;
  background-color: #fff;
`;

export const Form = styled.div`
  padding-top: 15px;
`;

export const Label = styled.label`
  font-weight: bold;
  display: block;
  width: 100px;
  float: left;
  label:after {
    content: ': ';
  }
`;

export const Input = styled.input`
  width: 250px;
`;

export const Textarea = styled.textarea`
  width: 250px;
`;

export const Button = styled.button`
  width: 250px;
  margin-left: 100px;
`;
