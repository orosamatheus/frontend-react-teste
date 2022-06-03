import { Container, Text } from '@chakra-ui/react'

interface CardProps {
    children: React.ReactNode;
}

export default function Card({children}: CardProps){
    return(
        <Container className="cardContainer" centerContent p="4" mt="4" mb="4" bgColor="blue.50" borderRadius="20" w={['xs','sm', 'md', 'lg', 'xl']} boxShadow="md">
            <Text className="cardText" fontSize={['xs','sm', 'md', 'lg', 'xl']}>{children}</Text>
        </Container>
    )
}