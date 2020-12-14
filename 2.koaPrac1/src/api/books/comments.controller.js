const Joi = require('joi');
const ObjectId = require('mongoose').Types.ObjectId;
// const {Types:{ObjectId}} = require('mongoose'); <-- 위의 소스와 같은 소스

exports.replace = async(ctx)