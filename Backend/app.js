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

//1st api: Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.

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



//2nd api:Male Users which have phone price greater than 10,000.

app.get('/users/male-phone', async (req, res) => {
  const users = await Customer.aggregate([
    {
      $match: {
        gender: 'Male',
        $expr: {
          $gt: [{ $toDouble: "$phone_price" }, 10000]
        }
      }
    }
  ]);
  res.json(users);
});
 

//3rd api:Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name
app.get('/users/email-contains-lastname', async (req, res) => {
  try {
    const users = await Customer.find({
      $expr: { $regexMatch: { input: '$email', regex: '$last_name', options: 'i' } },
      last_name: /^M/,
      quote: { $gt: 15 }
    });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});



//4th api :Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
app.get('/users/brand-email', async (req, res) => {
    const users = await Customer.find({
      car: { $in: ['BMW', 'Mercedes-Benz', 'Audi'] },
      email: { $not: /\d/ }
    });
    res.json(users);
  });


  
  //5th api: Show the data of top 10 cities which have the highest number of users and their average income.
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



