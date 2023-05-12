import { Link } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItens";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";




import { Container, Form } from "./style";

export function New() {
    return (
        <Container>
            <Header />

            <main>
               <Form>
                    <header>
                            <h1>Criar nota</h1>
                            <Link to='/'>volter</Link>
                    </header>
                    <Input placeholder="titulo"/>
                    <Textarea placeholder="OBS" />

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br/" />
                        <NoteItem isNew placeholder="Novo link"/>
                    </Section>
                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React" />
                            <NoteItem isNew placeholder="Nova tag"/>
                        </div>
                    
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>

    )

}