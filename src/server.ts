import { promisify } from 'util'
import { INotesServer, NotesService } from '../proto/notes_grpc_pb'
import { Note, NoteFindRequest, NoteFindResponse, NoteListResponse, Void } from '../proto/notes_pb'
import { sendUnaryData, Server, ServerCredentials, ServerUnaryCall, UntypedHandleCall } from '@grpc/grpc-js'

const notes: Note.AsObject[] = [
  { id: 1, title: 'Note 1', description: 'Content 1' },
  { id: 2, title: 'Note 2', description: 'Content 2' }
]

class NotesServer implements INotesServer {
  find (call: ServerUnaryCall<NoteFindRequest, NoteFindResponse>, callback: sendUnaryData<NoteFindResponse>) {
    const id = call.request.getId()
    const foundNote = notes.find((note) => note.id === id)
    if (!foundNote) return callback(new Error('Note not found'), null)

    const response = new NoteFindResponse()
    response.setNote((new Note()).setTitle(foundNote.title).setId(foundNote.id).setDescription(foundNote.description))
    return callback(null, response)
  }

  list (_: ServerUnaryCall<Void, NoteListResponse>, callback: sendUnaryData<NoteListResponse>): void {
    const response = new NoteListResponse()
    notes.forEach((note) => {
      response.addNotes((new Note).setId(note.id).setTitle(note.title).setDescription(note.description))
    })
    callback(null, response)
  }

  [name: string]: UntypedHandleCall

}

const server = new Server()
server.addService(NotesService, new NotesServer())

const bindPromise = promisify(server.bindAsync).bind(server)

bindPromise('0.0.0.0:50052', ServerCredentials.createInsecure())
  .then((port) => {
    console.log(`listening on ${port}`)
    server.start()
  })
  .catch(console.error)
