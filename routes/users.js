import express from "express";
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const router = express.Router();

const users = [
  // {
  //   id:uuidv4(),
  //   firstName: "John",
  //   lastName: "Doe",
  //   age: 25,
  // },
  {
    id:uuidv4(),
    firstName: "Vish",
    lastName: "Nayak",
    age: 23,
  }
];

// all routes i here are starting with /users
router.get("/", (req, res) => {
  // console.log(users)
  res.send(users)
});

router.post("/", (req,res)=>{
  // console.log("Post route reached")
  // console.log(req.body)
  const user = req.body
  // const userId = uuidv4()
  // const userWithId = {...user,id:uuidv4()}
  users.push({...user,id:uuidv4()})
  res.send(`User with name ${user.firstName} saved.`)
})

router.get("/:id",(req,res)=>{
  // console.log(req.params);
  const {id} = req.params
  const foundUser = users.find(user=> user.id == id)
  res.send(foundUser)
})

export default router;
