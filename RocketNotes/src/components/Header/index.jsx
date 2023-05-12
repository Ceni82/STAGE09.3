
import { RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout  } from "./style";

export function Header() {
    return(
        <Container>
            <Profile to="/profile">
                <img 
                src= "https://media.licdn.com/dms/image/D4D03AQFYWajIIFqgxQ/profile-displayphoto-shrink_200_200/0/1663113811330?e=1688601600&v=beta&t=RzRmg-G0v2uQtAVEyFrt3FlPcexkY__w4eTSKqvxOG8"
                alt = "Eu"
                /> 
                <div>
                    <span>Bem-vindo</span>
                    <strong>Mateus Ceni</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
            
        </Container>
    )

}