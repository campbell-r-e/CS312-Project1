const databasemodel =require('../models/name.js');
exports.getaddinput=(req,res,next) =>{
    res.render('index', { 
        title: 'Home',
        //names: data.fetchall()
    });

}

exports.postaddinput= async(req,res,next) =>{
    if (!req.body.name) {
        return res.redirect('/'); 
    }
    try{
        const data= new databasemodel({name:req.body.name}); 

      await data.save();
    }catch(err){
        console.error('Data was not entered properly:', err);
    }

    res.redirect('/'); 

}

