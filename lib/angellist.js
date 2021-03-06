{
  search:[
    {
      type:'contact',
      query:'https://api.angel.co/1/search?query={{term}}&type=User',
      translate:'parseJSON(response)',
      name:{
        selector:'.name',
        expression:'element'
      },
      link:{
        selector:'.url',
        expression:'element'
      },
      image:{
        selector:'.pic',
        expression:'element'
      }
    },
    {
      type:'organization',
      query:'https://api.angel.co/1/search?query={{term}}&type=Startup',
      translate:'parseJSON(response)',
      name:{
        selector:'.name',
        expression:'element'
      },
      link:{
        selector:'.url',
        expression:'element'
      },
      image:{
        selector:'.pic',
        expression:'element'
      }
    }
  ]
}
