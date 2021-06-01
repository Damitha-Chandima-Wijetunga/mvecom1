const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');

// Example Express Rest API endpoints
router.get('/test-database-connection', (req:any, res:any) => {

    mongoose.connect(process.env.MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }).then((result:any)=>{
        mongoose.connection.close();
        res.send('Connected to MongoDB');
        res.end();
      }).catch((err:any)=>{
        console.log(err);
        res.send('Error');
        res.end();
      });
    
    
  });

  router.get('/how-to-insert-a-document-to-collection', (req:any, res:any) => {

    mongoose.connect(process.env.MONGODB_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }).then((result:any)=>{

        let Collections:string[]=Object.keys(mongoose.connection.collections);
        
        let UserSchema = mongoose.Schema({
          email: String,
          name: String,
          enabled: Boolean
        });
     
        // compile schema to model
        let UserModel = mongoose.model('User', UserSchema, 'user');
     
        // a document instance
        let User1 = new UserModel({ email: 'damitha.chandima@outlook.com', name: 'Damitha', enabled: true });
     
        // save model to database
        User1.save((err:any, user:any) => {
          Collections=Object.keys(mongoose.connection.collections);
          mongoose.connection.close();
          res.send(Collections);
          res.end();
        });
        
      }).catch((err:any)=>{
        console.log(err);
        res.send('Error');
        res.end();
      });
   
  });

  module.exports=router;
