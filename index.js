import { app } from './server.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
console.log('MongoDB URI:', process.env.MONGODB_URI);  

const port = process.env.PORT

try {
  await mongoose.connect(process.env.MONGODB_URI)
  console.log('Connected to MongoDB')
  app.listen(port, () => {
    console.log(`Running in http://localhost:${port}`)
  })
} catch (error) {
  console.error(error)
}
