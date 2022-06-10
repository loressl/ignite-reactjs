import { render, screen, waitFor } from '@testing-library/react'
import { Async } from '.'

test('it renders correctly', async () => {
    render(<Async/>)

    expect(screen.getByText('Hello World')).toBeInTheDocument()

    //*espera algo acontecer e colocar o interval o mesmo tempo

    //expect(await screen.findByText('Button', {}, {interval: 1000})).toBeInTheDocument()
   
    // await waitFor(() => {
    //     return expect(screen.getByText('Button')).toBeInTheDocument()
    // }, {
    //     interval: 1000
    // })


})

/**
 * get: não esperam o elemento surgir na tela, pega logo
 * query: procura o elemento, se não encontrar não dá erro
 * find: vai procurar e fica monitorando para ver se o elemento em algum momento aparece e não encontrar dá erro
 */