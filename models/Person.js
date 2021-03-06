var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
People and Persons and a Person are objects representing the static information related to
a person. The information about their role needs to be stored in the Contacts collection,
as Admins will want to be able to track persons across roles and organizations and
contact information.

User Accounts will be created linked to the Person data.  A User should be able to edit their
Person data, as well as add and manage their Contacts.

Persons that are "Team Members" will be Administrators with Administrative permissions from their User Account.
*/

var PersonSchema = new Schema({
  called: {
    type: String
  },
  givenName: {
    type: String
  },
  surName: {
    type: String
  },
  maidenName: {
    type: String
  },
  birthDate: {
    type: Date
  },
  gender: {
    type: String
  },
  hasUserAccount: {
    type: Boolean
  },
  isTeamMember: {
    type: Boolean
  },
  currentOrganizations: [
    { type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
    }
  ],
  currentContacts: [
    { type: mongoose.Schema.Types.ObjectId,
      ref: 'Contacts',
    }
  ],
  priorContacts: [
    { type: mongoose.Schema.Types.ObjectId,
      ref: 'Contacts',
    }
  ],
  personalContacts: [
    { type: mongoose.Schema.Types.ObjectId,
      ref: 'Contacts',
    }
  ],
});

module.exports = mongoose.model('Person', PersonSchema);
