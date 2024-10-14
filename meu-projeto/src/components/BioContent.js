import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import image1 from '../assets/01.png'
import image2 from '../assets/02.png'
import image3 from '../assets/03.png'
import image4 from '../assets/04.png'
import image5 from '../assets/05.png'
import image6 from '../assets/06.png'
import image7 from '../assets/07.png'
import image8 from '../assets/08.png'
import image9 from '../assets/09.png'

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Img = styled.img`
  flex-shrink: 0;
  width: 300px;
  height: auto;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.p`
  text-align: justify;
`;

const Title = styled.h2`
  text-align: left;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  align-self: flex-start;
  &:hover {
    background-color: #394c73;
  }
`

function BioContent(){
    const{id} = useParams()
    const navigate = useNavigate()
    const [character, setCarachter] = useState(null)
    useEffect(() =>{
        const mockData = [
            { id:'1', src: image1, alt: 'Dwight Schrute', title: "Dwight Schrute", description: "Assistente do gerente regional, , é um premiado vendedor e voluntário reserva do xerife de Lackawanna." },
            { id:'2', src: image2, alt: 'Michael Scott', title: "Michael Scott", description: "Gerente regional da filial de Scranton da Dunder Mifflin Paper Company" },
            { id:'3', src: image3, alt: 'Jim Halpert', title: "Jim Halpert", description: "Um dos vendedores da Dunder Mifflin, tem uma forte amizade marcada por uma tensão romântica, com a recepcionista Pam." },
            { id:'4', src: image4, alt: 'Pam Beesly', title: "Pam Beesly", description: "Recepcionista da Dunder Mifflin, começa a série como noiva do entregador Roy." },
            { id:'5', src: image5, alt: 'Angela Martin', title: "Angela Martin", description: "Contadora. Rígida e séria, vive sozinha e tem mania por gatos." },
            { id:'6', src: image6, alt: 'Phyllis Vance', title: "Phyllis Vance", description: "Ela é um tipo quieto, mas amigável, que adora conversa de garotas e fofoca." },
            { id:'7', src: image7, alt: 'Stanley Hudson', title: "Stanley Hudson", description: "Ele é retratado como um funcionário sério, perpetuamente mal-humorado e descontente." },
            { id:'8', src: image8, alt: 'Holly Flax', title: "Holly Flax", description: "Chega a Dunder Mifflin para servir como substituta de Toby Flenderson , o anterior representante de RH da filial de Scranton." },
            { id:'9', src: image9, alt: 'Ryan Howard', title: "Ryan Howard", description: "Estagiário e estudante de administração." },
        ]
        const fetchedCharacter = mockData.find(char => char.id === id)
        setCarachter(fetchedCharacter)
    }, [id])

    const handleBack = () =>{
        navigate (-1)
    }

    if(!character){
        return <div><p>Personagem não encontrado!</p></div>
    }

    return(
        <div>
            <Container>
                <Content>
                    <Img src={character.src} alt={character.alt}/>
                    <TextContainer>
                        <Title>{character.title}</Title>
                        <Text>{character.description}</Text>
                        <Button onClick={handleBack}>Voltar</Button>
                    </TextContainer>
                </Content>
            </Container>
        </div>
    )
}

export default BioContent