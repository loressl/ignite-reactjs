import { render, screen } from '@testing-library/react'
import { Header } from '.'

jest.mock('next/router', () => {
    return {
        useRouter() {
            return {
                asPath: '/'
            }
        }
    }
})

jest.mock('next-auth/react', () => {
    return {
        useSession() {
            return [null, false]
        }
    }
})

describe('Header', () => {
    it('renders correctly', () =>{
        render(
            <Header/>
        )

        // disponibiliza uma url que mostra quais métodos podem ser utilizados nos testes
        screen.logTestingPlaygroundURL()
    
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('Posts')).toBeInTheDocument()
    })
})