const data = []; 
exports.getaddinput=(req,res,next) =>{
    res.render('index', { 
        title: 'Home',
        names: data 
    });

}

exports.postaddinput=(req,res,next) =>{
    if (!req.body.name) {
        return res.redirect('/'); 
    }
    
    data.push({ name: req.body.name }); 
    res.redirect('/'); 

}
exports.getadd=(req,res,next) =>{
    res.render('extra', { 
        title: 'Home'
    });

}