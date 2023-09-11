import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const productCollection = 'Products';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail:{
        type: String,
        required: false // Ahora el campo no es requerido
    },
    code:{
        type:String,
        unique: true, // Se asegura que el código sea único
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    // category: {
    //     type: String,
    //     required: true
    // }
});

productSchema.plugin(mongoosePaginate);

export const productModel = mongoose.model(productCollection, productSchema);