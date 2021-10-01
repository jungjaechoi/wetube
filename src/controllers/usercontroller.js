import User from "../models/User.js";
import bcrypt from "bcrypt";

export const home = async (req, res) => {
    return res.render("home", { pageTitle: "Home"}); 
  };

export const getJoin = (req, res) => 
    res.render("join", {pageTitle: "Join"});

export const postJoin = async (req, res) => {
    const { name, username, email, password,password2, location} = req.body;
    const pageTitle = "Join";
    if(password !== password2){
        return res.status(400).render("join", {
            pageTitle,
            errorMessage: "Password confirmation does not match.",
        });
    }
    const usernameExists = await User.exists({ $or: [{username},{email}] });
    if(usernameExists){
        return res.status(400).render("join", {
            pageTitle,
            errorMessage: "This username/email is already taken"
        });// $or 안쓰고 그냥 두번 반복하면 username과 email에 따라 다르 메세지 출력가능
    }// or 안쓰고 parameter로 username, email 쓰면 둘 다 있어야 작동함
    try{
    await User.create({
        name,
        username,
        email,
        password,
        location,
    });
    return res.redirect("/login");
    }   
    catch(error){
        return res.status(400).render("join", 
          { pageTitle: "Upload Video",
          errorMessage: error._message, 
        });
      }
};

export const getLogin = (req, res) => 
    res.render("login", {pageTitle: "Login"});

export const postLogin = async (req, res) =>{
    const {username, password} = req.body;
    const pageTitle = "Login";
    const user = await User.findOne({username});
    if(!user){
        return res.status(400).render("login", {
            pageTitle, 
            errorMessage: "An account with this username does not exists."
        });
    }
    const ok = await bcrypt.compare(password, user.password);
    if (!ok){
        return res.status(400).render("login", {
            pageTitle, 
            errorMessage: "Wrong password",
        });
    }
    
    return res.redirect("/home");
};

