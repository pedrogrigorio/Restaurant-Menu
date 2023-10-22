import { api } from '@/lib/axios'
import { useState } from 'react'

interface ModalProps {
  closeModal(): void
  refetch(): void
}

interface FoodData {
  title: string
  image: string
  price: number
}

interface InputProps {
  label: string
  value: string | number
  updateValue(value: any): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        onChange={(event) => updateValue(event.target.value)}
        className="p-3 border-2 border-[#c6c5c5c5] rounded-xl text-2xl w-full mb-3"
      ></input>
    </>
  )
}

export default function Modal({ closeModal, refetch }: ModalProps) {
  async function handleSubmit() {
    const data: FoodData = {
      title,
      price,
      image,
    }

    const response = await api.post('/food', data)

    if (response.status === 200) {
      closeModal()
      refetch()
    }
  }

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')

  return (
    <div className="flex items-center justify-center fixed overflow-hidden h-screen z-10 w-screen bg-[#000] bg-opacity-40">
      <div className="bg-gray-50 p-6 h-[60%] w-[60%] rounded-3xl flex items-start flex-col justify-between">
        <h2 className="text-3xl">Cadastre um novo item no cardápio</h2>
        <form className="flex flex-col w-full">
          <Input label="Título" value={title} updateValue={setTitle} />
          <Input label="Preço" value={price} updateValue={setPrice} />
          <Input label="Imagem" value={image} updateValue={setImage} />
        </form>
        <div className="flex gap-3 justify-end w-full">
          <button onClick={closeModal}>Cancelar</button>
          <button
            onClick={handleSubmit}
            className="bg-[#3a44f8] hover:bg-[#0275d8] p-4 rounded-lg text-[#fff] font-bold"
          >
            Postar
          </button>
        </div>
      </div>
    </div>
  )
}
