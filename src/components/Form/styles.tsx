import styled from 'styled-components/macro';

export const Container = styled.div`
    z-index: 3;
`;

export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

export const Input = styled.input`
    padding: 8px 12px;
    margin-right: 15px;
    background-color: var(--color-white);
    border: 0;
    height: 38px;
    line-height: 28px;
    border-radius: 6px;

    &&:focus {
        outline-style: solid;
        outline-color: var(--color-primary);
    }

`;

export const Button = styled.button`
    background-color: var(--color-primary);
    color: var(--color-white);
    border-radius: 6px;

    font-size: 12px;
    text-transform: uppercase;
    padding: 8px 12px;
    border: 0;
    height: 38px;
`;