Jobs = new Mongo.Collection('jobs');

var Schemas = {};

Schemas.Jobs = new SimpleSchema({
	title: {
		type: String,
		label: "Title",
		max: 200
	},
	company: {
		type: String,
		label: "Company",
		max: 200
	},
	location: {
		type: String,
		label: "Location",
		max: 200
	},
	url: {
		type: String,
		label: "Url",
		max: 200
	},
	description: {
		type: String,
		label: "Description",
		max: 1000
	},
	createdAt: {
		type: Date,
		label: "Created date"
	},
	owner: {
		type: String,
		label: "Owner Id",
	}
});

Jobs.attachSchema(Schemas.Jobs);