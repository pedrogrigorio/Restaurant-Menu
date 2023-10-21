'use client'

import Card from '@/components/Card'
import { api } from '@/lib/axios'
import { useEffect, useState } from 'react'

interface FoodData {
  id: number
  title: string
  image: string
  price: number
}

export default function Home() {
  const [data, setData] = useState<FoodData[]>([])

  const fetchData = async () => {
    const response = await api.get('/food')
    console.log(response.data)
    setData(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex flex-col w-full items-center gap-12 ">
      <h1 className="text-7xl">Cardápio</h1>
      <ul className="grid grid-cols-3 gap-4">
        {data.map((foodData) => (
          <li key={foodData.id}>
            <Card
              title={foodData.title}
              image={foodData.image}
              price={foodData.price}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
