Meteor.publish('jobs', function() {
	return Jobs.find();
});

Meteor.methods({
	addJob: function(job) {

		console.log('Inserting new job');
		console.log(job);

		Jobs.insert({
      title: job.title,
      company: job.company,
      location: job.location,
      url: job.url,
      description: job.description,
      createdAt: new Date(),
      owner: Meteor.userId()
    });
	},

	updateJob: function() {},

	deleteJob: function(jobId) {
		Jobs.remove(jobId);
	}
});