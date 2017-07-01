// default message object
function messages(type) {
    switch(type) {
        case 'home':
            return {
                title: 'Escribe en el buscador lo que quieres encontrar',
                advices: [
                    'Escribe tu búsqueda en el campo que figura en la parte superior de la pantalla.'
                ]
            }

            break

        case 'page_not_found':
            return {
                title: 'Parece que esta página no existe',
                advices: [
                   'Escribe tu búsqueda en el campo que figura en la parte superior de la pantalla.'
                ]
            }

            break

        case 'product_not_found':
            return {
                title: 'No hay publicaciones que coincidan con tu búsqueda.',
                advices: [
                    'Revisa la ortografía de la palabra.',
                    'Utiliza palabras más genéricas o menos palabras.',
                    'Navega por categorías de productos para encontrar un producto similar.'
                ]
            }

            break
    }
}

module.exports = messages
