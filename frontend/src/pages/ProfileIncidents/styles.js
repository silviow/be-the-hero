import styled from 'styled-components';
import heroes from '../../assets/heroes.png'

export const ProfileIncidentsContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: 1180px;
    padding: 60px 40px 80px;
    min-height: calc(100vh - 280px);

    background: url(${heroes}) no-repeat center;
    background-position-x: 55%;
    background-blend-mode: overlay;
    background-color: rgba(240, 240, 245, 0.99);

    h1 { margin-bottom: 30px; }

    ul {
        display: grid;
        grid-gap: 25px;
        list-style: none;
        grid-template-columns: repeat(2, 1fr);

        li {
            padding: 30px;
            background: #fff;
            position: relative;
            border-radius: 10px;
            box-shadow: 0 0 100px rgba(0,0,0,0.02);

            strong { display: block; }

            strong, p { text-align: justify; }

            p + strong { margin-top: 20px; }

            .total_cost { font-family: 'Lato', sans-serif; }

            button {
                border: 0;
                top: 25px;
                right: 25px;
                position: absolute;
                background: #fff;
                transition: all ease-in-out 0.1s;
            }

            button:hover {
                opacity: 0.8; 
                transform: perspective(1px) scale(0.96); 
            }
        }
    }

    @media (max-width: 720px) {
        h1 { text-align: center; }

        ul { grid-template-columns: 1fr; }
    }
`;
