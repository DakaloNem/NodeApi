const express = require("express");
//bring in routes
const postRoutes = require("./routes/post"); //destructuring
//mongoose
const mongoose = require("mongoose");
//load env
const dotenv = require("dotenv");
const morgan = require("morgan");
//config
const con = require("./config");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

dotenv.config();


async function ConnectToDatabase(){
    try {
        await mongoose.connect(
            con.MONGO_DATA.Mogo.base_url, con.MONGO_DATA.ClientOptions
            ).then(() => console.log("DB Connected"));
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        
      } finally {
        // Ensures that the client will close when you finish/error
        //await mongoose.disconnect();
    }
}

ConnectToDatabase().catch(console.dir)

function createAppAndListen()
{
    const app = express();
    //middleware
    app.use(morgan("dev"));
    app.use(bodyParser.json());
    app.use(expressValidator());
    app.use("/", postRoutes);



    const portNumber = 8080;
    app.listen(portNumber, 
        () => { console.log(`Node JS API is listening on port: ${portNumber}`);
    });
}

createAppAndListen();