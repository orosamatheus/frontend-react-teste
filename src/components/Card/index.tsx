import { Container, Text } from '@chakra-ui/react'

interface CardProps {
    children: React.ReactNode;
    key?: number;
}

export default function Card({children, key}: CardProps){
    return(
        <Container key={key} centerContent p="4" mt="4" mb="4" bgColor="blue.50" borderRadius="20" w={['xs','sm', 'md', 'lg', 'xl']} boxShadow="md">
            <Text fontSize={['xs','sm', 'md', 'lg', 'xl']}>{children}</Text>
        </Container>
    )
}