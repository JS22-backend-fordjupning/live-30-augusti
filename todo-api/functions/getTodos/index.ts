const response = require('../../responses/index.ts');

const todoList = [
    { todo: 'Köp kaffe' },
    { todo: 'Brygg kaffe' },
    { todo: 'Drick kaffe' },
]

exports.handler = async (event, context) => {
    return response.sendResponse(200, { todoList });
}