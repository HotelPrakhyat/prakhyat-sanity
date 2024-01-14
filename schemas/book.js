const book = {
    name: 'book',
    title: 'Bookig Details',
    type: 'document',
    fields: [
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }
    ],
  }
  
  export default book
  