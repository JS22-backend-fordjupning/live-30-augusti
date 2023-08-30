const responses = require('../../responses/index.ts');

const todos = [
    { todo: 'Köp kaffe' },
    { todo: 'Brygg kaffe' },
    { todo: 'Drick kaffe' },
]

exports.handler = async (event, context) => {
    const { todo } = JSON.parse(event.body);

    todos.push({ todo });

    return responses.sendResponse(200, { success: true });
}