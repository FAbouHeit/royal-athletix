import Image from "next/image"

export default function SubMenuOne() {
    return (
      <div className='flex gap-8 mx-auto'>
          <Image 
            src={`/staticImages/crown.png`} 
            alt='product' 
            height={200} 
            width={200} 
            className='rounded-full bg-gray-400'
          />
          <div className='flex flex-col justify-between'>
              <p className="font-bold py-4">Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
          </div>
      </div>
    )
  }
  