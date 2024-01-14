const rooms = {
    name: 'rooms',
    title: 'Rooms',
    type: 'document',
    fields: [
      {
        name: 'roomimage',
        title: 'Normal Room',
        type: 'image',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'deluxeimage',
        title: 'Deluxe Room',
        type: 'image',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'sweetimage',
        title: 'Sweet Room',
        type: 'image',
        validation: (Rule) => Rule.required(),
      }
    ],
  }
  
  export default rooms
  