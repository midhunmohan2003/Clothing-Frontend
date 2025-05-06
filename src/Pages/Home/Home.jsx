import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import clothesData from '../../Data/clothesData'
import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500) 

    return () => clearTimeout(timer)
  }, [])

  // search bar
  const filteredClothes = clothesData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // view item
  const handleView = (item) => {
    navigate('/view', { state: item })
  }

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
          <CircularProgress sx={{ color: 'deeppink' }} />
        </Box>
      ) : (
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
          {filteredClothes.length > 0 ? (
            filteredClothes.map((item) => (
              <Card key={item.id} sx={{ maxWidth: 335 }}>
                <CardMedia
                  sx={{ height: 250, cursor: 'pointer' }}
                  image={item.image}
                  title={item.name}
                  onClick={() => handleView(item)}
                />
                <CardContent className='text-center'>
                  <h2 className='font-bold text-xl'>{item.name}</h2>
                  <h3>${item.price}</h3>
                </CardContent>
                <CardActions className='items-center justify-center'>
                  <Button><i className="fa-solid fa-heart text-pink-700 text-lg"></i></Button>
                  <Button><i className="fa-solid fa-cart-shopping text-black text-lg"></i></Button>
                </CardActions>
              </Card>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No items found.</p>
          )}
        </div>
      )}
    </>
  )
}

export default Home
