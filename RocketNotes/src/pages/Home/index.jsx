import { FiPlus, FiSearch } from "react-icons/fi";


import { Container, Brand, Menu, Search, Content, NewNote } from './style';
import { Section } from '../../components/Section';
import { Header } from '../../components/Header';
import { ButtonText} from '../../components/ButtonText';
import { Note } from '../../components/Note';

import { Input} from '../../components/Input';


export function Home() {
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos"/></li>
                <li><ButtonText title="React"/></li>
                <li><ButtonText title="NodeJS"/></li>

            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo Titulo" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title='Minhas Notas'>
                <Note data={{
                    title: 'React', 
                    tags: [ 
                        {id:'1', name:'react'},
                        {id:'2', name:'rocketseat'},
                        {id:'3', name:'Node.JS'}
                        ]
                        }} 
                        />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar Nota
            </NewNote>

        </Container>
    )
}