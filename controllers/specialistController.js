var SpecialistModel = require('../models/specialistModel.js');

/**
 * specialistController.js
 *
 * @description :: Server-side logic for managing specialists.
 */
module.exports = {

    list: function (req, res) {
        SpecialistModel.find(function (err, specialists) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting specialist.',
                    error: err
                });
            }

            return res.json(specialists);
        });
    },

    show: function (req, res) {
        var id = req.params.id;

        SpecialistModel.findOne({_id: id}, function (err, specialist) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting specialist.',
                    error: err
                });
            }

            if (!specialist) {
                return res.status(404).json({
                    message: 'No such specialist'
                });
            }

            return res.json(specialist);
        });
    },

    showByName: function (req, res) {
        var name = req.params.name;

        SpecialistModel.findOne({ime: id}, function (err, specialist) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting specialist by name.',
                    error: err
                });
            }

            if (!specialist) {
                return res.status(404).json({
                    message: 'No such specialist with given name.'
                });
            }

            return res.json(specialist);
        });
    },

    showBySurname: function (req, res) {
        var surname = req.params.surname;

        SpecialistModel.findOne({priimek: surname}, function (err, specialist) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting specialist by surname.',
                    error: err
                });
            }

            if (!specialist) {
                return res.status(404).json({
                    message: 'No such specialist with given surname.'
                });
            }

            return res.json(specialist);
        });
    },

    showByPoklic: function (req, res) {
        var poklic = req.params.poklic;

        SpecialistModel.findOne({poklic: poklic}, function (err, specialist) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting specialist by poklic.',
                    error: err
                });
            }

            if (!specialist) {
                return res.status(404).json({
                    message: 'No such specialist with given poklic.'
                });
            }

            return res.json(specialist);
        });
    },

    showAllByZZ: function (req, res) {
        var zz = req.params.zz;

        SpecialistModel.findOne({zdravstveniZavodFK: zz}, function (err, specialist) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting specialist by zdravstveniZavodFK.',
                    error: err
                });
            }

            if (!specialist) {
                return res.status(404).json({
                    message: 'No such specialist with given zdravstveniZavodFK.'
                });
            }

            return res.json(specialist);
        });
    },

    create: async function (req, res) {
        var specialist = new SpecialistModel({
            ime: req.body.ime,
            priimek: req.body.priimek,
            email: req.body.email,
            password: req.body.password,
            poklic: req.body.poklic,
            zdravstveniZavodFK: req.body.zdravstveniZavodFK
        });

        const result = await specialist.save();
        return res.status(201).json(result);
    },

    update: function (req, res) {
        var id = req.params.id;

        SpecialistModel.findOne({_id: id}, function (err, specialist) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting specialist',
                    error: err
                });
            }

            if (!specialist) {
                return res.status(404).json({
                    message: 'No such specialist'
                });
            }

            specialist.ime = req.body.ime ? req.body.ime : specialist.ime;
			specialist.priimek = req.body.priimek ? req.body.priimek : specialist.priimek;
			specialist.email = req.body.email ? req.body.email : specialist.email;
			specialist.password = req.body.password ? req.body.password : specialist.password;
			specialist.poklic = req.body.poklic ? req.body.poklic : specialist.poklic;
			specialist.zdravstveniZavodFK = req.body.zdravstveniZavodFK ? req.body.zdravstveniZavodFK : specialist.zdravstveniZavodFK;
			
            specialist.save(function (err, specialist) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating specialist.',
                        error: err
                    });
                }

                return res.json(specialist);
            });
        });
    },

    remove: function (req, res) {
        var id = req.params.id;

        SpecialistModel.findByIdAndRemove(id, function (err, specialist) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the specialist.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
