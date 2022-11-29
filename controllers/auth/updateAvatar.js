const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;

  const filename = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarsDir, filename);
  await fs.rename(tempUpload, resultUpload);

  await Jimp.read(resultUpload)
    .then((img) => {
      return img
        .resize(250, 250) // resize
        .write(`public/avatars/${filename}`); // save
    })
    .catch((err) => {
      console.error(err);
    });

  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(req.user._id, { avatarURL });

  res.json({
    avatarURL,
  });
};

module.exports = updateAvatar;
