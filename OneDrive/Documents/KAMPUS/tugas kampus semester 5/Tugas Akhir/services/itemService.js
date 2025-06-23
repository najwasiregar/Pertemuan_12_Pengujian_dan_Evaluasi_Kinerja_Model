const Item = require('../models/item');

exports.getAllItems = async () => await Item.find();

exports.getItemById = async (id) => await Item.findById(id);

exports.createItem = async (data) => {
    const newItem = new Item(data);
    return await newItem.save();
};

exports.updateItem = async (id, data) => await Item.findByIdAndUpdate(id, data, { new: true });

exports.deleteItem = async (id) => await Item.findByIdAndDelete(id);
