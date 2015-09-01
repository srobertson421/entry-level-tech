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
		var compVal = $('#company-input').val();
		var locVal = $('#loc-input').val();
		var urlVal = $('#url-input').val();

		var newJob = {
			title: titleVal,
			company: compVal,
			location: locVal,
			url: urlVal,
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