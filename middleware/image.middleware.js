const multer = require("multer");

// Функция для определения пути сохранения в зависимости от типа
const getDestination = (type) => {
  switch (type) {
    case "products":
      return "images/products";
    case "users":
      return "images/users";
    case "topical":
      return "images/topical";
  }
};

// Функция для создания Multer объекта
const createMulter = (type) => {
  return multer({
    storage: multer.diskStorage({
      destination: (_, __, cb) => {
        const destination = getDestination(type);
        cb(null, destination);
      },
      filename: (_, file, cb) => {
        cb(null, file.originalname);
      },
    }),
    fileFilter: (req, file, cb) => {
      const acceptedTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/svg",
      ];
      if (acceptedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(null, false);
      }
    },
  });
};

module.exports = createMulter;
