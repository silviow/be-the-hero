import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #f0f0f5;
        -webkit-font-smoothing: antialiased;
        font: 400 16px 'Raleway', sans-serif;
    }

    input, button, textarea { font: 400 16px 'Raleway', sans-serif; }

    form {
        input {
            border: 0;
            width: 100%;
            height: 55px;
            color: #333;
            padding: 0 18px;
            border-radius: 10px;
            box-shadow: 0 0 100px rgba(0,0,0,0.05);
        }

        textarea {
            width: 100%;
            color: #333;
            padding: 18px;
            min-height: 140px;
            border-radius: 10px;
            border: 1px solid #ededed;
        }

        input:-webkit-autofill,
        textarea:-webkit-autofill { box-shadow: 0 0 0 30px white inset !important; }

        input::placeholder, textarea::placeholder { color: #bbb; }
    }

    button { cursor: pointer; }

    .btn {
        border: 0;
        color: #fff;
        width: 100%;
        height: 55px;
        font-size: 16px;
        font-weight: 700;
        margin-top: 15px;
        text-align: center;
        border-radius: 10px;
        display: inline-block;
        text-decoration: none;
        transition: all ease-in-out 0.1s;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .btn:hover { transform: perspective(1px) scale(0.98); }

    .red_btn { background: #e02041; }

    .black_btn { background: #1F2127; }

    .link_btn {
        border: 0;
        color: #000;
        display: flex;
        font-size: 18px;
        margin-top: 30px;
        font-weight: 500;
        align-items: center;
        text-decoration: none;
        transition: opacity 0.5s;
    }

    .link_btn svg { margin-right: 8px; }

    .link_btn:hover { opacity: 0.8; }
`;
