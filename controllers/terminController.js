var TerminModel = require('../models/terminModel.js');

/**
 * terminController.js
 *
 * @description :: Server-side logic for managing termins.
 */
module.exports = {

    /**
     * terminController.list()
     */
    list: function (req, res) {
        TerminModel.find(function (err, termins) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting termin.',
                    error: err
                });
            }

            return res.json(termins);
        });
    },

    /**
     * terminController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        TerminModel.findOne({_id: id}, function (err, termin) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting termin.',
                    error: err
                });
            }

            if (!termin) {
                return res.status(404).json({
                    message: 'No such termin'
                });
            }

            return res.json(termin);
        });
    },

    /**
     * terminController.create()
     */
    create: function (req, res) {
        var termin = new TerminModel({
			datum : req.body.datum,
			refNum : req.body.refNum,
			diagnoza : req.body.diagnoza,
			pacientFK : req.body.pacientFK,
			specialistFK : req.body.specialistFK
        });

        termin.save(function (err, termin) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating termin',
                    error: err
                });
            }

            return res.status(201).json(termin);
        });
    },

    /**
     * terminController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        TerminModel.findOne({_id: id}, function (err, termin) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting termin',
                    error: err
                });
            }

            if (!termin) {
                return res.status(404).json({
                    message: 'No such termin'
                });
            }

            termin.datum = req.body.datum ? req.body.datum : termin.datum;
			termin.refNum = req.body.refNum ? req.body.refNum : termin.refNum;
			termin.diagnoza = req.body.diagnoza ? req.body.diagnoza : termin.diagnoza;
			termin.pacientFK = req.body.pacientFK ? req.body.pacientFK : termin.pacientFK;
			termin.specialistFK = req.body.specialistFK ? req.body.specialistFK : termin.specialistFK;
			
            termin.save(function (err, termin) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating termin.',
                        error: err
                    });
                }

                return res.json(termin);
            });
        });
    },

    /**
     * terminController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        TerminModel.findByIdAndRemove(id, function (err, termin) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the termin.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
