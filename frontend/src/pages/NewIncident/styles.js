import styled from 'styled-components';

export const NewIncidentContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    max-width: 1120px;

    display: flex;
    align-items: center;
    justify-content: center;

    .content {
        width: 100%;
        padding: 90px;
        background: #f0f0f5;
        border-radius: 15px;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.06);

        display: flex;
        justify-content: space-between;

        .left_content {
            z-index: 2;
            width: 100%;
            max-width: 350px;
            margin-right: 60px;
            
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            .logo {
                width: 100%;
                margin-bottom: 30px; 
            }

            h1 { margin-bottom: 10px; }

            p { text-align: justify; }
        }

        form.right_content {
            z-index: 2;
            width: 100%;
            max-width: 450px;

            background: url('../../assets/heroes.png') center no-repeat;
            background-size: cover;
            background-blend-mode: overlay;
            background-color: rgba(240, 240, 245, 0.99);

            input.total_cost { margin-top: 5px; }

            textarea { 
                resize: none;
                margin-top: 8px;
            }
        }
    }

    .decorations {
        width: 100%;
        max-width: 1280px;
        position: absolute;
        margin: 133px auto 0;
        display: flex;
        justify-content: space-between;
    }

    @media (max-width: 1200px) { .decorations { display: none; } }

    @media (max-width: 1160px) {
        height: 100%;
        padding: 60px 40px;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .content {
            padding: 60px 40px;
            align-items: center;
            flex-direction: column;

            .left_content {
                height: 300px;
                margin: 0 0 36px 0;
                align-items: center;

                .logo { width: calc(100% - 70px); }

                h1, p { text-align: center; }
            }
        }
    }
`;
