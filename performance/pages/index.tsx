import type { NextPage } from 'next'
import { FormEvent, useCallback, useState } from 'react'
import { SearchResults } from '../components/SearchResults'

type Results ={
  totalPrice: number
  data: Array<{
    id:number
    price: number
    title: string
    priceFormatted: string
}>
}

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<Results>({
    totalPrice: 0,
    data: []
  })

  async function handleSearch(event: FormEvent) {
    event.preventDefault()

    if(!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json()

    // formata apenas 1 vez, e não no momento que for exibir, diminuindo o custo de processamento
    const formater = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const products = data.map((product: any) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        priceFormatted: formater.format(product.price)
      }
    })

    const totalPrice = data.reduce((total: any, product: any) => {
      return total + product.price
  }, 0)

    setResults({totalPrice, data: products})
  }

  const addToWishlist= useCallback(async (id: number)=> {
    console.log(id)
  }, [])

  return (
    <div>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        <button type='submit' >Buscar</button>
      </form>

      <SearchResults results={results?.data} totalPrice={results?.totalPrice} onAddToWishList={addToWishlist}/>
    </div>
  )
}

export default Home
