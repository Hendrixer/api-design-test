import prisma from '../db'

export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id
    }
  })

  if (!product) {
    res.status(400)
    res.send('Could not create product')
    return
  }

  res.json({data: product})
}

export const updateProduct = (req, res) => {
  
}

export const getOneProduct = () => {}

export const getManyProducts = () => {}

export const deleteProduct = () => {}

