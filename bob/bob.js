export const hey = (message) => {
  if (message.toUpperCase() === message) {
    return 'Whoa, chill out!'
  }
  else if (message.includes('?')) {
    return 'Sure.'
  }
  else if (message === '') {
    return 'Fine. Be that way!'
  } 
  else {
    return 'Whatever.'
  }

  /*
  switch (message) {
    case message.toUpperCase() === message:
      return 'Whoa, chill out!'
    case message.includes('?'):
      return 'Sure.'
     
    case message === '':
      return 'Fine. Be that way!'
    }
  }

  */
  /*'Whoa, chill out!' (todo el mensaje debe contener mayusculas)*/
  /*sure  (en el mensaje debe haber un ?)*/
  /*Fine. Be that way! (texto vacio)*/
  /*whatever (caso final)*/
};
