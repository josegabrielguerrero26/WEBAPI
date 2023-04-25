test1 = (req, res)=>{
    const infor= "Celeste lagunes-1controller!";
    res.status(200).send(infor);
};
test2 = (req, res)=>{
    const infor= "Gabriel Guerrero-2controller!";
    res.status(200).send(infor);
};

module.exports={test1, test2}