const roomsgallery = {
    name: 'roomsgallery',
    title: 'Rooms Gallery',
    type: 'document',
    fields: [
        {
          name: 'roomimage',
          title: 'Room Images',
          type: 'array',
          of: [{ type: 'image' }],
          validation: (Rule) => Rule.required(),
        }
      ],
}

export default roomsgallery;
