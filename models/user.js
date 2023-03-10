const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleSaveErrors } = require("../helpers");

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // mysite@ourearth.com
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match: emailRegexp,
    },
    password: {
      type: String,
      default: "google registration",
      minlength: 6,
    },
    token: {
      type: String,
      default: "",
    },
    avatarURL: {
      type: String,
      default: "//www.gravatar.com/avatar/93942e96f5acd83e2e047ad8fe03114d",
    },
    balance: {
      type: Number,
      default: 0,
    }
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleSaveErrors);

const registerSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const updateSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business"),
});

const updateBalanceSchema = Joi.object({
  balance: Joi.number(),
});

const verifyEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

const schemas = {
  registerSchema,
  loginSchema,
  updateSchema,
  updateBalanceSchema,
  verifyEmailSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemas,
};
