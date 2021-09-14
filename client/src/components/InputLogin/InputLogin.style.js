import styled from 'styled-components';

export const InputContainer = styled.div`

  display: flex;
  width: 383px;
  height: 66px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 20px;
  flex-direction: ${(props) => (props.focus || props.inputId ? 'column' : 'low')};
  border: ${(props) => (props.focus || props.inputId ? '2px #1D9BF0' : '1px #D1D9DD')} solid;

`;

export const InputHolder = styled.div`
  width: 60px;
  height: 58px;
  flex: 2;
  display: flex;
  padding-left: 5px;

  padding-top: ${(props) => (props.focus || props.inputId ? '5px' : '15px')};
  transition: ${(props) => (props.focus || props.inputId ? 'all 0.3s' : 'none')};
  color: ${(props) => (props.focus || props.inputId ? '#4AA1EB' : '#6F767C')};
  font-size: ${(props) => (props.focus || props.inputId ? '0.9rem' : '1.1rem')};
`;

export const InputUserInfo = styled.input`
  border-radius: 4px;
  border: none;
  height: 50px;
  padding: 0;
  outline: none;
  flex: 8;
  padding-left: 5px;
  font-size: 1rem;
  margin-bottom: 0px;
`;
