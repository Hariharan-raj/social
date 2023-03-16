import { NumberModel } from "../models/Number.js";

export const save = async (req, res) => {
  let saved;
  const number = req.body;
  const newUser = new NumberModel(number);
  saved = await newUser.save();
  res.status(201);
  return saved;
};

export const findall_users = async () => {
  return NumberModel.find();
};

export const update_user = async (req, res) => {
  console.log("inside edit service");
  console.log(req.params.id);
  console.log(req.body);
  const saved = await NumberModel.findByIdAndUpdate(
    { _id: req.params.id },
    {
      phoneNumber: req.body.phoneNumber, //problem is here find it out!
    }
  );
  if (!saved) throw Error("user not found");
  console.log(saved);
  return saved;
};

export const delete_user = async (req, res) => {
  const saved = await NumberModel.findByIdAndDelete(req.params.id);
  if (!saved) throw Error("user not found");
  return saved;
};
