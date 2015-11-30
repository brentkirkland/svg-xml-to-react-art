var AppDispatcher = require('../dispatcher/AppDispatcher');

var Actions = {

  convert: function(data) {
    AppDispatcher.handleViewAction({
      actionType: 'CONVERT',
      data: data,
    })
  }
}

module.exports = Actions;
