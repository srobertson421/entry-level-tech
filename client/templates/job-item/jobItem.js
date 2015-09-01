Template.jobItem.helpers({
	owned: function() {
		if (Meteor.userId() === this.owner) {
			return true;
		}
	}
});


Template.jobItem.events({
	"click .delete-job-button": function(e) {
		e.preventDefault();

		if(confirm('Are you sure you want to delete this job?')){
			Meteor.call('deleteJob', this._id);
		} else {
			return false;
		}
	}
});