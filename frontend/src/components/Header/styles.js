import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 0 40px;
    max-width: 1180px;
    margin: 30px auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .left_content, .right_content { 
        display: flex;
        align-items: center;
    }

    .logo { height: 64px; }

    .welcome_text { margin: 0 25px; }

    .black_btn {
        width: 210px;
        margin-top: 0;
        min-width: 210px;
        margin-left: auto;
    }

    .logout_btn {
        width: 55px;
        margin-top: 0;
        min-width: 55px;
        margin-left: 15px;
        transition: all ease-in-out 0.1s;
        box-shadow: 0 0 30px rgba(0,0,0,0.06);
    }

    .logout_btn:hover { transform: perspective(1px) scale(0.96); }

    @media (max-width: 720px) {
        flex-direction: column;

        .left_content, .right_content {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        div:not(:first-child) { margin-top: 30px; }

        .black_btn { width: 100%; }
    }
`;