import styled from 'styled-components';

export const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    max-width: 1120px;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .left_container {
        .logo { margin-bottom: 40px; }

        .action_container {
            width: 100%;
            max-width: 350px;

            p { margin-top: 3px; }

            .link_to_mobile_app {
                margin-top: 3px;

                a { color: #000; }
            }

            .icons_container {
                display: flex;
                margin-top: 10px;
                align-items: center;
                justify-content: center;

                a:not(:first-child) { margin-left: 3px; }

                svg { transition: all ease-in-out 0.1s; }

                a:hover {
                    svg { transform: scale(1.08); }
                }
            }
        }

        .form_container {
            width: 100%;
            max-width: 350px;

            form { 
                margin-top: 50px;

                h3 {
                    font-size: 22px;
                    margin-bottom: 30px;
                }

                .access_info { 
                    padding: 13px 0;
                    text-align: center;
                }
            }
        }
    }

    .right_container {
        margin-left: 80px;
        margin-bottom: 20px;
    }

    @media (max-width: 1120px) {
        height: 100%;
        padding: 80px 40px;
        align-items: center;
        flex-direction: column;
        justify-content: flex-start;
        
        h1, h3, p { text-align: center; }

        .left_container {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .link_btn {
                display: flex;
                justify-content: center;
            }
        }

        .right_container { 
            margin: 60px 0 0 0; 
            
            .heroes { width: 100%; }
        }
    }
`
