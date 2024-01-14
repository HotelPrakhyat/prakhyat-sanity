const services = {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
      {
        name: 'servicename',
        title: 'Service Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'servicedescription',
        title: 'Service Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Service Image',
        type: 'image',
        validation: (Rule) => Rule.required(),
      }
    ],
  }
  
  export default services
  