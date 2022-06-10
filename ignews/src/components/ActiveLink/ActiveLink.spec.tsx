import { render } from '@testing-library/react'
import { ActiveLink } from '.'

// simular o uso do useRouter, diz o qe quer q faça
// toda vez que uma função usar o useRouter quer q retorne um asPath com tal rota
// isso pode fazer com qualquer modulo
jest.mock('next/router', () => {
    return {
        useRouter() {
            return {
                asPath: '/'
            }
        }
    }
})

describe('ActiveLink', () => {
    it('renders correctly', () =>{
        // renderiza o componente de forma virtual
        // teste unitário desconexo da aplicação
        const { getByText } = render(
            <ActiveLink href='/' activeClassName='active'>
                <a>Home</a>
            </ActiveLink>
        )
    
        expect(getByText('Home')).toBeInTheDocument()
    })
    
    it('adds active class if the link as currently active', () =>{
        const { getByText } = render(
            <ActiveLink href='/' activeClassName='active'>
                <a>Home</a>
            </ActiveLink>
        )
    
        expect(getByText('Home')).toHaveClass('active')
    })
})