const { addNoteHandler, getALLNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
      method:'GET',
      path: '/notes',
      handler: getALLNotesHandler
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteByIdHandler,
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteByIdHandler
    }
  ];
   
  module.exports = routes;