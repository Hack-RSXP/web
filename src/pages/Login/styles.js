import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 90%;
  
  label {
    color: #FFF;
    
    span {
      margin-bottom: 5px;
      display: block;
      font-weight: 500;
    }

    input {
      border-radius: 15px;
      padding: 5px 10px;
      margin-bottom: 20px;
      background-color: #7159c1;
      opacity: 0.62;
      color: #FFF;
      border: 0;
    }  
  }
  `;


// export const SubmitButton = styled.button`
//   flex: 1;
//   border-radius: 15px;
//   background-color: #7e72a8;
//   width: 100%;
//   padding: 5px 10px;
//   color: #FFF;
//   border: 0;
//   font-weight: 500;
//   line-height: 25px;
// `;
