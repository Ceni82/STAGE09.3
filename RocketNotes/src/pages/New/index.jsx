import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";

import { Container, Form } from "./style";

export function New() {
    return (
        <Container>
            <Header />

            <main>
               <Form>
                    <header>
                            <h1>Criar nota</h1>
                            <a href="/">voltar</a>
                    </header>
                    <Input placeholder="titulo"/>
                    <Textarea placeholder="OBS" />
                </Form>
            </main>
        </Container>

    )

}