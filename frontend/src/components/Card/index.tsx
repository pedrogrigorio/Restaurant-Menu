import Image from 'next/image'

interface CardProps {
  price: number
  title: string
  image: string
}

export default function Card({ price, title, image }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg shadow-xl w-[250px]">
      <Image
        src={image}
        width={250}
        height={250}
        alt="food-image"
        className="w-[250px] h-[250px] rounded-t-xl"
      />

      <div className="flex flex-col items-center justify-center py-2 gap-2">
        <h2>{title}</h2>
        <p>
          <b>Valor: </b>
          {price}
        </p>
      </div>
    </div>
  )
}
