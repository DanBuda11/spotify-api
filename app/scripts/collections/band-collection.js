import Backbone from 'backbone';
import BandModel from './../models/bands-model.js';

const BandCollection = Backbone.Collection.extend({
	model: BandModel,
	url: 'http://tiny-za-server.herokuapp.com/collections/buda-bands-collection'
});

let bands = new UnicornCollection();

export default bands;