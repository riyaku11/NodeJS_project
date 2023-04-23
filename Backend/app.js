const express = require("express");
const app = express();
const Customer = require("./model/customerModel")


app.use(express.json());



//to get all customers
app.get("/customers", async(req,res,next)=>{

const customers = await Customer.find();

res.status(201).json({
    success:true,
    customers,
})

})

//1st api
// app.get('/users/bmw-mercedes-income', async (req, res) => {
//     const users = await Customer.match({
//       income: { $lt: [ {$toDouble: { $substr: ["$income", 1, -1]}},5] },
//       car: { $in: ['BMW', 'Mercedes-Benz'] }
//     });
//     res.json(users);
//   });


// app.get('/users/bmw-mercedes-income', async (req, res) => {
//     const users = await Customer.find({
//       $expr: {
//         $and: [
//           { $in: ['$car', ['BMW', 'Mercedes']] },
//           { $lt: [{ $convert: { input: { $trim: { input: '$income', chars: '$' } }, to: 'decimal' } }, 5] }
//         ]
//       }
//     });
//     res.json(users);
//   });

app.get('/users/bmw-mercedes-income', async (req, res) => {
    try {
      const users = await Customer.aggregate([
        {
          $addFields: {
            incomeValue: {
              $toDouble: {
                $substr: ["$income", 1, -1]
              }
            }
          }
        },
        {
          $match: {
            incomeValue: { $lt: 5 },
            car: { $in: ['BMW', 'Mercedes-Benz'] }
          }
        }
      ]);
  
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  });



//2nd api
app.get('/users/male-phone', async (req, res) => {
    const users = await Customer.find({
      gender: 'Male',
      phone_price: { $gt: 10000 }
    });
    res.json(users);
  });  

//3rd api
app.get('/users/last-name-quote', async (req, res) => {
    const users = await Customer.find({
      last_name: /^M/,
      quote: { $gt: 15 },
      email: { $regex: `.*${user.last_name}.*` }
    });
    res.json(users);
  });

//4th api
app.get('/users/brand-email', async (req, res) => {
    const users = await Customer.find({
      car: { $in: ['BMW', 'Mercedes', 'Audi'] },
      email: { $not: /\d/ }
    });
    res.json(users);
  });

  app.get('/users/top-cities', async (req, res) => {
    const topCities = await Customer.aggregate([
      {
        $group: {
          _id: '$city',
          userCount: { $sum: 1 },
          avgIncome: { $avg: { $toDouble: { $substr: ['$income', 1, -1] } } }
        }
      },
      { $sort: { userCount: -1 } },
      { $limit: 10 }
    ]);
    res.json(topCities);
  });




module.exports= app;