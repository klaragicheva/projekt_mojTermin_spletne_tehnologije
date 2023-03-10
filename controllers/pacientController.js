var PacientModel = require('../models/pacientModel.js');

module.exports = {

    list: function (req, res) {
        PacientModel.find(function (err, pacients) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting pacient.',
                    error: err
                });
            }
            return res.json(pacients);
        });
    },

    showByName: function (req, res) {
        var name = req.params.name;

        PacientModel.find({ime: name}, function (err, pacient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting pacient by name.',
                    error: err
                });
            }
            if (!pacient) {
                return res.status(404).json({
                    message: 'No such pacient with given name.'
                });
            }
            return res.json(pacient);
        });
    },

    showBySurname: function (req, res) {
        var surname = req.params.surname;

        PacientModel.find({priimek: surname}, function (err, pacient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting pacient by surname.',
                    error: err
                });
            }
            if (!pacient) {
                return res.status(404).json({
                    message: 'No such pacient with given surname.'
                });
            }
            return res.json(pacient);
        });
    },

    showByEmso: function (req, res) {
        var emso = req.params.emso;

        PacientModel.findOne({emso: emso}, function (err, pacient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting pacient by EMSO.',
                    error: err
                });
            }
            if (!pacient) {
                return res.status(404).json({
                    message: 'No such pacient with given EMSO.'
                });
            }
            return res.json(pacient);
        });
    },

    showByRefNum: function (req, res) {
        var refNum = req.params.refNum;

        PacientModel.findOne({refNum: refNum}, function (err, pacient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting pacient by reference number.',
                    error: err
                });
            }
            if (!pacient) {
                return res.status(404).json({
                    message: 'No such pacient with given reference number.'
                });
            }

            return res.json(pacient);
        });
    },

    show: function (req, res) {
        var id = req.params.id;

        PacientModel.findOne({_id: id}, function (err, pacient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting pacient.',
                    error: err
                });
            }

            if (!pacient) {
                return res.status(404).json({
                    message: 'No such pacient'
                });
            }

            return res.json(pacient);
        });
    },

    create: function (req, res) {
        var pacient = new PacientModel({
			ime : req.body.ime,
			priimek : req.body.priimek,
			emso : req.body.emso,
			spol : req.body.spol,
			starost : req.body.starost
        });

        pacient.save(function (err, pacient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating pacient',
                    error: err
                });
            }

            return res.status(201).json(pacient);
        });
    },

    update: function (req, res) {
        var id = req.params.id;

        PacientModel.findOne({_id: id}, function (err, pacient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting pacient',
                    error: err
                });
            }

            if (!pacient) {
                return res.status(404).json({
                    message: 'No such pacient'
                });
            }

            pacient.ime = req.body.ime ? req.body.ime : pacient.ime;
			pacient.priimek = req.body.priimek ? req.body.priimek : pacient.priimek;
			pacient.emso = req.body.emso ? req.body.emso : pacient.emso;
			pacient.spol = req.body.spol ? req.body.spol : pacient.spol;
			pacient.starost = req.body.starost ? req.body.starost : pacient.starost;
			
            pacient.save(function (err, pacient) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating pacient.',
                        error: err
                    });
                }
                return res.json(pacient);
            });
        });
    },

    remove: function (req, res) {
        var id = req.params.id;

        PacientModel.findByIdAndRemove(id, function (err, pacient) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the pacient.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
