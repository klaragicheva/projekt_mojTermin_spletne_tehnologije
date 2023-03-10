var ZdravstvenizavodModel = require('../models/zdravstveniZavodModel.js');

module.exports = {

    list: async function (req, res) {
        const result = await ZdravstvenizavodModel.find();
        return res.status(201).json(result);
    },

    show: async function (req, res) {
        var id = req.params.id;

        const result = await ZdravstvenizavodModel.findOne({_id: id});
        return res.status(201).json(result);
    },

    create: async function (req, res) {
        var zdravstveniZavod = new ZdravstvenizavodModel({
            naziv: req.body.naziv,
            lokacija: req.body.lokacija
        });

        const result = await zdravstveniZavod.save();
        return res.status(201).json(result);
    },

    update: function (req, res) {
        var id = req.params.id;

        ZdravstvenizavodModel.findOne({_id: id}, async function (err, zdravstveniZavod) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting zdravstveniZavod',
                    error: err
                });
            }

            if (!zdravstveniZavod) {
                return res.status(404).json({
                    message: 'No such zdravstveniZavod'
                });
            }

            zdravstveniZavod.naziv = req.body.naziv ? req.body.naziv : zdravstveniZavod.naziv;
            zdravstveniZavod.lokacija = req.body.lokacija ? req.body.lokacija : zdravstveniZavod.lokacija;

            const result = await zdravstveniZavod.save();
            return res.status(201).json(result);

            /*            zdravstveniZavod.save(function (err, zdravstveniZavod) {
                            if (err) {
                                return res.status(500).json({
                                    message: 'Error when updating zdravstveniZavod.',
                                    error: err
                                });
                            }

                            return res.json(zdravstveniZavod);
                        });*/
        });
    },

    /**
     * zdravstveniZavodController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ZdravstvenizavodModel.findByIdAndRemove(id, function (err, zdravstveniZavod) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the zdravstveniZavod.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
