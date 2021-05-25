// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var notes_pb = require('./notes_pb.js');

function serialize_NoteFindRequest(arg) {
  if (!(arg instanceof notes_pb.NoteFindRequest)) {
    throw new Error('Expected argument of type NoteFindRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NoteFindRequest(buffer_arg) {
  return notes_pb.NoteFindRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NoteFindResponse(arg) {
  if (!(arg instanceof notes_pb.NoteFindResponse)) {
    throw new Error('Expected argument of type NoteFindResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NoteFindResponse(buffer_arg) {
  return notes_pb.NoteFindResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NoteListResponse(arg) {
  if (!(arg instanceof notes_pb.NoteListResponse)) {
    throw new Error('Expected argument of type NoteListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NoteListResponse(buffer_arg) {
  return notes_pb.NoteListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Void(arg) {
  if (!(arg instanceof notes_pb.Void)) {
    throw new Error('Expected argument of type Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Void(buffer_arg) {
  return notes_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var NotesService = exports.NotesService = {
  list: {
    path: '/Notes/List',
    requestStream: false,
    responseStream: false,
    requestType: notes_pb.Void,
    responseType: notes_pb.NoteListResponse,
    requestSerialize: serialize_Void,
    requestDeserialize: deserialize_Void,
    responseSerialize: serialize_NoteListResponse,
    responseDeserialize: deserialize_NoteListResponse,
  },
  find: {
    path: '/Notes/Find',
    requestStream: false,
    responseStream: false,
    requestType: notes_pb.NoteFindRequest,
    responseType: notes_pb.NoteFindResponse,
    requestSerialize: serialize_NoteFindRequest,
    requestDeserialize: deserialize_NoteFindRequest,
    responseSerialize: serialize_NoteFindResponse,
    responseDeserialize: deserialize_NoteFindResponse,
  },
};

exports.NotesClient = grpc.makeGenericClientConstructor(NotesService);
