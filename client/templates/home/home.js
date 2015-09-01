Meteor.subscribe('jobs');

Template.home.helpers({
  jobs: function() {
    return Jobs.find({}, {sort: {createdAt: -1}});
  }
});

Template.home.events({
  'click #post-button': function(e) {
    e.preventDefault();

    $('#create-form').slideToggle();
  }
});

// Configure Accounts to require username instead of email
Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
});
