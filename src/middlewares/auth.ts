
const auth = (req: any, res: any, next: any) => {
    if(req.query.key !==process.env.KEY ){
        return res.status(400).json({ message: "unauthorized" })
    }
    next();
  };
  
  export default auth;