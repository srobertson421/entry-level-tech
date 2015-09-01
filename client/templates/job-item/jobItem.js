/*Template.jobItem.helpers({
	owned: function() {
		if ()
	}
});*/


Template.jobItem.events({
	"click .delete-job-button": function(e) {
		e.preventDefault();

		Meteor.call('deleteJob', this._id);
	}
});