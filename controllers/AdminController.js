const Admin = require('../models/AdminModel');

module.exports.index = (req,res) =>{
    return res.render('form');
}

module.exports.addData = (req,res)=>{
   Admin.create({
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
   },(err,data)=>{
        if(err){
            console.log("record not insert");
            return false;
        }
        console.log("Record successfully insert");
        return res.redirect('back');
   })
}

module.exports.viewData = async (req,res)=>{
    try{
        let record = await Admin.find({});
        if(record)
        {
            return res.render('view',{
                    record : record
            });
        }
        else{
            console.log("Record not show");
        }
    }
    catch(err){
        console.log(err);
    }
        

    // Admin.find({},(err,record)=>{
    //         if(err){
    //             console.log("Record not show");
    //             return false;
    //         }
    //     return res.render('view',{
    //         record : record
    //     });
    // });
        
}

module.exports.deletedata = (req,res)=>{
    let id = req.params.id;

    Admin.findByIdAndDelete(id,(err,ddata)=>{
        if(err){
            console.log("Record not delete");
            return false;
        }
        console.log("Record successfully delete");
        return res.redirect('back');
    });
}

module.exports.editdata = (req,res) => {
    let id = req.params.id;
    Admin.findById(id,(err,editRocord)=>{
        if(err){
            console.log("record not match");
            return false;
        }
        return res.render('edit',{
            single : editRocord
        })
    });
}

module.exports.updateData = (req,res)=>{
    let id = req.body.id;
   Admin.findByIdAndUpdate(id,{
        name : req.body.name,
        email : req.body.email,
        password : req.body.password
   },(err,data)=>{
        if(err){
            console.log("Record not update");
            return false;
        }
        console.log("Record successfully update");
        return res.redirect('/admin/viewdata')
   })
}