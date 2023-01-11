"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth = (req, res, next) => {
    if (req.query.key !== process.env.KEY) {
        return res.status(400).json({ message: "unauthorized" });
    }
    next();
};
exports.default = auth;
