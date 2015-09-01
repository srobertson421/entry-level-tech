Template.createJob.onRendered(function() {
	// Setting up Parsley validation
	$('#create-job').parsley({
		successClass: 'has-success',
		errorClass: 'has-error'
	});
});

Template.createJob.events({
	"click #create-job-submit": function(e) {
		e.preventDefault();

		var titleVal = $('#title-input').val();
		var descVal = $('#desc-input').val();

		var newJob = {
			title: titleVal,
			description: descVal
		}

		Meteor.call('addJob', newJob, function(error, result) {
			if (error) {
				console.log(error);
				alert(error.reason);
			} else {
				$('#title-input').val('');
				$('#desc-input').val('');
			}
		});
	}
});