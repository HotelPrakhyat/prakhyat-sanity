const events = {
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
      {
        name: 'eventname',
        title: 'Event Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'eventimages',
        title: 'Event Images',
        type: 'array',
        of: [{ type: 'image' }],
        validation: (Rule) => Rule.required(),
      }
    ],
}

export default events;
