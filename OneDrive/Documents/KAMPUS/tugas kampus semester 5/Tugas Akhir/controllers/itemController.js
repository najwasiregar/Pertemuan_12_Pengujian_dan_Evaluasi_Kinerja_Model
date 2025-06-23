const itemService = require('../services/itemService');

exports.getAllItems = async (req, res, next) => {
    try {
        const items = await itemService.getAllItems();
        res.status(200).json({ success: true, data: items });
    } catch (error) {
        next(error);
    }
};

exports.getItemById = async (req, res, next) => {
    try {
        const item = await itemService.getItemById(req.params.id);
        if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
        res.status(200).json({ success: true, data: item });
    } catch (error) {
        next(error);
    }
};

exports.createItem = async (req, res, next) => {
    try {
        const item = await itemService.createItem(req.body);
        res.status(201).json({ success: true, data: item });
    } catch (error) {
        next(error);
    }
};

exports.updateItem = async (req, res, next) => {
    try {
        const item = await itemService.updateItem(req.params.id, req.body);
        if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
        res.status(200).json({ success: true, data: item });
    } catch (error) {
        next(error);
    }
};

exports.deleteItem = async (req, res, next) => {
    try {
        const item = await itemService.deleteItem(req.params.id);
        if (!item) return res.status(404).json({ success: false, message: 'Item not found' });
        res.status(200).json({ success: true, message: 'Item deleted successfully' });
    } catch (error) {
        next(error);
    }
};
