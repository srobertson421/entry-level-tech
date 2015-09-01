Template.createJob.helpers({

});

Template.createJob.events({
	"click #create-job-submit": function(e) {
		e.preventDefault();

		var newJob = {
			title: $('#title-input').val(),
			description: $('#desc-input').val()
		}

		Meteor.call('addJob', newJob);
	}
});