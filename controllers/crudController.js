import CRUD from "../models/crudModel.js";

export const createCrud = async (req, res, next) => {
  try {
    const crud = await CRUD.create(req.body);

    res.status(201).json(crud);
  } catch (error) {
    console.log(error);
  }
};

export const updateCrud = async (req, res, next) => {
  try {
    const { id } = req.params;

    const crud = await CRUD.updateOne({ _id: id }, req.body);

    res.status(201).json(crud);
  } catch (error) {
    console.log(error);
  }
};

export const getCruds = async (req, res, next) => {
  try {
    const cruds = await CRUD.find();

    res.status(201).json({
      cruds
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCrud = async (req, res, next) => {
  try {
    const { id } = req.params;

    const crud = await CRUD.findOne({ _id: id });

    res.status(201).json(crud);
  } catch (error) {
    console.log(error);
  }
};

export const deleteCrud = async (req, res, next) => {
  try {
    const { id } = req.params;

    const crud = await CRUD.deleteOne({ _id: id });

    res.status(201).json(crud);
  } catch (error) {
    console.log(error);
  }
};
