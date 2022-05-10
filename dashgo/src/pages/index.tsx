import { 
  Flex, 
  Button, 
  Stack,
} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })

  const { signIn } = useContext(AuthContext)

  const handleSignIn:SubmitHandler<SignInFormData> = async (values) =>{
    await new Promise(resolve => setTimeout(resolve, 2000))
    await signIn(values)
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex 
        as="form" 
        w="100%" 
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name='email' 
            type='email' 
            label='E-mail'
            error={formState.errors.email} 
            {...register('email')} 
          />
          <Input 
            name='password' 
            type='password' 
            label='Senha'
            error={formState.errors.password} 
            {...register('password')}
          />
        </Stack>

        <Button 
          type='submit' 
          mt="6" 
          colorScheme="pink" 
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
