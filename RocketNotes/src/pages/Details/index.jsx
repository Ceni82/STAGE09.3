import { Container, Links, Content} from './style';

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

 
export function Details () {
  
  return (
    <Container>
      <Header />
      <main>
        <Content>

            <ButtonText title="Excluir" />

            <h1>Introdução ao React</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ea aspernatur! 
              Expedita animi magnam esse, assumenda obcaecati iste Lorem ipsum dolor, sit amet 
              consectetur adipisicing elit. Perspiciatis at 
              veniam vitae a quas mollitia veritatis odit voluptas quae placeat neque necessitatibus eius 
              quisquam corrupti debitis, quos odio? Eaque, exercitationem? eum alias, non officiis saepe, 
              corrupti enim! Saepe quae sequi commodi asperiores?
            </p>

            <Section title="Links úteis">
              <Links>
                <li><a href='#'>Link de um site que não existe</a></li>
                <li><a href='#'>Link de outro site que não existe</a></li>
                
              </Links>

            </Section>

            <Section title="Marcadores">
                <Tag title="express"/>
                <Tag title="node.js"/>
            </Section>
            <Button title= "Voltar" />
        </Content>
      </main>
    </Container>
    
  )
}