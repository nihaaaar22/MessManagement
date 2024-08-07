//order schema contains userid, phno, items, totalcost, timestamp(default current time )

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: Number,
            required: true,
            unique: true
        },
        orderId: {
            type: Number,
            required: true,
            unique: true

        },
        phoneNumber: {
            type: Number,
            required: true,
            maxLength: 10
        },
        items: [{
            itemName: String,
            quantity: Number,
            price: Number,
        }],
        cost: {
            type: Number,
            required: true
        },
        orderedAt: {
            type: Date,
            default: Date.now

        }

    }
)


const Order = mongoose.model("Order",orderSchema);
module.exports=Order
