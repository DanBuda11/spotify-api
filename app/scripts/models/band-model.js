import Backbone from 'backbone';

const BandModel = Backbone.Model.extend({
	defaults: {

	},
	rootUrl: 'http://tiny-za-server.herokuapp.com/collections/buda-bands-collection',
	idAttribute: '_id'
});

export default BandModel;