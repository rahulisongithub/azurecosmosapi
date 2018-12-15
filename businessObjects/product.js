var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({ productId:Number,
                                          productName:String,
                                          productCode:String,
                                          releaseDate:String,
                                          price:Number,
                                          description:String,
                                          starRating:Number,
                                          imageUrl:String 
                                        },
                                        { versionKey:false});

module.exports = mongoose.model('Product', ProductSchema);

