import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
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

  // Filtered products based on search
  const filteredClothes = clothesData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // view item
  const handleView = (item) => {
    navigate('/view', { state: item })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-white">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-r from-white/80 to-pink-100/80 mb-14 mt-21">
        <h1 className="text-4xl md:text-5xl font-extrabold text-deeppink text-center mb-4 drop-shadow-lg">Find Your Perfect Style</h1>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-6 max-w-2xl">Discover the latest trends in clothing and customize your look for any occasion. Shop now and express your unique style!</p>

      </div>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
          <div className="bg-white/70 rounded-2xl shadow-lg p-10 flex flex-col items-center">
            <CircularProgress sx={{ color: 'deeppink' }} />
            <span className="mt-4 text-deeppink font-semibold">Loading styles...</span>
          </div>
        </Box>
      ) : (
        <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 mb-20'>
          {filteredClothes.length > 0 ? (
            filteredClothes.map((item) => (
              <Card
                key={item.id}
                sx={{
                  maxWidth: 335,
                  background: 'rgba(255,255,255,0.7)',
                  borderRadius: '1.5rem',
                  boxShadow: '0 4px 24px 0 rgba(255,64,129,0.10)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'scale(1.04) translateY(-4px)',
                    boxShadow: '0 8px 32px 0 rgba(255,64,129,0.18)',
                  },
                  cursor: 'pointer',
                }}
                onClick={() => handleView(item)}
              >
                <CardMedia
                  sx={{ height: 250, borderRadius: '1.5rem 1.5rem 0 0' }}
                  image={item.image}
                  title={item.name}
                />
                <CardContent className='text-center'>
                  <h2 className='font-bold text-xl text-deeppink'>{item.name}</h2>
                  <h3 className='text-lg text-gray-700'>${item.price}</h3>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">No items found.</p>
          )}
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Home
